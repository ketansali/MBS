import React from "react";
import Box from "@iso/components/utility/box";
import LayoutWrapper from "@iso/components/utility/layoutWrapper.js";
import IntlMessages from "@iso/components/utility/intlMessages";
import Tabs, { TabPane } from "../Tabs/Tabs";
import PageHeader from "@iso/components/utility/pageHeader";
import MembershipCreateOrUpdate from './TabsForms/MembershipCreateOrUpdate';
import BasicInfoTab from "./TabsForms/BasicInfoTab";
const AddClients = () => {
  return (
    <LayoutWrapper>
      <PageHeader>CLIENTS</PageHeader>
       <Box>
        <Tabs>
          <TabPane tab="BASIC INFORMATION" key="1">
            <BasicInfoTab/>
          </TabPane>
          <TabPane tab="CLASS SERIES/MEMBERSHIP" key="2">
              <MembershipCreateOrUpdate/>
          </TabPane>
          <TabPane tab="APPOINTMENT" key="3">
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

export default AddClients;
