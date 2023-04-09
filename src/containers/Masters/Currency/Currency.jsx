import React, { useEffect, useState } from "react";
import Modal from "@iso/components/UI/Modal/Modal";
import { FromLeftItem, FromRightItem } from "@iso/components/UI/Form/FormUI";
import Swal from "@iso/components/UI/Swal/Swal";
import LayoutContentWrapper from "@iso/components/utility/layoutWrapper";
import Box from "@iso/components/utility/box";
import ContentHolder from "@iso/components/utility/contentHolder";
import DataTable from "../../DataTable/DataTable";
import { Form, Spin } from "antd";
import Input from "@iso/components/uielements/input";
import {
  CreateCurrency,
  DeleteCurrency,
  GetAllCurrency,
  UpdateCurrency,
} from "./action";
import { InputNumber } from "../../../components/uielements/InputElement/InputNumber";
import { ActionBtn } from "@iso/components/uielements/InputStyle/Input.style";
import { DeleteCell, EditCell } from "@iso/components/UI/Table/HelperCells";
import {
  AddItemButtonWrapper,
  ActionWrapper,
} from "../../../components/uielements/DataTableStyle/DataTable.Style";
import { COMMON } from "../../Constant/Index";
export default function Currency() {
  const [modalActive, setModalActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currency, setCurrency] = useState({});
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });
  const [form] = Form.useForm();

  const handleModal = () => {
    if (!modalActive) {
      form.setFieldsValue({
        id: "",
        name: "",
        description: "",
        symbolLef: "",
        symbolRight: "",
        code: "",
        decimalPoint: "",
        thousandPoint: "",
        decimalPlace: "",
      });
    }
    setModalActive(!modalActive);
  };
  const getData = () => {
    setLoading(true);
    GetAllCurrency(COMMON.getTableParams(tableParams)).then((res) => {
      setCurrency(res?.responseData);
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
        const {
          id,
          name,
          description,
          symbolLef,
          symbolRight,
          code,
          decimalPoint,
          thousandPoint,
          decimalPlace,
        } = form.getFieldValue();

        if (!id) {
          CreateCurrency(values).then(() => {
            getData(COMMON.getTableParams(tableParams));
          });
        } else {
          const updateData = {
            id: id,
            name: name,
            description: description,
            symbolLef: symbolLef,
            symbolRight: symbolRight,
            code: code,
            decimalPoint: decimalPoint,
            thousandPoint: thousandPoint,
            decimalPlace: decimalPlace,
          };
          UpdateCurrency(updateData).then(() => {
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
        DeleteCurrency(id).then(() => {
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
    GetAllCurrency(COMMON.getTableParams(e)).then((res) => {
      setCurrency(res?.responseData);
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
      setCurrency([]);
    }
  };
  const handleKeyDown = (e) => {
    const { key } = e;
    const pattern = /^[\d.,]+$/;
    if (
      !pattern.test(key) &&
      key !== "Backspace" &&
      key !== "Delete" &&
      key !== "ArrowLeft" &&
      key !== "ArrowRight"
    ) {
      e.preventDefault();
    }
  };
  const modal = () => (
    <Modal
      open={modalActive}
      onClose={handleModal}
      title={form.getFieldValue().id ? "Update Currency" : "Add New Currency"}
      okText={form.getFieldValue().id ? "Update" : "Add"}
      onOk={handleSubmit}
      onCancel={handleModal}
    >
      <Form form={form} name="currency" layout="vertical" scrollToFirstError>
        <FromLeftItem
          name="name"
          label="Name"
          rules={[
            {
              required: true,
              message: "Enter Name!",
            },
          ]}
        >
          <Input placeholder="Enter Name" />
        </FromLeftItem>
        <FromRightItem
          name="code"
          label="Code"
          rules={[
            {
              required: true,
              message: "Enter Code!",
            },
          ]}
        >
          <Input placeholder="Enter Code" />
        </FromRightItem>
        <FromLeftItem name="symbolLeft" label="Symbol Left">
          <Input placeholder="Enter Symbol Left" />
        </FromLeftItem>
        <FromRightItem name="symbolRight" label="Symbol Right">
          <Input placeholder="Enter Symbol Right" />
        </FromRightItem>
        <FromLeftItem
          name="decimalPoint"
          label="Decimal Point"
          rules={[
            {
              required: true,
              message: "Enter Decimal Point!",
            },
          ]}
        >
          <Input placeholder="Enter Decimal Point" onKeyDown={handleKeyDown} />
        </FromLeftItem>
        <FromRightItem
          name="thousandPoint"
          label="Thousand Point"
          rules={[
            {
              required: true,
              message: "Enter Thousand Point!",
            },
          ]}
        >
          <Input placeholder="Enter Thousand Point" onKeyDown={handleKeyDown} />
        </FromRightItem>
        <FromLeftItem
          name="decimalPlace"
          label="Decimal Place"
          rules={[
            {
              required: true,
              message: "Enter Decimal Place!",
            },
          ]}
        >
          <InputNumber placeholder="Enter Decimal Place" min={1} width={230} />
        </FromLeftItem>
      </Form>
    </Modal>
  );
  return (
    <LayoutContentWrapper>
      <AddItemButtonWrapper>
        <div></div>
        <ActionBtn type="primary" onClick={handleModal}>
          Add Currency
        </ActionBtn>
      </AddItemButtonWrapper>

      <Box>
        <ContentHolder style={{ marginTop: 0, overflow: "hidden" }}>
          {modal()}
          <Spin spinning={loading}>
            {currency && (
              <DataTable
                columns={columns}
                data={currency.data}
                title="Currency"
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
