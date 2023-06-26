import React, { useEffect, useState } from "react";
import Modal from "@iso/components/UI/Modal/Modal";
import Swal from "@iso/components/UI/Swal/Swal";
import LayoutContentWrapper from "@iso/components/utility/layoutWrapper";
import Box from "@iso/components/utility/box";
import ContentHolder from "@iso/components/utility/contentHolder";
import DataTable from "../../DataTable/DataTable";
import { Form, Spin } from "antd";
import Input from "@iso/components/uielements/input";
import { StatusTag } from "@iso/components/uielements/styles/Statustag.style";
import {
  CreateRelation,
  DeleteRelation,
  GetAllRelation,
  UpdateRelation,
  UpdateCategoryOrders,
} from "./actions";
import InputNumber from "@iso/components/uielements/InputNumber";
import { ActionBtn } from "@iso/components/uielements/InputStyle/Input.style";
import { DeleteCell, EditCell } from "@iso/components/UI/Table/HelperCells";
import {
  AddItemButtonWrapper,
  ActionWrapper,
} from "@iso/components/uielements/DataTableStyle/DataTable.Style";
import { COMMON } from "../../Constant/Index";
export default function Product() {
  const [modalActive, setModalActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState({});
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });
  let sortArray = [];
  const [form] = Form.useForm();

  const handleModal = () => {
    form.resetFields();
    if (!modalActive) {
      form.setFieldsValue({ category: "", id: "" });
    }
    setModalActive(!modalActive);
  };
  const getData = () => {
    setLoading(true);
    GetAllRelation(COMMON.getTableParams(tableParams)).then((res) => {
      setCategories(res?.responseData);
      setTableParams({
        ...tableParams,
        pagination: {
          ...tableParams.pagination,
          total: res.responseData.totalRecords,
        },
      });
      setLoading(false);
    }).catch(() => {
      setLoading(false)
    });
  };
  const handleSubmit = () => {
    form
      .validateFields()
      .then(async (values) => {
        setLoading(true);
        const { id, name } = form.getFieldValue();

        if (!id) {
          CreateRelation(values).then(() => {
            getData(COMMON.getTableParams(tableParams));
          });
        } else {
          const updateData = {
            id: id,
            name: name,
          };
          UpdateRelation(updateData).then(() => {
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
        DeleteRelation(id).then(() => {
          getData();
        });
      }
    });
  };
  const handleUpdate = (record) => {
    form.setFieldsValue({ name: record.name, id: record.id });
    setModalActive(!modalActive);
  };
  const handleSearch = (e) => {
    GetAllRelation(COMMON.getTableParams(e)).then((res) => {
      setCategories(res?.responseData);
      setLoading(false);
    });
  };

  const handleSortOrder = (Order, id) => {
    const orderData = sortArray.filter((e, index) => {
      if (e && e.id === id) {
        return {
          e, index
        }
      }
    });
    if (orderData.length !== 0) {
      sortArray.splice(orderData.index, 1);
      sortArray.push({ id: id, sortOrder: Order });
    }
    if (orderData.length === 0) {
      sortArray.push({ id: id, sortOrder: Order });
    }
  };
  const handleUpdateSortOrder = () => {
    UpdateCategoryOrders(sortArray).then(() => {
      getData(COMMON.getTableParams(tableParams));
    });
  };
  const columns = [
    {
      title: "Status",
      dataIndex: "isActive",
      key: "isActive",
      render: (text, record) => {
        return record.isActive ? (
          <StatusTag className="active">Active</StatusTag>
        ) : (
          <StatusTag className="inActive">InActive</StatusTag>
        );
      },
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: true,
    },
    {
      title: "Sort order",
      dataIndex: "sortOrder",
      key: "sortOrder",
      render: (text, record) => {
        return (
          <InputNumber
            defaultValue={text}
            min={1}
            style={{ width: "20%" }}
            onChange={(e) => handleSortOrder(e, record.id)}
          />
        );
      },
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
      setCategories([]);
    }
  };
  const modal = () => (
    <Modal
      open={modalActive}
      onClose={handleModal}
      title={form.getFieldValue().id ? "Update Relation" : "Add New Relation"}
      okText={form.getFieldValue().id ? "Update" : "Add"}
      onOk={handleSubmit}
      onCancel={handleModal}
      bodyStyle={{ borderRadius: "50px" }}
    >
      <Form form={form} name="product" layout="vertical" scrollToFirstError>
        <Form.Item
          name="name"
          label="Relation"
          rules={[
            {
              required: true,
              message: "Enter Relation!",
            },
          ]}
        >
          <Input placeholder="Enter Relation" />
        </Form.Item>
      </Form>

    </Modal>
  );
  return (
    <LayoutContentWrapper>
      <AddItemButtonWrapper>
        <div></div>
        <div>
          <ActionBtn type="primary" onClick={handleUpdateSortOrder}>
            UPDATE SORT ORDER
          </ActionBtn>
          <ActionBtn type="primary" onClick={handleModal}>
            ADD RELATION
          </ActionBtn>
        </div>
      </AddItemButtonWrapper>

      <Box>
        <ContentHolder style={{ marginTop: 0, overflow: "hidden" }}>
          {modal()}
          <Spin spinning={loading}>
            {categories && (
              <DataTable
                columns={columns}
                data={categories.data}
                title="Relation"
                handleSearch={handleSearch}
                handlePage={handlePage}
                pagination={tableParams.pagination}
                rowKey="id"
                header={true}
              />
            )}
          </Spin>
        </ContentHolder>
      </Box>
    </LayoutContentWrapper>
  );
}
