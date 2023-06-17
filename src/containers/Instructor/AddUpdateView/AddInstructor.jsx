import React from "react";
import LayoutWrapper from "@iso/components/utility/layoutWrapper.js";
import PageHeader from "@iso/components/utility/pageHeader";
import Box from "@iso/components/utility/box";

import BasicTab from "./TabsForm/BasicTab";
import TabPane from "antd/lib/tabs/TabPane";
import ClientTabs from "../../Client/Tabs/Tabs";
import ScheduleTab from "./TabsForm/ScheduleTab";
import SalaryTab from "./TabsForm/SalaryTab";


const AddInstructor = () => {
    const tabsOptions = [
        {
            key: "1",
            label: `BASIC INFORMATION`,
            children: <BasicTab />
        },
        {
            key: "2",
            label: `SCHEDULE`,
            children: <ScheduleTab />
        },
        {
            key: "3",
            label: `SALARY INFORMATION`,
            children: <SalaryTab />,
        },
        {
            key: "4",
            label: `AVAILABILITY`,
            //   children: "Content of Tab Pane 3",
        },
        {
            key: "5",
            label: `UNAVAILABILITY`,
            //   children: "Content of Tab Pane 3",
        }
    ];


    return (
        <LayoutWrapper>
            <PageHeader>INSTRUCTOR</PageHeader>
            <Box>
                <ClientTabs tabsOptions={tabsOptions} />
                {/* <ClientTabs>
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
                </ClientTabs> */}
            </Box>
        </LayoutWrapper>
    )
}
export default AddInstructor;