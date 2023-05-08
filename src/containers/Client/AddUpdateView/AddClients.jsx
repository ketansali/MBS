import React from "react";
import Box from "@iso/components/utility/box";
import LayoutWrapper from "@iso/components/utility/layoutWrapper.js";
import IntlMessages from "@iso/components/utility/intlMessages";
import Tabs from "../Tabs/Tabs";
import PageHeader from "@iso/components/utility/pageHeader";
import MembershipCreateOrUpdate from "./TabsForms/MembershipTab";
import BasicInfoTab from "./TabsForms/BasicInfoTab";
import AppointmentTab from "./TabsForms/AppointmentTab";
const AddClients = () => {
  const tabsOptions = [
    {
      key: "1",
      label: `BASIC INFORMATION`,
      children: <BasicInfoTab />
    },
    {
      key: "2",
      label: `CLASS SERIES/MEMBERSHIP`,
      children: <MembershipCreateOrUpdate />
    },
    {
      key: "3",
      label: `APPOINTMENT`,
      children: '<AppointmentTab />',
    },
    {
      key: "4",
      label: `NETWORK`,
      children: "Content of Tab Pane 3",
    },
  ];

  return (
    <LayoutWrapper>
      <PageHeader>CLIENTS</PageHeader>
      <Box>
        {/* <Tabs>
          <TabPane tab="BASIC INFORMATION" key="1">
            <BasicInfoTab />
          </TabPane>
          <TabPane tab="CLASS SERIES/MEMBERSHIP" key="2">
            <MembershipCreateOrUpdate />
          </TabPane>
          <TabPane tab="APPOINTMENT" key="3">
            <AppointmentTab />
          </TabPane>
          <TabPane tab="NETWORK" key="4">
            Content of Tab Pane 3
          </TabPane>
        </Tabs> */}
        <Tabs tabsOptions={tabsOptions}/>
      </Box>
    </LayoutWrapper>
  );
};

export default AddClients;
