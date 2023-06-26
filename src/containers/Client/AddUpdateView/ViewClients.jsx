import React, { useEffect, useState } from "react";
import { Title, Filters, Header, HeaderSecondary } from "./ViewClients.style";
import SearchInput from "@iso/components/uielements/InputElement/SearchInput/SearchInput";
import { ActionBtn } from "@iso/components/uielements/InputStyle/Input.style";
import Select, { SelectOption } from "@iso/components/uielements/select";
import { Layout } from "antd";
import { useHistory, useRouteMatch } from "react-router";
import DataTable from "../../DataTable/DataTable";
import { Spin } from "antd";
import { COMMON } from "../../Constant/Index";
import { DeleteClient, GetAllClients } from "../actions";
import Swal from "@iso/components/UI/Swal/Swal";
import {
  ActionWrapper,
} from "@iso/components/uielements/DataTableStyle/DataTable.Style";
import { DeleteCell, EditCell } from "@iso/components/UI/Table/HelperCells";
import Box from "@iso/components/utility/box";
const Option = SelectOption;
const ViewClients = () => {
  const history = useHistory();
  const match = useRouteMatch();
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
    }).catch(()=>{
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
  const handleSearch = (e) => {
    GetAllClients(COMMON.getTableParams(e)).then((res) => {
      setClients(res?.responseData);
      setLoading(false);
    });
  };
  const handleDelete = (id) => {
    Swal().then((willDelete) => {
      if (willDelete) {
        DeleteClient(id).then(() => {
          getData();
        });
      }
    });
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
            <DeleteCell handleDelete={() => handleDelete(record.id)} />
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
  return (
    <Layout style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
      <Header>
        <Title>Clients</Title>
        <div>
          <ActionBtn type="primary" style={{ marginRight: "10px" }} onClick={()=>history.push(`${match.url}/new`)}>
            ADD NEW CLIENT
          </ActionBtn>
          <ActionBtn type="primary" onClick={()=>history.push(`${match.url}/membership`)}>ADD MEMBERSHIP</ActionBtn>
        </div>
      </Header>
      <HeaderSecondary>
        <SearchInput placeholder="Search..." onChange={handleSearch} />
        <Filters>
          <div style={{ marginRight: "10px" }}>
            <Select
              defaultValue="RECENTLY VIEWED"
              // onChange={this.handleChange}
              style={{ width: "160px" }}
            >
              <Option value="AllCLIENTS">All CLIENTS</Option>
              <Option value="CURRENTCLIENTS">CURRENT CLIENTS</Option>
              <Option value="ARCHIVEDCLIENTS">ARCHIVED CLIENTS</Option>
              <Option value="INACTIVECLIENTS">INACTIVE CLIENTS</Option>
              <Option value="RECENTLYVIEWED">RECENTLY VIEWED</Option>
            </Select>
          </div>
          <Select
            defaultValue="ALL LOCATION"
            // onChange={this.handleChange}
            style={{ width: "150px" }}
          >
            <Option value="ALL LOCATION">ALL LOCATION</Option>
            <Option value="ANGELES">LOS ANGELES</Option>
            <Option value="TEXAS">TEXAS</Option>
          </Select>
        </Filters>
      </HeaderSecondary>
      <Box style={{border:"none"}}>  
      <Spin spinning={loading}>
            {clients && (
              <DataTable
                columns={columns}
                data={clients.data}
                title="Clients"
                // handleSearch={handleSearch}
                header={false}
                handlePage={handlePage}
                pagination={tableParams.pagination}
                rowKey="id"
              />
            )}
          </Spin>
          </Box>
    </Layout>
  );
};

export default ViewClients;
