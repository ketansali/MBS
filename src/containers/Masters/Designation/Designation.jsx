import React, { useEffect, useState } from "react";
import Modal from "@iso/components/UI/Modal/Modal";
import Swal from "@iso/components/UI/Swal/Swal";
import LayoutContentWrapper from "@iso/components/utility/layoutWrapper";
import Box from "@iso/components/utility/box";
import ContentHolder from "@iso/components/utility/contentHolder";
import DataTable from "../../DataTable/DataTable";
import { Form, Input,Spin } from "antd";
import {
  CreateDesignation,
  DeleteDesignation,
  GetAllDesignation,
  UpdateDesignation,
} from "./actions";

import { ActionBtn } from "@iso/components/uielements/InputStyle/Input.style";
import { DeleteCell, EditCell } from "@iso/components/UI/Table/HelperCells";
import { AddItemButtonWrapper } from "../../../components/uielements/DataTableStyle/DataTable.Style";
import {COMMON} from '../../Constant/Index'
const { TextArea } = Input;
export default function Designation() {
  const [modalActive, setModalActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [designation, setDesignation] = useState({});
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });
  const [form] = Form.useForm();

  const handleModal = () => {
    if (!modalActive) {
      form.setFieldsValue({ id: "", name: "", description: "" });
    }
    setModalActive(!modalActive);
  };
  const getData = () => {
    setLoading(true);
    GetAllDesignation(COMMON.getTableParams(tableParams)).then((res) => {
      setDesignation(res?.responseData);
      setTableParams({
        ...tableParams,
        pagination: {
          ...tableParams.pagination,
          total: res.responseData.totalRecords,
        },
      });
      setLoading(false);
    });
  };
  const handleSubmit = () => {
    form
      .validateFields()
      .then(async (values) => {
        setLoading(true);
        const { id, name, description } = form.getFieldValue();

        if (!id) {
          CreateDesignation(values).then(() => {
            getData(COMMON.getTableParams(tableParams));
          });
        } else {
          const updateData = {
            id: id,
            name: name,
            description: description,
          };
          UpdateDesignation(updateData).then(() => {
            getData(COMMON.getTableParams(tableParams));
          });
        }
        setModalActive(!modalActive);
      })
      .catch((error) => {
        console.log("Form validation error:", error);
      });
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, [JSON.stringify(tableParams)]);
  const handleDelete = (id) => {
    Swal().then((willDelete) => {
      if (willDelete) {
        DeleteDesignation(id).then(() => {
          getData();
        });
      }
    });
  };
  const handleUpdate = (record) => {
    form.setFieldsValue({
      id: record.id,
      name: record.name,
      description: record.description,
    });
    setModalActive(!modalActive);
  };
  const handleSearch = (e) => {
    GetAllDesignation(COMMON.getTableParams(e)).then((res) => {
      setDesignation(res?.responseData);
      setLoading(false);
    });
  };

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      sorter: true,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: true,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      sorter: true,
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <>
          <span>
            <DeleteCell handleDelete={() => handleDelete(record.id)} />
          </span>
          <span>
            <EditCell handleEdit={() => handleUpdate(record)} />
          </span>
        </>
      ),
    },
  ];
  const handlePage = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });

    // `dataSource` is useless since `pageSize` changed
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setDesignation([]);
    }
  };
  const modal = () => (
    <Modal
      open={modalActive}
      onClose={handleModal}
      title={form.getFieldValue().id ? "Update Designation" : "Add New Designation"}
      okText={form.getFieldValue().id ? "Update" : "Add"}
      onOk={handleSubmit}
      onCancel={handleModal}
    >
      <Form form={form} name="designation" layout="vertical" scrollToFirstError>
        <Form.Item
          name="name"
          label="Name"
          placeholder="Enter Name"
          rules={[
            {
              required: true,
              message: "Enter Name!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          placeholder="Enter Description"
          rules={[
            {
              required: true,
              message: "Enter Description!",
            },
          ]}
        >
          <TextArea />
        </Form.Item>
      </Form>
    </Modal>
  );
  return (
    <LayoutContentWrapper>
      <AddItemButtonWrapper>
        <div></div>
        <ActionBtn type="primary" onClick={handleModal}>
          Add Designation
        </ActionBtn>
      </AddItemButtonWrapper>

      <Box>
        <ContentHolder style={{ marginTop: 0, overflow: "hidden" }}>
          {modal()}
          {
            <Spin spinning={loading}>
              {
                designation && (
                  <DataTable
                    columns={columns}
                    data={designation.data}
                    title="Designation"
                    handleSearch={handleSearch}
                    handlePage={handlePage}
                    pagination={tableParams.pagination}
                    rowKey="id"
                  />
                )
              }
            </Spin>
          }
        </ContentHolder>
      </Box>
    </LayoutContentWrapper>
  );
}
