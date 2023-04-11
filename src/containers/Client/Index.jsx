import React from "react";
import Box from "@iso/components/utility/box";
import LayoutWrapper from "@iso/components/utility/layoutWrapper.js";
import IntlMessages from "@iso/components/utility/intlMessages";
// import Tabs, { TabPane } from "@iso/components/UI/Tabs/Tabs4";
import Tabs, { TabPane } from "@iso/components/UI/Tabs/Tabs5";

const Index = () => {
  return (
    <LayoutWrapper>
      <Box title={<IntlMessages id="forms.Tabs.client" />}>
        
        <Tabs>
          <TabPane tab="BASIC INFORMATION" key="1" style={{width: "256px !important"}}>
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="CLASS SERIES/MEMBERSHIP" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="APPOINTMENT" key="3">
            Content of Tab Pane 3
          </TabPane>
          <TabPane tab="NETWORK" key="4">
            Content of Tab Pane 3
          </TabPane>
          <TabPane tab="NETWORK" key="4">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </Box>
    </LayoutWrapper>
  );
};

export default Index;
