import React from 'react';
import { Tabs } from 'antd';
import './Tab4.css';
const TabPane = Tabs.TabPane;
function callback(key) {}
const Index = ({children}) => {
    
  return (
    <Tabs onChange={callback} type="card" tabBarGutter={5}  >
        {children}
      </Tabs>
  )
}

export default Index
export {TabPane}