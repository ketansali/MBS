import React, { useState } from "react";
import {
  TwoElementWrapper,
  TwoElementInnerWrapper,
} from "@iso/components/UI/Form/FormUI.style";
import {
  BottomButtonWrapper,
  OtherFeesWrapper,
  OtherFeesInnerElement,
  AmountWrapper,
  PaymentBTN,
  StatusAndEmailWrapper,
  MainWrapper,
} from "../../Membership/Membership.style";
import { ImCross } from "react-icons/im";
import { BiPlusMedical } from "react-icons/bi";
import { AiOutlineUpload } from "react-icons/ai";
import Button from "@iso/components/uielements/button";
import Input, { Textarea } from "@iso/components/uielements/input";
import Datepicker from "@iso/components/uielements/datePicker";
import Select, { SelectOption } from "@iso/components/uielements/select";
import { Form, Radio, Upload } from "antd";
import Checkbox,{CheckboxGroup} from "@iso/components/uielements/checkbox";
import "../../Membership/Membership.css";
import InputNumber from "@iso/components/uielements/InputNumber";
import "./Styles/BasicInfo.css";
import { UploadOutlined } from '@ant-design/icons';
const Option = SelectOption;
const BasicInfoTab = () => {
  const [form] = Form.useForm();
  const [chData, setCHData] = useState([]);

  const handleMobileAndTypeField = () => {
    setCHData([...chData, { contact: "", contactType: "" }]);
  };
  const handleDeleteMobileAndTypeField = (i) => {
    const deleteField = [...chData];
    deleteField.splice(i, 1);
    setCHData(deleteField);
  };
  const handleChangeMobileAndTypeField = (e, i) => {
    const { name, value } = e.target;
    const onChangeVal = [...chData];
    onChangeVal[i][name] = value;
    setCHData(onChangeVal);
  };
  const marketing = [
    { label: 'EMAIL', value: 'EMAIL' },
    { label: 'MAIL', value: 'MAIL' },
    { label: 'SMS', value: 'SMS' },
    { label: 'WHATSAPP', value: 'WHATSAPP' },
  ];
  return (
    <>
      <Form form={form} name="currency" layout="vertical" scrollToFirstError>
        <TwoElementWrapper>
          <Form.Item
            name="firstName"
            // label="First Name"
            rules={[
              {
                required: true,
                message: "Enter First Name!",
              },
            ]}
            className="elementWidth"
          >
            <Input placeholder="First Name" />
          </Form.Item>
          <Form.Item
            name="lastName"
            // label="Last Name"
            rules={[
              {
                required: true,
                message: "Enter Last Name!",
              },
            ]}
            className="elementWidth"
          >
            <Input placeholder="Last Name" />
          </Form.Item>
        </TwoElementWrapper>
        <TwoElementWrapper>
          <div style={{ display: "flex", alignItems: "baseline" }}>
            <h4 style={{ marginRight: "20px" }}>Gender :</h4>
            <Form.Item
              //   label="Gender :"
              name="gender"
              rules={[
                {
                  required: true,
                  message: "Please Enter Gender!",
                },
              ]}
              labelCol={{ span: 6 }}
            >
              <Radio.Group>
                <Radio value="male">MALE</Radio>
                <Radio value="female">FEMALE</Radio>
                <Radio value="nonBinary">NON BINARY</Radio>
              </Radio.Group>
            </Form.Item>
          </div>
          <Form.Item
            name="membership"
            // label="Select Class Series / Membership"
            rules={[
              {
                required: true,
                message: "Select Class Series / Membership!",
              },
            ]}
            className="elementWidth"
          >
            <Datepicker placeholder="Birthday" />
          </Form.Item>
        </TwoElementWrapper>

        <TwoElementWrapper>
          <Form.Item
            name="address"
            // label="Select Class Series / Membership"
            rules={[
              {
                required: true,
                message: "Enter Address!",
              },
            ]}
            className="elementWidth"
          >
            <Input placeholder="Address" />
          </Form.Item>
          <Form.Item
            name="city"
            // label="Select Class Series / Membership"
            rules={[
              {
                required: true,
                message: "Enter City!",
              },
            ]}
            className="elementWidth"
          >
            <Input placeholder="City" />
          </Form.Item>
        </TwoElementWrapper>

        <TwoElementWrapper>
          <Form.Item
            name="state"
            // label="Select Start And End Date"
            rules={[
              {
                required: true,
                message: "Select State!",
              },
            ]}
            className="elementWidth"
          >
            <Select
              showSearch
              defaultValue="State"
              placeholder="Select State"
              // handleChange={handleChangeType}
              allowClear
            >
              <Option value="Days">Clifornia</Option>
              <Option value="Months">Los Angel</Option>
              <Option value="Years">Years</Option>
            </Select>
          </Form.Item>
          <div className="elementWidth">
            <TwoElementInnerWrapper>
              <Form.Item
                name="zip"
                // label="Select Class Series / Membership"
                rules={[
                  {
                    required: true,
                    message: "ZIP!",
                  },
                ]}
                className="elementWidth"
              >
                <Input placeholder="Zip" />
              </Form.Item>
              <Form.Item
                name="zip"
                // label="Select Class Series / Membership"
                rules={[
                  {
                    required: true,
                    message: "ZIP!",
                  },
                ]}
                className="elementWidth"
              >
                <Select
                  showSearch
                  defaultValue="Country"
                  placeholder="Select Country"
                  // handleChange={handleChangeType}
                  allowClear
                >
                  <Option value="Days">US</Option>
                  <Option value="Months">Canada</Option>
                  <Option value="Years">Years</Option>
                </Select>
              </Form.Item>
            </TwoElementInnerWrapper>
          </div>
        </TwoElementWrapper>

        <TwoElementWrapper>
          <Form.Item
            name="email"
            // label="Select Start And End Date"
            rules={[
              {
                required: true,
                message: "Enter Email!",
              },
            ]}
            className="elementWidth"
          >
            <Input placeholder="Email" />
          </Form.Item>
          <div className="elementWidth">
            <TwoElementInnerWrapper>
              <Form.Item
                name="contact"
                // label="Select Class Series / Membership"
                rules={[
                  {
                    required: true,
                    message: "Enter Mobile!",
                  },
                ]}
                className="clsMobileElement"
              >
                <InputNumber placeholder="Mobile" />
              </Form.Item>
              <Button
                style={{ marginLeft: "10px" }}
                type="primary"
                icon={<BiPlusMedical size={13} />}
                shape="circle"
                onClick={handleMobileAndTypeField}
              />
              <Form.Item
                name="textMe"
                // label="Select Class Series / Membership"
                rules={[
                  {
                    required: true,
                    message: "Text Me!",
                  },
                ]}
                className="elementWidth"
              >
                <Checkbox className="clsTextMe"><h4>TEXT ME</h4></Checkbox>
              </Form.Item>
            </TwoElementInnerWrapper>
          </div>
        </TwoElementWrapper>
        {chData.map((val, i) => (
          <TwoElementWrapper>
            <div className="elementWidth"></div>
            <div className="elementWidth">
              <TwoElementInnerWrapper>
                <Form.Item
                  name="econtact"
                  // label="Select Class Series / Membership"
                  rules={[
                    {
                      required: true,
                      message: "Enter Mobile!",
                    },
                  ]}
                  className="clsEcontact"
                >
                  <InputNumber placeholder="Mobile" />
                </Form.Item>
                <Form.Item
                  name="contactType"
                  // label="Select Class Series / Membership"
                  rules={[
                    {
                      required: true,
                      message: "Select Type!",
                    },
                  ]}
                  style={{ width: "30%" }}
                >
                  <Select
                    showSearch
                    defaultValue="Type"
                    placeholder="Select Type"
                    // handleChange={handleChangeType}
                    allowClear
                  >
                    <Option value="Home">Home</Option>
                    <Option value="Office">Office</Option>
                    <Option value="Mobile">Mobile</Option>
                    <Option value="Fax">Fax</Option>
                  </Select>
                </Form.Item>
                <Button
                  type="danger"
                  icon={<ImCross size={10} />}
                  shape="circle"
                  onClick={() => handleDeleteMobileAndTypeField(i)}
                />
              </TwoElementInnerWrapper>
            </div>
          </TwoElementWrapper>
        ))}
        <TwoElementWrapper>
          <Form.Item
            name="referredBy"
            // label="Select Start And End Date"
            rules={[
              {
                required: true,
                message: "Enter Referred By!",
              },
            ]}
            className="elementWidth"
          >
            <Input placeholder="Referred By" />
          </Form.Item>
          <Form.Item
            name="phone"
            // label="Select Start And End Date"
            rules={[
              {
                required: true,
                message: "Enter Phone!",
              },
            ]}
            className="elementWidth"
          >
            <Input placeholder="Phone" />
          </Form.Item>
        </TwoElementWrapper>
        <TwoElementWrapper>
          <Form.Item
            name="prefLocation"
            // label="Select Start And End Date"
            rules={[
              {
                required: true,
                message: "Select Pref Location!",
              },
            ]}
            className="elementWidth"
          >
            <Select
              showSearch
              defaultValue="Los Angeles"
              placeholder="Select Pref Location"
              // handleChange={handleChangeType}
              allowClear
            >
              <Option value="TEXAS">TEXAS</Option>
              <Option value="Los Angeles">Los Angeles</Option>
            </Select>
          </Form.Item>
          <div style={{ display: "flex", alignItems: "baseline" }}>
            <h4 style={{ marginRight: "10px" }}>Photo :</h4>
            <Form.Item
            name="photo"
            // label="Photo"
            rules={[
              {
                required: true,
                message: "Select Photo!",
              },
            ]}
            style={{width:"70%"}}
          >
            <Upload style={{width:"70%"}}>
              <Button>
                <UploadOutlined /> Click to Upload
              </Button>
            </Upload>
            <span style={{fontSize:"13px", fontWeight:"300"}} >(File Size Max 2MB, allowed formats: jpg, jpeg, png, gif)</span>
          </Form.Item>
            </div>
        </TwoElementWrapper>
        <TwoElementWrapper>
          <Form.Item
            name="contract"
            // label="Select Start And End Date"
            rules={[
              {
                required: true,
                message: "Select Contract!",
              },
            ]}
            className="elementWidth"
          >
            <Select
              showSearch
              defaultValue="Cancelation Policy"
              placeholder="Select Contract"
              // handleChange={handleChangeType}
              allowClear
            >
              <Option value="Cancelation Policy">Cancelation Policy</Option>
              <Option value="Liability Waiver">Liability Waiver</Option>
              <Option value="Paper Contract">Paper Contract</Option>
              <Option value="Studio Policy">Studio Policy</Option>
            </Select>
            <Checkbox><span style={{fontSize:"13px", fontWeight:"300"}}> I agree to all the terms and conditions</span></Checkbox>
          </Form.Item>
            <Form.Item
            name="isVaccinated"
            // label="Photo"
            rules={[
              {
                required: true,
                message: "Check Is Vaccinated!",
              },
            ]}
            className="elementWidth"
          >
           <Checkbox><h4>Is Vaccinated</h4></Checkbox>
          </Form.Item>
        </TwoElementWrapper>
        <TwoElementWrapper>
          <Form.Item
            name="contract"
            // label="Select Start And End Date"
            rules={[
              {
                required: true,
                message: "Select Contract!",
              },
            ]}
            className="elementWidth"
          >
            <div><Checkbox><h4>CLIENT NOTIFICATION</h4></Checkbox></div>
            <div><span style={{fontSize:"13px", fontWeight:"300", marginLeft:"25px"}}>Select this option to enable email and text.</span></div>
          </Form.Item>
            <Form.Item
            name="isVaccinated"
            // label="Photo"
            rules={[
              {
                required: true,
                message: "Select Photo!",
              },
            ]}
            className="elementWidth"
          >
           <Checkbox><h4>LIENT IS UNDER 18 YEARS OLD</h4></Checkbox>
          </Form.Item>
        </TwoElementWrapper>
        <TwoElementWrapper>
          <Form.Item
            name="marketingPreference"
            label="MARKETING PREFERENCE"
            rules={[
              {
                required: true,
                message: "MARKETING PREFERENCE!",
              },
            ]}
            className="elementWidth"
          >
            <CheckboxGroup options={marketing}/>
          </Form.Item>
          <div style={{ display: "flex", alignItems: "baseline" }} className="elementWidth">
            <h4 style={{marginRight:"20px"}}>Status :</h4>
            <Form.Item
              //   label="Gender :"
              name="status"
              rules={[
                {
                  required: true,
                  message: "Please Select Status!",
                },
              ]}
              style={{width:"70%"}}
            >
              <Radio.Group>
                <Radio value="male">ACTIVE</Radio>
                <Radio value="female">INACTIVE</Radio>
              </Radio.Group>
            </Form.Item>
          </div>
        </TwoElementWrapper>
        <TwoElementWrapper>
          <Form.Item
            name="name"
            label="EMERGENCY CONTACT"
            rules={[
              {
                required: true,
                message: "Enter Name!",
              },
            ]}
            className="elementWidth"
          >
            <Input placeholder="Name" />
          </Form.Item>
          <Form.Item
            name="relation"
            label="                    "
            rules={[
              {
                required: false,
                message: "Select Relation!",
              },
            ]}
            className="elementWidth"
          >
            <Select
              showSearch
              // defaultValue="Cancelation Policy"
              placeholder="Select Relation"
              // handleChange={handleChangeType}
              allowClear
            >
              <Option value="Brother">Brother</Option>
              <Option value="Father">Father</Option>
            </Select>
          </Form.Item>
        </TwoElementWrapper>
        <TwoElementWrapper>
          <Form.Item
            name="phone"
            // label=""
            rules={[
              {
                required: true,
                message: "Enter Phone!",
              },
            ]}
            className="elementWidth"
          >
            <Input placeholder="Phone" />
          </Form.Item>
        </TwoElementWrapper>
        <BottomButtonWrapper>
          <Button>
            <span>Cancel</span>
          </Button>

          <Button type="primary" className="saveBtn" htmlType="submit">
            <span>Save</span>
          </Button>
        </BottomButtonWrapper>
      </Form>
    </>
  );
};

export default BasicInfoTab;
