import React from "react";
import Box from "@iso/components/utility/box";
import LayoutWrapper from "@iso/components/utility/layoutWrapper.js";
import IntlMessages from "@iso/components/utility/intlMessages";
// import Tabs, { TabPane } from "@iso/components/UI/Tabs/Tabs4";
import Tabs, { TabPane } from "@iso/components/UI/Tabs/Tabs5";
import { Form, Spin } from "antd";
import { FromLeftItem, FromRightItem } from "@iso/components/UI/Form/FormUI";
import Input from "@iso/components/uielements/input";


const Index = () => {
  return (
    <LayoutWrapper>
      <Box style={{ width: "100% !important" }}>

        <Tabs>
          <TabPane tab="BASIC INFORMATION" key="1" style={{ width: "20% !important" }}>
            <Form form={form} name="currency" layout="vertical" scrollToFirstError>
              <FromLeftItem
                name="name"
                label="First Name"
                rules={[
                  {
                    required: true,
                    message: "Enter First Name!",
                  },
                ]}
              >
                <Input placeholder="Enter First Name" />
              </FromLeftItem>
            </Form>
          </TabPane>
          <TabPane tab="SCHEDULE" key="2" style={{ width: "20% !important" }}></TabPane>
          <TabPane tab="SALARY INFORMATION" key="3" style={{ width: "20% !important" }}> </TabPane>
          <TabPane tab="AVAILABILITY" key="4" style={{ width: "20% !important" }}></TabPane>
          <TabPane tab="UNAVAILABILITY" key="5" style={{ width: "20% !important" }}></TabPane>
        </Tabs>
      </Box>
    </LayoutWrapper>
  );
};

export default Index;
