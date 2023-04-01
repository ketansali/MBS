import React, { useEffect, useState } from "react";
import Modal from "@iso/components/UI/Modal/Modal";
import Swal from "@iso/components/UI/Swal/Swal";
import LayoutContentWrapper from "@iso/components/utility/layoutWrapper";
import Box from "@iso/components/utility/box";
import ContentHolder from "@iso/components/utility/contentHolder";
import DataTable from "../../DataTable/DataTable";
import { Form, Input,Spin } from "antd";
import {
  CreateDurationType,
  DeleteDurationType,
  GetAllDurationType,
  UpdateDurationType,
} from "./actions";

import { ActionBtn } from "@iso/components/uielements/InputStyle/Input.style";
import { DeleteCell, EditCell } from "@iso/components/UI/Table/HelperCells";
import { AddItemButtonWrapper,ActionWrapper } from "../../../components/uielements/DataTableStyle/DataTable.Style";
import {COMMON} from '../../Constant/Index'
export default function DurationType() {
  const [modalActive, setModalActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [durationType, setDurationType] = useState({});
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });
  const [form] = Form.useForm();

  const handleModal = () => {
    if (!modalActive) {
      form.setFieldsValue({ id: "" ,name:"",value:"",type:""});
    }
    setModalActive(!modalActive);
  };
  const getData = () => {
    setLoading(true);
    GetAllDurationType(COMMON.getTableParams(tableParams)).then((res) => {
      setDurationType(res?.responseData);
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
        const { id, name,value,type } = form.getFieldValue();

        if (!id) {
          CreateDurationType(values).then(() => {
            getData(COMMON.getTableParams(tableParams));
          });
        } else {
          const updateData = {
            id: id,
            name: name,
            value: value,
            type: type,
          };
          UpdateDurationType(updateData).then(() => {
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
        DeleteDurationType(id).then(() => {
          getData();
        });
      }
    });
  };
  const handleUpdate = (record) => {
    form.setFieldsValue({ category: record.category, id: record.id });
    setModalActive(!modalActive);
  };
  const handleSearch = (e) => {
    GetAllDurationType(COMMON.getTableParams(e)).then((res) => {
      setDurationType(res?.responseData);
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
      title: "Value",
      dataIndex: "value",
      key: "value",
      sorter: true,
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      sorter: true,
    },
    {
      title: 'Actions',
      key: 'action',
      className: 'noWrapCell',
      render: (text, record) => {
        return (
          <ActionWrapper>
            <DeleteCell handleDelete={() => handleDelete(record.id)} />
            <EditCell handleEdit={() => handleUpdate(record)} />
          </ActionWrapper>
        );
      },
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
      setDurationType([]);
    }
  };
  const modal = () => (
    <Modal
      open={modalActive}
      onClose={handleModal}
      title={form.getFieldValue().id ? "Update DurationType" : "Add New DurationType"}
      okText={form.getFieldValue().id ? "Update" : "Add"}
      onOk={handleSubmit}
      onCancel={handleModal}
    >
      <Form form={form} name="durationType" layout="vertical" scrollToFirstError>
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
          name="value"
          label="Value"
          placeholder="Enter Value"
          rules={[
            {
              required: true,
              message: "Enter Value!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="type"
          label="Type"
          placeholder="Enter Type"
          rules={[
            {
              required: true,
              message: "Enter Type!",
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
  return (
    <LayoutContentWrapper>
      <AddItemButtonWrapper>
        <div></div>
        <ActionBtn type="primary" onClick={handleModal}>
          Add DurationType
        </ActionBtn>
      </AddItemButtonWrapper>

      <Box>
        <ContentHolder style={{ marginTop: 0, overflow: "hidden" }}>
          {modal()}
          {
            <Spin spinning={loading}>
              {
                durationType && <DataTable
                columns={columns}
                data={durationType.data}
                title="DurationType"
                handleSearch={handleSearch}
                handlePage={handlePage}
                pagination={tableParams.pagination}
                rowKey="id"
              />
              }
            </Spin>
          }
        </ContentHolder>
      </Box>
    </LayoutContentWrapper>
  );
}
