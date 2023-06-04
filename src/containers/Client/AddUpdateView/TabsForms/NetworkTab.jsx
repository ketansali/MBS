import React, { useState } from 'react'
import DataTable from '../../../DataTable/DataTable'
const NetworkTab = () => {
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState({});

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
                        <DeleteCell handleDelete={() => handleDelete(record.id)} />
                        <EditCell handleEdit={() => handleUpdate(record)} />
                    </ActionWrapper>
                );
            },
        },
    ];

    return (
        <LayoutContentWrapper>
            <Box>
                <ContentHolder style={{ marginTop: 0, overflow: "hidden" }}>
                    {modal()}
                    <Spin spinning={loading}>
                        {categories && (
                            <DataTable
                                columns={columns}
                                data={categories.data}
                                title="City"
                                // handleSearch={handleSearch}
                                // handlePage={handlePage}
                                // pagination={tableParams.pagination}
                                rowKey="id"
                            />
                        )}
                    </Spin>
                </ContentHolder>
            </Box>
        </LayoutContentWrapper>
    )
}

export default NetworkTab