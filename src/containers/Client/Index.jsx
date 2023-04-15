import React,{ useState } from "react";
import { Layout } from "antd";
import ViewClients from "./AddUpdateView/ViewClients";
import MembershipCreateOrUpdate from "./Membership/MembershipCreateOrUpdate";
import AddClients from "./AddUpdateView/AddClients";
import FullBodyModal from "@iso/components/UI/FullBodyModal";

const Index = () => {
  const [componentType, setComponentType] = useState('');
  const handleComponent = (e)=>{
    if(e.target.name === 'CLOSE ARROW'){
      setComponentType("")
    }else{
      setComponentType(e.target.innerHTML);
    }
  }
  const renderComponent = (component)=>{
    let content = null;
    switch(component){
      case 'ADD MEMBERSHIP':
        content =<FullBodyModal handleBack={handleComponent} title="ADD MEMBERSHIP"><MembershipCreateOrUpdate/></FullBodyModal> 
        break;
      case 'ADD NEW CLIENT':
        content =<FullBodyModal handleBack={handleComponent} title="ADD CLIENT"> <AddClients/></FullBodyModal>
        break;
      default:
        content = <ViewClients handleComponent={handleComponent}/>
    }
    return content;
  }
  return (
    <Layout style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
      {
        // component.viewClient ?<ViewClients handleAddMembership={handleAddMembership}/>:<MembershipCreateOrUpdate/>
        renderComponent(componentType)
      }
    </Layout>
  );
};

export default Index;
