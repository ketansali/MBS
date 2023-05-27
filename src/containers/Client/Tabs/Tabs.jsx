import React from 'react';
import { Tabs } from 'antd';
import './Tabs.css';
const { TabPane } = Tabs;
function callback(key) {}
const ClientTabs = ({tabsOptions}) => {
    
  return (
    <Tabs onChange={callback} defaultActiveKey="1" items={tabsOptions}  type="card" tabBarGutter={5}  />
  )
}

export default ClientTabs
