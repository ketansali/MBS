import React, { useEffect, useState } from "react";
import Modal from "@iso/components/UI/Modal/Modal";
import Swal from "@iso/components/UI/Swal/Swal";
import LayoutContentWrapper from "@iso/components/utility/layoutWrapper";
import Box from "@iso/components/utility/box";
import ContentHolder from "@iso/components/utility/contentHolder";
import DataTable from "../../DataTable/DataTable";
import { Form, Spin } from "antd";
import Input from "@iso/components/uielements/input";
import {
  CreateCountry,
  DeleteCountry,
  GetAllCountry,
  UpdateCountry
} from "./actions";
import { ActionBtn } from "@iso/components/uielements/InputStyle/Input.style";
import { DeleteCell, EditCell } from "@iso/components/UI/Table/HelperCells";
import {
  AddItemButtonWrapper,
  ActionWrapper,
} from "@iso/components/uielements/DataTableStyle/DataTable.Style";
import { COMMON } from "../../Constant/Index";
export default function Country() {
  const [modalActive, setModalActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [countries, setCountries] = useState({});
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });
  const [form] = Form.useForm();

  const handleModal = () => {
    form.resetFields();
    if (!modalActive) {
      form.setFieldsValue({country: "", id: "" });
    }
    setModalActive(!modalActive);
  };
  const getData = () => {
    setLoading(true);
    GetAllCountry(COMMON.getTableParams(tableParams)).then((res) => {
      setCountries(res?.responseData);
      setTableParams({
        ...tableParams,
        pagination: {
          ...tableParams.pagination,
          total: res.responseData.totalRecords,
        },
      });
      setLoading(false);
    }).catch(()=>{
      setLoading(false)
    });
  };
  const handleSubmit = () => {
    form
      .validateFields()
      .then(async (values) => {
        setLoading(true);
        const { id, country } = form.getFieldValue();

        if (!id) {
          CreateCountry(values).then(() => {
            getData(COMMON.getTableParams(tableParams));
          });
        } else {
          const updateData = {
            id: id,
            country: country,
          };
          UpdateCountry(updateData).then(() => {
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
        DeleteCountry(id).then(() => {
          getData();
        });
      }
    });
  };
  const handleUpdate = (record) => {
    form.setFieldsValue({ country: record.country, id: record.id });
    setModalActive(!modalActive);
  };
  const handleSearch = (e) => {
    GetAllCountry(COMMON.getTableParams(e)).then((res) => {
      setCountries(res?.responseData);
      setLoading(false);
    });
  };
  
  const columns = [
    {
      title: "Name",
      dataIndex: "country",
      key: "country",
      sorter: true,
    },
    {
      title: "Actions",
      key: "action",
      className: "noWrapCell",
      width: "15%",
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
      setCountries([]);
    }
  };
  const modal = () => (
    <Modal
      open={modalActive}
      onClose={handleModal}
      title={form.getFieldValue().id ? "Update Country" : "Add New Country"}
      okText={form.getFieldValue().id ? "Update" : "Add"}
      onOk={handleSubmit}
      onCancel={handleModal}
      bodyStyle={{ borderRadius: "50px" }}
    >
      <Form form={form} name="Country" layout="vertical" scrollToFirstError>
        <Form.Item
          name="country"
          label="Country"
          rules={[
            {
              required: true,
              message: "Enter Country!",
            },
          ]}
        >
          <Input placeholder="Enter Country" />
        </Form.Item>
      </Form>
      
    </Modal>
  );
  return (
    <LayoutContentWrapper>
      <AddItemButtonWrapper>
        <div></div>
        <div>
          <ActionBtn type="primary" onClick={handleModal}>
            ADD COUNTRY
          </ActionBtn>
        </div>
      </AddItemButtonWrapper>

      <Box>
        <ContentHolder style={{ marginTop: 0, overflow: "hidden" }}>
          {modal()}
          <Spin spinning={loading}>
            {countries && (
              <DataTable
                columns={columns}
                data={countries.data}
                title="Country"
                handleSearch={handleSearch}
                handlePage={handlePage}
                pagination={tableParams.pagination}
                rowKey="id"
              />
            )}
          </Spin>
        </ContentHolder>
      </Box>
    </LayoutContentWrapper>
  );
}
