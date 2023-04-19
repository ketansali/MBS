import React from "react";
import { Title, Filters, Header, HeaderSecondary } from "./ViewClients.style";
import SearchInput from "@iso/components/uielements/InputElement/SearchInput/SearchInput";
import { ActionBtn } from "@iso/components/uielements/InputStyle/Input.style";
import Select, { SelectOption } from "@iso/components/uielements/select";
import { Layout } from "antd";
import { useHistory, useRouteMatch } from "react-router";
const Option = SelectOption;
const ViewClients = () => {
  const history = useHistory();
  const match = useRouteMatch();
  
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
        <SearchInput placeholder="Search..." />
        <Filters>
          <div style={{ marginRight: "10px" }}>
            <Select
              defaultValue="RECENTLY VIEWED"
              // onChange={this.handleChange}
              style={{ width: "160px" }}
            >
              <Option value="Days">All CLIENTS</Option>
              <Option value="Months">CURRENT CLIENTS</Option>
              <Option value="Years">ARCHIVED CLIENTS</Option>
              <Option value="Years">INACTIVE CLIENTS</Option>
              <Option value="RECENTLY VIEWED">RECENTLY VIEWED</Option>
            </Select>
          </div>
          <Select
            defaultValue="ALL LOCATION"
            // onChange={this.handleChange}
            style={{ width: "150px" }}
          >
            <Option value="ALL LOCATION">ALL LOCATION</Option>
            <Option value="Months">LOS ANGELES</Option>
            <Option value="Years">TEXAS</Option>
          </Select>
        </Filters>
      </HeaderSecondary>
    </Layout>
  );
};

export default ViewClients;
