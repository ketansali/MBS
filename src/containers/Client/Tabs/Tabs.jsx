import React from 'react';
import { Tabs } from 'antd';
import './Tabs.css';
function callback(key) {}
const ClientTabs = ({tabsOptions}) => {
    
  return (
    <Tabs onChange={callback} defaultActiveKey="4" items={tabsOptions}  type="card" tabBarGutter={5}  />
  )
}

export default ClientTabs
