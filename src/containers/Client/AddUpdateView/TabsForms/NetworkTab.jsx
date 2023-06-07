import React, { useEffect, useState } from "react";
import Modal from "@iso/components/UI/Modal/Modal";
import Swal from "@iso/components/UI/Swal/Swal";
import LayoutContentWrapper from "@iso/components/utility/layoutWrapper";
import Box from "@iso/components/utility/box";
import ContentHolder from "@iso/components/utility/contentHolder";
import DataTable from '../../../DataTable/DataTable'
import {
    AddItemButtonWrapper,
    ActionWrapper,
} from "@iso/components/uielements/DataTableStyle/DataTable.Style";
import { DeleteCell, EditCell } from "@iso/components/UI/Table/HelperCells";
import { Form, Spin, Radio, Upload, Space, Divider } from "antd";
import Checkbox, { CheckboxGroup } from "@iso/components/uielements/checkbox";
import Input from "@iso/components/uielements/input";
import { UploadOutlined, PlusOutlined, CloseOutlined } from '@ant-design/icons';
import InputNumber from "@iso/components/uielements/InputNumber";
import "./Styles/BasicInfo.css";
import Button from "@iso/components/uielements/button";
import {
    TwoElementWrapper,
    TwoElementInnerWrapper,
} from "@iso/components/UI/Form/FormUI.style";
import Select, { SelectOption } from "@iso/components/uielements/select";
import { BottomButtonWrapper } from "./Styles/Membership.style";

const Option = SelectOption;
const NetworkTab = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState({});
    const [chData, setCHData] = useState([]);

    const handleMobileAndTypeField = () => {
        setCHData([...chData, { contact: "", contactType: "" }]);
    };
    const handleDeleteMobileAndTypeField = (i) => {
        const deleteField = [...chData];
        deleteField.splice(i, 1);
        setCHData(deleteField);
    };

    const columns = [
        {
            title: "Use Credit Card",
            dataIndex: "createdOn",
            key: "createdOn",
            sorter: true,
        },
        {
            title: "Share Membership/Appointment",
            dataIndex: "city",
            key: "city",
            sorter: true,
        },
        {
            title: "Client",
            dataIndex: "state",
            key: "state",
            sorter: true,
        },
        {
            title: "Relations",
            dataIndex: "country",
            key: "country",
            sorter: true,
        },
        {
            title: "Other Relations",
            key: "action",
            className: "noWrapCell",
            width: "15%",
            render: (text, record) => {
                return (
                    <ActionWrapper>
                        <DeleteCell
                        // handleDelete={() => handleDelete(record.id)}
                        />
                        <EditCell
                        // handleEdit={() => handleUpdate(record)}
                        />
                    </ActionWrapper>
                );
            },
        },
    ];

    return (
        <LayoutContentWrapper>
            <div style={{ width: '100%' }}>
                <ContentHolder style={{ marginTop: 0, overflow: "hidden" }}>
                    {/* {modal()} */}
                    <Spin spinning={loading}>
                        {categories && (
                            <DataTable
                                columns={columns}
                                data={categories.data}
                                title=""
                                // handleSearch={handleSearch}
                                // handlePage={handlePage}
                                // pagination={tableParams.pagination}
                                rowKey="id"
                                searchHide={true}
                            />
                        )}
                    </Spin>
                </ContentHolder>
                <Divider />
                <Form
                    form={form}
                    name="currency"
                    layout="vertical"
                    scrollToFirstError
                >
                    <TwoElementInnerWrapper style={{ marginTop: '30px' }}>
                        <Checkbox >Member</Checkbox>
                        <Checkbox >Own</Checkbox>
                        <Checkbox >Member</Checkbox>
                        <Checkbox >Own</Checkbox>
                        <Form.Item
                            name="econtact"
                            // label="Select Class Series / Membership"
                            rules={[
                                {
                                    required: false,
                                    message: "Enter Name!",
                                },
                            ]}
                            // className="clsEcontact"
                            style={{ width: "30%" }}
                        >
                            <Input placeholder="Name" />
                        </Form.Item>
                        <Form.Item
                            name="Mobile Type"
                            // label="Type"
                            rules={[
                                {
                                    required: false,
                                    message: "Select Type!",
                                },
                            ]}
                            style={{ width: "30%" }}
                        >
                            <Select
                                showSearch
                                placeholder="Select"
                                // handleChange={handleChangeType}
                                allowClear
                            >
                                <Option value="Home">Home</Option>
                                <Option value="Office">Office</Option>
                                <Option value="Mobile">Mobile</Option>
                                <Option value="Fax">Fax</Option>
                            </Select>
                        </Form.Item>
                        <Button
                            style={{ marginLeft: "10px" }}
                            type="primary"
                            icon={<PlusOutlined />}
                            shape="circle"
                            onClick={handleMobileAndTypeField}
                        />
                    </TwoElementInnerWrapper>

                    {chData.map((val, i) => (
                        <TwoElementInnerWrapper key={i}>
                            <Checkbox >Member</Checkbox>
                            <Checkbox >Own</Checkbox>
                            <Checkbox >Member</Checkbox>
                            <Checkbox >Own</Checkbox>
                            <Form.Item
                                name="econtact"
                                // label="Select Class Series / Membership"
                                rules={[
                                    {
                                        required: false,
                                        message: "Enter Name!",
                                    },
                                ]}
                                // className="clsEcontact"
                                style={{ width: "30%" }}
                            >
                                <Input placeholder="Name" />
                            </Form.Item>
                            <Form.Item
                                name="Mobile Type"
                                // label="Type"
                                rules={[
                                    {
                                        required: false,
                                        message: "Select Type!",
                                    },
                                ]}
                                style={{ width: "30%" }}
                            >
                                <Select
                                    showSearch
                                    placeholder="Select"
                                    // handleChange={handleChangeType}
                                    allowClear
                                >
                                    <Option value="Home">Home</Option>
                                    <Option value="Office">Office</Option>
                                    <Option value="Mobile">Mobile</Option>
                                    <Option value="Fax">Fax</Option>
                                </Select>
                            </Form.Item>
                            <Button
                                type="danger"
                                icon={<CloseOutlined />}
                                shape="circle"
                                onClick={() => handleDeleteMobileAndTypeField(i)}
                            />
                        </TwoElementInnerWrapper>
                    ))}
                </Form>


                <BottomButtonWrapper>
                    <Button>
                        <span>Cancel</span>
                    </Button>

                    <Button type="primary" className="saveBtn" htmlType="submit">
                        <span>Save</span>
                    </Button>
                </BottomButtonWrapper>
            </div>
        </LayoutContentWrapper>
    )
}

export default NetworkTab