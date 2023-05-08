import React from 'react';
import { Tabs } from 'antd';
import './Tabs.css';
const TabPane = Tabs.TabPane;
function callback(key) {}
const InstructorTabs = ({children}) => {
    
  return (
    <Tabs onChange={callback} type="card" tabBarGutter={5}  >
        {children}
      </Tabs>
  )
}

export default InstructorTabs
export {TabPane}