import React, { useEffect, useState } from "react";
import SearchInput from "@iso/components/uielements/InputElement/SearchInput/SearchInput";
import { ActionBtn } from "@iso/components/uielements/InputStyle/Input.style";
import Select, { SelectOption } from "@iso/components/uielements/select";
import { Layout } from "antd";
import { useHistory, useRouteMatch } from "react-router";
import { Title, Filters, Header, HeaderSecondary, SearchBox } from "../index.style";
import LayoutContentWrapper from "@iso/components/utility/layoutWrapper";
import Box from "@iso/components/utility/box";
import ContentHolder from "@iso/components/utility/contentHolder";
import DataTable from "../../DataTable/DataTable";
import { Form, Spin } from "antd";
import {
    AddItemButtonWrapper,
    ActionWrapper,
} from "@iso/components/uielements/DataTableStyle/DataTable.Style";
import { DeleteCell, EditCell } from "@iso/components/UI/Table/HelperCells";
import { GetAllInstructors } from "../actions";
import COMMON from "../../Constant/Common";

const Option = SelectOption;
const ViewInstructor = () => {
    const history = useHistory();
    const match = useRouteMatch();
    const [loading, setLoading] = useState(false);
    const [instructorList, setInstructorLit] = useState([]);
    const [tableParams, setTableParams] = useState({
        pagination: {
            current: 1,
            pageSize: 10,
        },
    });

    const getData = () => {
        setLoading(true);
        GetAllInstructors(COMMON.getTableParams(tableParams)).then((res) => {
            setInstructorLit(res?.responseData);
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
            setInstructorLit([]);
        }
    };

    const columns = [
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            sorter: true,
        },
        {
            title: "Sort Order",
            dataIndex: "sortOrder",
            key: "sortOrder",
            sorter: true,
        },
        {
            title: "Type",
            dataIndex: "type",
            key: "type",
            sorter: true,
        },
        {
            title: "Name",
            dataIndex: "firstName",
            key: "firstName",
            sorter: true,
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
            sorter: true,
        },
        {
            title: "Phone",
            dataIndex: "phone",
            key: "phone",
            sorter: true,
        },
        // {
        //     title: "",
        //     dataIndex: "country",
        //     key: "country",
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

    const handleSearch = (e) => {
        // GetAllCity(COMMON.getTableParams(e)).then((res) => {
        //     setCategories(res?.responseData);
        //     setLoading(false);
        // });
    };
    return (
        <Layout style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
            <Header>
                <Title>INSTRUCTORS</Title>

            </Header>
            <HeaderSecondary>

                <Filters>
                    <SearchBox> <SearchInput placeholder="Search..." /></SearchBox>
                    <div style={{ marginRight: "10px" }}>
                        <Select
                            defaultValue="ALL"
                            style={{ width: "160px" }}
                        >
                            <Option value="Days">ALL</Option>
                            <Option value="Months">ACTIVE</Option>
                            <Option value="Years">INACTIVE</Option>
                        </Select>
                    </div>
                    <ActionBtn type="primary" onClick={() => history.push(`${match.url}`)}>SEARCH</ActionBtn>
                    <ActionBtn type="primary" onClick={() => history.push(`${match.url}`)}>SHOW ALL</ActionBtn>
                    <ActionBtn type="primary" style={{ marginRight: "10px" }} onClick={() => history.push(`${match.url}/new`)}>
                        ADD INSTRUCTORS
                    </ActionBtn>
                </Filters>
                <Box>
                    <ContentHolder style={{ marginTop: 0, overflow: "hidden" }}>
                        <Spin spinning={loading}>
                            {instructorList && (
                                <DataTable
                                    columns={columns}
                                    data={instructorList.data}
                                    title="City"
                                    handleSearch={handleSearch}
                                    handlePage={handlePage}
                                    pagination={tableParams.pagination}
                                    rowKey="id"
                                    searchHide={true}
                                    header={true}
                                />
                            )}
                        </Spin>
                    </ContentHolder>
                </Box>
            </HeaderSecondary>


        </Layout >
    );
}

export default ViewInstructor;
