import React from "react";
import SearchInput from "@iso/components/uielements/InputElement/SearchInput/SearchInput";
import { ActionBtn } from "@iso/components/uielements/InputStyle/Input.style";
import Select, { SelectOption } from "@iso/components/uielements/select";
import { Layout } from "antd";
import { useHistory, useRouteMatch } from "react-router";
import { Title, Filters, Header, HeaderSecondary, SearchBox } from "../index.style";
const Option = SelectOption;
const ViewInstructor = () => {
    const history = useHistory();
    const match = useRouteMatch();



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


            </HeaderSecondary>


        </Layout>
    );
}

export default ViewInstructor;
