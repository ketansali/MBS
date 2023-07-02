import React, { useEffect, useState } from 'react'
import { Button, Form, Input, Select, Spin } from 'antd'
import {
    TwoElementWrapper,
    TwoElementInnerWrapper,
} from "@iso/components/UI/Form/FormUI.style";

import { BottomButtonWrapper } from '../../../Client/Membership/Membership.style';
import {
    ActionWrapper,
} from "@iso/components/uielements/DataTableStyle/DataTable.Style";
import { DeleteCell, EditCell } from "@iso/components/UI/Table/HelperCells";
import Box from "@iso/components/utility/box";
import { GetAllClients } from '../../../Client/actions';
import COMMON from '../../../Constant/Common';
import DataTable from "../../../DataTable/DataTable";

const SalaryTab = () => {
    const [form] = Form.useForm();
    const [selectSalaryType, setSelectSalaryType] = useState('')
    const [selectWorksshopSalaryType, setSelectWorkshopSalaryType] = useState('')

    const [selectAppointmentSalaryType, setSelectAppointmentSalaryType] = useState('')

    const [loading, setLoading] = useState(false);
    const [clients, setClients] = useState([]);
    const [tableParams, setTableParams] = useState({
        pagination: {
            current: 1,
            pageSize: 10,
        },
    });
    const getData = () => {
        setLoading(true);
        GetAllClients(COMMON.getTableParams(tableParams)).then((res) => {

            setClients(res?.responseData);
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
    useEffect(() => {
        getData();
        // eslint-disable-next-line
    }, [JSON.stringify(tableParams)]);

    const handlePage = (pagination, filters, sorter) => {
        setTableParams({
            pagination,
            filters,
            ...sorter,
        });

        // `dataSource` is useless since `pageSize` changed
        if (pagination.pageSize !== tableParams.pagination?.pageSize) {
            setClients([]);
        }
    };
    const columns = [
        {
            title: "Actions",
            key: "action",
            className: "noWrapCell",
            width: "15%",
            render: (text, record) => {
                return (
                    <ActionWrapper>
                        <DeleteCell />
                        <EditCell />
                    </ActionWrapper>
                );
            },
        },
        {
            title: "Client",
            dataIndex: "firstName",
            key: "firstName",
            sorter: true,
        },
        {
            title: "Phone",
            dataIndex: "phone",
            key: "phone",
            sorter: true,
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
            sorter: true,
        },
    ];

    const onChange = (value) => {
        console.log(`selected ${value}`);
        setSelectSalaryType(value)
    };
    const onSearch = (value) => {
        console.log('search:', value);
    };

    const onChangeWorkshop = (value) => {
        console.log(`selected ${value}`);
        setSelectWorkshopSalaryType(value)
    };
    const onSearchWorkshop = (value) => {
        console.log('search:', value);
    };

    const onChangeAppointment = (value) => {
        console.log(`selected ${value}`);
        setSelectAppointmentSalaryType(value)
    };

    const showAppointmentSection = () => {
        if (selectAppointmentSalaryType === "perAppointment" || selectAppointmentSalaryType === "hourly") {
            return (
                <Form.Item
                    name="appointmentFees"
                    rules={[
                        {
                            required: true,
                            message: "appointmentFees!",
                        },
                    ]}
                    className="elementWidth"
                >
                    <Input
                        prefix={<b>$</b>} placeholder=" Appointment Fees" />
                </Form.Item>
            )
        }
    }

    return (
        <>
            <Form form={form} name="currency" layout="vertical" scrollToFirstError>
                <h3>CLASS SALARY</h3>
                <TwoElementWrapper style={{ marginTop: '5px' }}>
                    <Form.Item
                        name="salaryType"
                        rules={[
                            {
                                required: true,
                                message: "Select salary type!",
                            },
                        ]}
                        className="elementWidth"
                    >
                        <Select
                            showSearch
                            // defaultValue="Select Salary Type"
                            placeholder="Select Salary Type"
                            optionFilterProp="children"
                            onChange={onChange}
                            onSearch={onSearch}
                            filterOption={(input, option) =>
                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                            }
                            options={[
                                {
                                    value: 'salect',
                                    label: 'Select Salary Type',
                                },
                                {
                                    value: 'perClass',
                                    label: 'Per Class',
                                },
                                {
                                    value: 'perClient',
                                    label: 'Per Client',
                                },
                                {
                                    value: 'combination',
                                    label: 'Combination Per Class & Per Client',
                                },
                                {
                                    value: 'hourly',
                                    label: 'Hourly',
                                },
                            ]}
                        />
                    </Form.Item>
                    {
                        selectSalaryType === "perClass" ? (
                            <Form.Item
                                name="classSalary"
                                // label="Select Class Series / Membership"
                                rules={[
                                    {
                                        required: true,
                                        message: "classSalary!",
                                    },
                                ]}
                                className="elementWidth"
                            >
                                <Input
                                    prefix={<b>$</b>} placeholder="classSalary" />
                            </Form.Item>
                        ) : selectSalaryType === "perClient" ? (
                            <Form.Item
                                name="perClientSalary"
                                // label="Select Class Series / Membership"
                                rules={[
                                    {
                                        required: true,
                                        message: "perClientSalary!",
                                    },
                                ]}
                                className="elementWidth"
                            >
                                <Input
                                    prefix={<b>$</b>}
                                    placeholder="perClientSalary" />
                            </Form.Item>
                        ) : selectSalaryType === "combination" ? (
                            <>
                                <Form.Item
                                    name="classSalary"
                                    // label="Select Class Series / Membership"
                                    rules={[
                                        {
                                            required: true,
                                            message: "classSalary!",
                                        },
                                    ]}
                                    // className="elementWidth"
                                    style={{ marginLeft: '10px' }}
                                >
                                    <Input
                                        prefix={<b>$</b>}
                                        placeholder="classSalary" />
                                </Form.Item>
                                <Form.Item
                                    name="perClientSalary"
                                    // label="Select Class Series / Membership"
                                    rules={[
                                        {
                                            required: true,
                                            message: "perClientSalary!",
                                        },
                                    ]}
                                    // className="elementWidth"
                                    style={{ marginLeft: '10px' }}
                                >
                                    <Input
                                        prefix={<b>$</b>}
                                        placeholder="perClientSalary" />
                                </Form.Item>
                                <Form.Item
                                    name="beginningAfter"
                                    // label="Select Class Series / Membership"
                                    rules={[
                                        {
                                            required: true,
                                            message: "beginningAfter!",
                                        },
                                    ]}
                                    // className="elementWidth"
                                    style={{ marginLeft: '10px' }}
                                >
                                    <Input
                                        placeholder="beginningAfter" />
                                </Form.Item>
                            </>

                        ) : null
                    }
                </TwoElementWrapper>

                <h3 style={{ marginTop: '-12px' }}>WORKSHOP SALARY</h3>
                <TwoElementWrapper style={{ marginTop: '5px' }}>
                    <Form.Item
                        name="worksalaryType"
                        rules={[
                            {
                                required: true,
                                message: "Select workshop salary type!",
                            },
                        ]}
                        className="elementWidth"
                    >
                        <Select
                            showSearch
                            // defaultValue="Select Salary Type"
                            placeholder="Select Workshow Salary Type"
                            optionFilterProp="children"
                            onChange={onChangeWorkshop}
                            onSearch={onSearch}
                            filterOption={(input, option) =>
                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                            }
                            options={[
                                {
                                    value: 'workshopSalary',
                                    label: 'Workshow Salary Type',
                                },
                                {
                                    value: 'perWorkshop',
                                    label: 'Per Workshop',
                                },
                                {
                                    value: 'perClient',
                                    label: 'Per Client',
                                },
                                {
                                    value: 'combinationWorkshop',
                                    label: 'Combination Per Workshop & Per Client',
                                },
                                {
                                    value: 'hourly',
                                    label: 'Hourly',
                                },
                            ]}
                        />
                    </Form.Item>
                    {
                        selectWorksshopSalaryType === "perWorkshop" ? (
                            <Form.Item
                                name="perWorkshopSalary"
                                rules={[
                                    {
                                        required: true,
                                        message: "perWorkshopSalary!",
                                    },
                                ]}
                                className="elementWidth"
                            >
                                <Input
                                    prefix={<b>$</b>} placeholder="per  Workshop Salary" />
                            </Form.Item>
                        ) : selectWorksshopSalaryType === "perClient" ? (
                            <Form.Item
                                name="perClientSalary"
                                // label="Select Class Series / Membership"
                                rules={[
                                    {
                                        required: true,
                                        message: "perClientSalary!",
                                    },
                                ]}
                                className="elementWidth"
                            >
                                <Input
                                    prefix={<b>$</b>}
                                    placeholder="perClientSalary" />
                            </Form.Item>
                        ) : selectWorksshopSalaryType === "combinationWorkshop" ? (
                            <>
                                <Form.Item
                                    name="perWorkshopSalary"
                                    rules={[
                                        {
                                            required: true,
                                            message: "perWorkshopSalary!",
                                        },
                                    ]}
                                // style={{ marginRight: '110px' }}
                                >
                                    <Input
                                        prefix={<b>$</b>} placeholder="per  Workshop Salary" />
                                </Form.Item>
                                <Form.Item
                                    name="perClientSalary"
                                    rules={[
                                        {
                                            required: true,
                                            message: "perClientSalary!",
                                        },
                                    ]}
                                    style={{ marginRight: '110px' }}
                                >
                                    <Input
                                        prefix={<b>$</b>}
                                        placeholder="perClientSalary" />
                                </Form.Item>
                            </>

                        ) : null
                    }
                </TwoElementWrapper>

                <h3 style={{ marginTop: '-12px' }}>APPOINTMENT SALARY
                </h3>
                <TwoElementWrapper style={{ marginTop: '5px' }}>
                    <Form.Item
                        name="appointmentSalaryType"
                        rules={[
                            {
                                required: true,
                                message: "Select appointment salary type!",
                            },
                        ]}
                        className="elementWidth"
                    >
                        <Select
                            showSearch
                            placeholder="Appointment Salary Type"
                            optionFilterProp="children"
                            onChange={onChangeAppointment}
                            onSearch={onSearch}
                            filterOption={(input, option) =>
                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                            }
                            options={[
                                {
                                    value: 'appointmentSalaryType',
                                    label: 'Appointment Salary Type',
                                },
                                {
                                    value: 'perAppointment',
                                    label: 'Per Appointment',
                                },
                                {
                                    value: 'hourly',
                                    label: 'Hourly',
                                },
                            ]}
                        />
                    </Form.Item>
                    {showAppointmentSection()}
                </TwoElementWrapper>

                <h3 style={{ marginTop: '-12px' }}>EMPLOYEE HOURLY SALARY
                </h3>
                <TwoElementWrapper style={{ marginTop: '5px' }}>
                    <Form.Item
                        name="employeeFees"
                        rules={[
                            {
                                required: true,
                                message: "employeeFees!",
                            },
                        ]}
                        className="elementWidth"
                    >
                        <Input
                            prefix={<b>$</b>} placeholder=" Employee Fees" />
                    </Form.Item>
                </TwoElementWrapper>

                <BottomButtonWrapper>
                    <Button className="saveBtn">
                        <span>Back</span>
                    </Button>
                    <Button type="primary" className="saveBtn" htmlType="submit">
                        <span>Save</span>
                    </Button>
                </BottomButtonWrapper>
            </Form>

            <Box style={{ border: "none" }}>
                <Spin spinning={loading}>
                    {clients && (
                        <DataTable
                            columns={columns}
                            data={clients.data}
                            title="Clients"
                            // handleSearch={handleSearch}
                            header={true}
                            handlePage={handlePage}
                            pagination={tableParams.pagination}
                            rowKey="id"
                        />
                    )}
                </Spin>
            </Box>
        </>

    )
}

export default SalaryTab