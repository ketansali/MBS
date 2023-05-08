import React from "react";
import LayoutWrapper from "@iso/components/utility/layoutWrapper.js";
import PageHeader from "@iso/components/utility/pageHeader";
import Box from "@iso/components/utility/box";
import ClientTabs, { TabPane } from "../../Client/Tabs/Tabs";
import BasicTab from "./TabsForm/BasicTab";

const AddInstructor = () => {
    return (
        <LayoutWrapper>
            <PageHeader>INSTRUCTOR</PageHeader>
            <Box>
                <ClientTabs>
                    <TabPane tab="BASIC INFORMATION" key="1">
                        <BasicTab />
                    </TabPane>
                    <TabPane tab="SCHEDULE" key="2">

                    </TabPane>
                    <TabPane tab="SALARY INFORMATION" key="3">

                    </TabPane>
                    <TabPane tab="AVAILABILITY" key="4">

                    </TabPane>
                    <TabPane tab="UNAVAILABILITY" key="5">

                    </TabPane>
                </ClientTabs>
            </Box>
        </LayoutWrapper>
    )
}
export default AddInstructor;