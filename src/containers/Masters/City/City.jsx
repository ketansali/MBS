import React, { useEffect, useState } from "react";
import Modal from "@iso/components/UI/Modal/Modal";
import Swal from "@iso/components/UI/Swal/Swal";
import LayoutContentWrapper from "@iso/components/utility/layoutWrapper";
import Box from "@iso/components/utility/box";
import ContentHolder from "@iso/components/utility/contentHolder";
import DataTable from "../../DataTable/DataTable";
import { Form, Select, Spin } from "antd";
import Input from "@iso/components/uielements/input";
import { StatusTag } from "@iso/components/uielements/styles/Statustag.style";
import {
  CreateCity,
  DeleteCity,
  GetAllCity,
  UpdateCity,
} from "./actions";
import InputNumber from "@iso/components/uielements/InputNumber";
import { ActionBtn } from "@iso/components/uielements/InputStyle/Input.style";
import { DeleteCell, EditCell } from "@iso/components/UI/Table/HelperCells";
import {
  AddItemButtonWrapper,
  ActionWrapper,
} from "@iso/components/uielements/DataTableStyle/DataTable.Style";
import { COMMON } from "../../Constant/Index";
import { Option } from "antd/lib/mentions";
import { GetCountry, GetCountryByState } from "../Country/actions";

export default function Product() {
  const [modalActive, setModalActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState({});
  const [countries, setCountries] = useState([]);
  const [state, setState] = useState([]);
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
      setState([]);
      form.setFieldsValue({ category: "", id: "", countryMasterId: "", stateMasterId: "", city: "" });
    }
    setModalActive(!modalActive);
  };

  useEffect(() => {
    onCountrySearch();
  }, []);

  const onCountrySearch = (name) => {
    GetCountry(name).then((res) => {
      setCountries([]);
      setCountries(res?.responseData);
    });
  }


  const countryChange = (id, name, stateId = null) => {
    if (id != undefined && id != "") {
      GetCountryByState(id, "").then((res) => {
        setState([]);
        setState(res?.responseData);
        if (stateId != null) {
          form.setFieldsValue({ stateMasterId: stateId });
        }
      });
    }
    else {
      setState([]);
    }
  }

  const getData = () => {
    setLoading(true);
    GetAllCity(COMMON.getTableParams(tableParams)).then((res) => {
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
        const { id, city, stateMasterId } = form.getFieldValue();

        if (!id) {
          CreateCity(values).then(() => {
            getData(COMMON.getTableParams(tableParams));
          });
        } else {
          const updateData = {
            id: id,
            city: city,
            stateMasterId: stateMasterId
          };
          UpdateCity(updateData).then(() => {
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
        DeleteCity(id).then(() => {
          getData();
        });
      }
    });
  };
  const handleUpdate = (record) => {
    form.setFieldsValue({ category: record.category, id: record.id, countryMasterId: record.countryId, city: record.city });
    countryChange(record.countryId, '', record.stateId);
    setModalActive(!modalActive);
  };
  const handleSearch = (e) => {
    GetAllCity(COMMON.getTableParams(e)).then((res) => {
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

  const columns = [
    {
      title: "Date",
      dataIndex: "createdOn",
      key: "createdOn",
      sorter: true,
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
      sorter: true,
    },
    {
      title: "State",
      dataIndex: "state",
      key: "state",
      sorter: true,
    },
    {
      title: "Country",
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
      setCategories([]);
    }
  };
  const modal = () => (
    <Modal
      open={modalActive}
      onClose={handleModal}
      title={form.getFieldValue().id ? "Update City" : "Add New City"}
      okText={form.getFieldValue().id ? "Update" : "Add"}
      onOk={handleSubmit}
      onCancel={handleModal}
      bodyStyle={{ borderRadius: "50px" }}
    >
      <Form form={form} name="product" layout="vertical" scrollToFirstError>
        <Form.Item
          name="countryMasterId"
          label="Country"
          rules={[
            {
              required: true,
              message: "Select Country!",
            },
          ]}
          className="elementWidth"
        >
          <Select
            showSearch
            defaultValue=""
            placeholder="Select Country"
            onSearch={onCountrySearch}
            onChange={countryChange}
            allowClear
          >
            <Option value="">Select Country</Option>
            {
              countries && countries.map((c) => (
                <Option value={c.id} key={c.id}>{c.country}</Option>
              ))
            }

          </Select>

        </Form.Item>

        <Form.Item
          name="stateMasterId"
          label="State"
          rules={[
            {
              required: true,
              message: "Select State!",
            },
          ]}
          className="elementWidth"
        >
          <Select
            showSearch
            defaultValue=""
            placeholder="Select State"
            // handleChange={handleChangeType}
            allowClear
          >
            <Option value="">Select State</Option>
            {
              state && state.map((c) => (
                <Option value={c.id} key={c.id}>{c.state}</Option>
              ))
            }

          </Select>

        </Form.Item>
        <Form.Item
          name="city"
          label="City"
          rules={[
            {
              required: true,
              message: "Enter City!",
            },
          ]}
        >
          <Input placeholder="Enter City" />
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
            ADD CITY
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
                title="City"
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
