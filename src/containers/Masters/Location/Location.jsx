import React, { useEffect, useState } from "react";
import Modal from "@iso/components/UI/Modal/Modal";
import Swal from "@iso/components/UI/Swal/Swal";
import LayoutContentWrapper from "@iso/components/utility/layoutWrapper";
import Box from "@iso/components/utility/box";
import ContentHolder from "@iso/components/utility/contentHolder";
import DataTable from "../../DataTable/DataTable";
import { Form, Select, Spin } from "antd";
import Input from "@iso/components/uielements/input";
import {
    CreateCity,
    UpdateCity,
} from "../City/actions";
import { ActionBtn } from "@iso/components/uielements/InputStyle/Input.style";
import { DeleteCell, EditCell } from "@iso/components/UI/Table/HelperCells";
import {
    AddItemButtonWrapper,
    ActionWrapper,
} from "@iso/components/uielements/DataTableStyle/DataTable.Style";
import { COMMON } from "../../Constant/Index";
import { Option } from "antd/lib/mentions";
import { GetCountry, GetCountryByState } from "../Country/actions";
import { CreateLocation, DeleteLocation, GetAllLocation, UpdateLocation } from "./actions";
import './location.scss'

const Location = () => {
    const [modalActive, setModalActive] = useState(false);
    const [loading, setLoading] = useState(false);
    const [locationList, setLocationList] = useState({});
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

    useEffect(() => {
        getLocationData();
        onLocationSearch();
    }, []);

    const getLocationData = () => {
        setLoading(true);
        GetAllLocation(COMMON.getTableParams(tableParams)).then((res) => {
            setLocationList(res?.responseData);
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

    const handleModal = () => {
        form.resetFields();
        if (!modalActive) {
            setState([]);
            form.setFieldsValue({ name: "", contactPerson: "", address: "", countryId: "", stateId: "", cityId: "", zip: "", contactNo: "", email: "", icon: "" });
        }
        setModalActive(!modalActive);
    };

    const onLocationSearch = (name) => {
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
                    form.setFieldsValue({ stateId: stateId });
                }
            });
        }
        else {
            setState([]);
        }
    }

    const handleSubmit = () => {
        form
            .validateFields()
            .then(async (values) => {
                setLoading(true);
                const { id, address, stateId, city, contactNo, contactPerson, countryId, email, icon, name, zip } = form.getFieldValue();

                if (!id) {
                    CreateLocation(values).then(() => {
                        getLocationData(COMMON.getTableParams(tableParams));
                    });
                } else {
                    const updateData = {
                        "id": id,
                        "name": name,
                        "address": address,
                        "countryId": countryId,
                        "stateId": stateId,
                        "city": city,
                        "zip": zip,
                        "contactPerson": contactPerson,
                        "contactNo": contactNo,
                        "email": email,
                        "icon": icon
                    }
                    // const updateData = {
                    //     id: id,
                    //     city: city,
                    //     stateId: stateId
                    // };
                    UpdateLocation(updateData).then(() => {
                        getLocationData(COMMON.getTableParams(tableParams));
                    });
                }
                setModalActive(!modalActive);
            })
            .catch((error) => {
                console.log("Form validation error:", error);
            });
    };

    const handleDelete = (id) => {
        Swal().then((willDelete) => {
            if (willDelete) {
                DeleteLocation(id).then(() => {
                    getLocationData();
                });
            }
        });
    };

    const handleUpdate = (record) => {
        form.setFieldsValue({
            id: record.id,
            "name": record.name,
            "address": record.address,
            "countryId": record.countryId,
            "stateId": record.stateId,
            "city": record.city,
            "zip": record.zip,
            "contactPerson": record.contactPerson,
            "contactNo": record.contactNo,
            "email": record.email,
            "icon": record.icon
        });
        countryChange(record.countryId, '', record.stateId);
        setModalActive(!modalActive);
    };

    const handleSearch = (e) => {
        GetAllLocation(COMMON.getTableParams(e)).then((res) => {
            setLocationList(res?.responseData);
            setLoading(false);
        });
    };

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            sorter: true,
        },
        {
            title: "Address",
            dataIndex: "address",
            key: "address",
            sorter: true,
        },
        // {
        //     title: "Country",
        //     dataIndex: "countryId",
        //     key: "countryId",
        //     sorter: true,
        // },
        // {
        //     title: "State",
        //     dataIndex: "stateId",
        //     key: "stateId",
        //     sorter: true,
        // },
        // {
        //     title: "Zip",
        //     dataIndex: "zip",
        //     key: "zip",
        //     sorter: true,
        // },
        {
            title: "Contact Person",
            dataIndex: "contactPerson",
            key: "contactPerson",
            sorter: true,
        },
        {
            title: "Contact No",
            dataIndex: "contactNo",
            key: "contactNo",
            sorter: true,
        },
        {
            title: "email",
            dataIndex: "email",
            key: "email",
            sorter: true,
        },
        // {
        //     title: "icon",
        //     dataIndex: "icon",
        //     key: "icon",
        //     sorter: true,
        // },
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
            setLocationList([]);
        }
    };

    const modal = () => (
        <Modal
            open={modalActive}
            onClose={handleModal}
            title={form.getFieldValue().id ? "Update Location" : "Add New Location"}
            okText={form.getFieldValue().id ? "Update" : "Add"}
            onOk={handleSubmit}
            onCancel={handleModal}
            bodyStyle={{ borderRadius: "50px" }}
        >
            <Form form={form} name="product" layout="vertical" scrollToFirstError>
                <Form.Item
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
                </Form.Item>

                <Form.Item
                    name="address"
                    label="Address"
                    rules={[
                        {
                            required: true,
                            message: "Enter Address!",
                        },
                    ]}
                >
                    <Input placeholder="Enter Address" />
                </Form.Item>

                <Form.Item
                    name="countryId"
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
                        onSearch={onLocationSearch}
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
                    name="stateId"
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
                <Form.Item
                    name="zip"
                    label="Zip"
                    rules={[
                        {
                            required: true,
                            message: "Enter Zip!",
                        },
                    ]}
                >
                    <Input placeholder="Enter Zip" />
                </Form.Item>
                <Form.Item
                    name="contactPerson"
                    label="contact Person"
                    rules={[
                        {
                            required: true,
                            message: "Enter contact Person!",
                        },
                    ]}
                >
                    <Input placeholder="Enter contact Person" />
                </Form.Item>
                <Form.Item
                    name="contactNo"
                    label="Contact No"
                    rules={[
                        {
                            required: true,
                            message: "Enter Contact No!",
                        },
                    ]}
                >
                    <Input placeholder="Enter ContactNo" />
                </Form.Item>
                <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                        {
                            required: true,
                            message: "Enter Email!",
                        },
                    ]}
                >
                    <Input placeholder="Enter Email" />
                </Form.Item>
                <Form.Item
                    name="icon"
                    label="Icon"
                    rules={[
                        {
                            required: true,
                            message: "Enter Icon!",
                        },
                    ]}
                >
                    <Input placeholder="Enter Icon" />
                </Form.Item>

            </Form>

        </Modal>
    );

    return (
        <LayoutContentWrapper className="main-location">
            <AddItemButtonWrapper>
                <div></div>
                <div>
                    <ActionBtn type="primary" onClick={handleModal}>
                        ADD Location
                    </ActionBtn>
                </div>
            </AddItemButtonWrapper>

            <Box className="box-conatiner">
                <ContentHolder style={{ marginTop: 0, overflow: "hidden" }}>
                    {modal()}
                    <Spin spinning={loading}>
                        {locationList && (
                            <DataTable
                                columns={columns}
                                data={locationList?.data}
                                title="Location"
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

export default Location