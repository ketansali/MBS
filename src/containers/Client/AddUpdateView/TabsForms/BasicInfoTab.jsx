import React from 'react'

import {
    BottomButtonWrapper,
  } from "../../Membership/Membership.style";
import {
    ElementWrapper,
  } from "./Styles/BasicInfo.Style";
  import Button from "@iso/components/uielements/button";
import Input, { Textarea } from "@iso/components/uielements/input";
import { DateRangepicker } from "@iso/components/uielements/datePicker";
import Select, { SelectOption } from "@iso/components/uielements/select";
import { Form, Radio } from "antd";
import Checkbox from "@iso/components/uielements/checkbox";

const Option = SelectOption;
const BasicInfoTab = () => {
    const [form] = Form.useForm();
  return (
    <>
     <Form
              form={form}
              name="currency"
              layout="vertical"
              scrollToFirstError
            >
              <ElementWrapper>
                <Form.Item
                  name="client"
                  // label="Client"
                  rules={[
                    {
                      required: true,
                      message: "Enter Client!",
                    },
                  ]}
                  className='elementWidth'
                >
                   <Select
                   showSearch
                    defaultValue="Client"
                    placeholder="Select Client"
                    // handleChange={handleChangeType}
                    allowClear
                  >
                    <Option value="Days">Days</Option>
                    <Option value="Months">Months</Option>
                    <Option value="Years">Years</Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  name="membership"
                  // label="Select Class Series / Membership"
                  rules={[
                    {
                      required: true,
                      message: "Select Class Series / Membership!",
                    },
                  ]}
                  className='elementWidth'
                >
                  <Select
                    defaultValue="Days"
                    placeholder="Select Class Series / Membership"
                    // handleChange={handleChangeType}
                    allowClear
                  >
                    <Option value="Days">Days</Option>
                    <Option value="Months">Months</Option>
                    <Option value="Years">Years</Option>
                  </Select>
                </Form.Item>
              </ElementWrapper>
             
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
  )
}

export default BasicInfoTab