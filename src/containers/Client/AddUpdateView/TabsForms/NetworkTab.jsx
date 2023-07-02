import React, { useEffect, useState } from "react";
import LayoutContentWrapper from "@iso/components/utility/layoutWrapper";
import { Form, Spin, Divider, Tooltip,Space, Typography   } from "antd";
import Checkbox from "@iso/components/uielements/checkbox";
import Input from "@iso/components/uielements/input";
import {
  PlusOutlined,
  QuestionCircleFilled,
  MinusCircleOutlined,
} from "@ant-design/icons";
import "./Styles/BasicInfo.css";
import Button from "@iso/components/uielements/button";
import Select, { SelectOption } from "@iso/components/uielements/select";
import { HeaderContainer } from "./Styles/NetworkTab.style";
import './Styles/Network.css'
import { GetAllRelation } from "../../../Masters/Relation/actions";
const Option = SelectOption;
const { Text } = Typography;
const NetworkTab = () => {
  const [form] = Form.useForm();
  const [relations, setRelations] = useState([]);
  useEffect(() => {
    getAllRelations();
    form.setFieldsValue("networkFormInfo",[{useMember:false,useOwn:false,ShareOwn:false,ShareMember:false, name:null,clientId:null}])
  }, [form]);
  const submitNetworkInfo = ()=>{
    console.log(form.getFieldValue());
  }
  const getAllRelations = (value) => {
    GetAllRelation({
      pageNo: -1,
      searchValue: value,
      length: 0,
      sortColumn: "",
      sortOrder: "",
    }).then((res) => {
      setRelations(res?.responseData.data);
    });
  };
  return (
    <LayoutContentWrapper>
      <HeaderContainer>
        <Text strong>Use Credit Card</Text>
        <Text strong>Share <br></br> Membership/Appointment</Text>
        <Text strong>Client</Text>
        <Text strong>Relations</Text>
        <Text strong>Other Relations</Text>
        <Text strong>Action</Text>
      </HeaderContainer>
      <Divider/>
      <Form name="networkForm" onFinish={submitNetworkInfo}
      // onValuesChange={submitBasicInfovalues}
      style={{maxWidth:"none"}}
      layout="inline"
      >
          <div>
                <Text  className="memberOwnCls1" strong>Member<Tooltip title="Member is allowed to use your Credit card"><QuestionCircleFilled style={{paddingLeft:"3px" , fontSize:"12px"}} /></Tooltip></Text>
                <Text className="memberOwnCls1" strong>Own<Tooltip title="You are allowed to use Member's Credit card"><QuestionCircleFilled  style={{paddingLeft:"3px" , fontSize:"12px"}}  /></Tooltip></Text>
                <Text className="memberOwnCls2" strong>Member<Tooltip title="Member is allowed to use you Membership"><QuestionCircleFilled  style={{paddingLeft:"3px" , fontSize:"12px"}} /></Tooltip></Text>
                <Text className="memberOwnCls2" strong>Own<Tooltip title="You are allowed to use Member Membership"><QuestionCircleFilled   style={{paddingLeft:"3px" , fontSize:"12px"}} /></Tooltip></Text>
          </div>   
      <Form.List name="networkFormInfo" style={{width:"100%"}}>
      {(fields, { add, remove }) => (
        <div style={{position:"relative", width:"100%", alignItems:"center"}}>
          <div>
          {fields.map(({ key, name, ...restField }) => (
            <Space
              key={key}
              style={{
                // display: 'flex',
                // marginBottom: 8,
                width:"80%"
              }}
              align="baseline"
            >
              <div style={{display:"flex", justifyContent:"space-between", alignItems:"baseline"}}>
              <Form.Item
                {...restField}
                name={[name, 'useMember']}
                valuePropName="checked"
                rules={[
                  {
                    required: false,
                    message: '',
                  },
                ]}
                className="memberOwnCls1"
                style={{paddingLeft:"2.5%"}}
              >
                <Checkbox />
              </Form.Item>
              <Form.Item
                {...restField}
                name={[name, 'useOwn']}
                valuePropName="checked"
                rules={[
                  {
                    required: false,
                    message: '',
                  },
                ]}
                className="memberOwnCls1"
                style={{paddingLeft:"4%"}}
              >
                <Checkbox />
              </Form.Item>
              <Form.Item
                {...restField}
                name={[name, 'ShareMember']}
                valuePropName="checked"
                rules={[
                  {
                    required: false,
                    message: '',
                  },
                ]}
                className="memberOwnCls2"
                style={{paddingLeft:"5.5%"}}
              >
                <Checkbox />
              </Form.Item>
              <Form.Item
                {...restField}
                name={[name, 'ShareOwn']}
                valuePropName="checked"
                rules={[
                  {
                    required: false,
                    message: '',
                  },
                ]}
                className="memberOwnCls2"
                style={{paddingLeft:"7%"}}
              >
                <Checkbox />
              </Form.Item>
              <Form.Item
                {...restField}
                name={[name, 'name']}
                rules={[
                  {
                    required: false,
                    message: 'Enter Name',
                  },
                ]}
              >
                <Input placeholder="Name" />
              </Form.Item>
              <Form.Item
                {...restField}
                name={[name, 'clientId']}
                rules={[
                  {
                    required: false,
                    message: '',
                  },
                ]}
              >
                <Select
            showSearch
            // defaultValue="Cancelation Policy"
            placeholder="Select Relation"
            onSearch={getAllRelations}
            allowClear
            filterOption={false}
          >
            {relations &&
              relations.map((e) => (
                <Option value={e.id} key={e.id}>
                  {e.name}
                </Option>
              ))}
          </Select>
              </Form.Item>
              {/* style={{paddingLeft:"37%"}} */}
              <div >
              <MinusCircleOutlined  onClick={() => remove(name)} />
              </div>
              </div>
            </Space>
          ))}
          </div>
          <div style={{position:"absolute", right:0}}>
            {/* <Button type="dashed" onClick={() => add()} icon={<PlusOutlined />} shape="circle"/> */}
            <PlusOutlined onClick={() => add()}/> 
          </div>
        </div>
      )}
    </Form.List>
   
      </Form>
      {/* <div style={{width:"100%"}}>
        <div style={{float :"right"}}><Button type="primary"  htmlType="submit"  onClick={() => form.submit()}>
          <span>Save</span>
        </Button></div>
      </div> */}
    </LayoutContentWrapper>
  );
};

export default NetworkTab;
