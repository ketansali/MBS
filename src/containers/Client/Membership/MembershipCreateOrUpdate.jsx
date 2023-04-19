import React from "react";
import LayoutWrapper from "@iso/components/utility/layoutWrapper";
import Box from "@iso/components/utility/box";
import { FromLeftItem, FromRightItem } from "@iso/components/UI/Form/FormUI";
import PageHeader from "@iso/components/utility/pageHeader";
import {
  BottomButtonWrapper,
  ElementWrapper,
  OtherFeesWrapper,
  OtherFeesInnerElement,
  AmountWrapper,
  PaymentBTN,
  StatusAndEmailWrapper,
} from "./Membership.style";
import Button from "@iso/components/uielements/button";
import Input, { Textarea } from "@iso/components/uielements/input";
import { DateRangepicker } from "@iso/components/uielements/datePicker";
import Select, { SelectOption } from "@iso/components/uielements/select";
import { Form, Radio } from "antd";
import Checkbox from "@iso/components/uielements/checkbox";
import "./Membership.css";
const Option = SelectOption;
const MembershipCreateOrUpdate = () => {
  const [form] = Form.useForm();
  return (
    <LayoutWrapper>
      <PageHeader>ADD MEMBERSHIP</PageHeader>
      <Box>
        <div className="PageContent">
          <div className="BillingInformation">
            <Form
              form={form}
              name="currency"
              layout="vertical"
              scrollToFirstError
            >
              <ElementWrapper>
                <FromLeftItem
                  name="client"
                  // label="Client"
                  rules={[
                    {
                      required: true,
                      message: "Enter Client!",
                    },
                  ]}
                >
                  <Input placeholder="Enter Client" />
                </FromLeftItem>
                <FromRightItem
                  name="membership"
                  // label="Select Class Series / Membership"
                  rules={[
                    {
                      required: true,
                      message: "Select Class Series / Membership!",
                    },
                  ]}
                >
                  <Select
                    defaultValue="Days"
                    placeholder="Select Class Series / Membership"
                    // handleChange={handleChangeType}
                    allowClear
                    prefix={<b>CLASS SERIES / MEMBERSHIP SERIES $</b>}
                  >
                    <Option value="Days">Days</Option>
                    <Option value="Months">Months</Option>
                    <Option value="Years">Years</Option>
                  </Select>
                </FromRightItem>
              </ElementWrapper>
              <ElementWrapper>
                <FromLeftItem
                  name="startAndDate"
                  // label="Select Start And End Date"
                  rules={[
                    {
                      required: true,
                      message: "Select Start And End Date!",
                    },
                  ]}
                >
                  <DateRangepicker />
                </FromLeftItem>
                <FromRightItem
                  name="membership"
                  // label="Select Class Series / Membership"
                  rules={[
                    {
                      required: true,
                      message: "Select Class Series / Membership!",
                    },
                  ]}
                >
                  <Input
                    prefix={<b>CLASS SERIES / MEMBERSHIP SERIES: $</b>}
                    placeholder="Username"
                  />
                </FromRightItem>
              </ElementWrapper>

              <ElementWrapper>
                <FromLeftItem
                  name="startAndDate"
                  // label="Select Class Series / Membership"
                  rules={[
                    {
                      required: true,
                      message: "Select Class Series / Membership!",
                    },
                  ]}
                  labelCol={{ span: 4 }}
                >
                  <Select
                    defaultValue="%"
                    placeholder="Select Discount Type"
                    // handleChange={handleChangeType}
                    allowClear
                  >
                    <Option value="%">%</Option>
                    <Option value="Flat">Flat</Option>
                    <Option value="Promo Code">Promo Code</Option>
                  </Select>
                </FromLeftItem>
                <FromRightItem
                  name="membership"
                  // label="Select Class Series / Membership"
                  rules={[
                    {
                      required: true,
                      message: "DISCOUNT!",
                    },
                  ]}
                >
                  <Input prefix={<b>DISCOUNT:</b>} placeholder="Username" />
                </FromRightItem>
              </ElementWrapper>

              <ElementWrapper>
                <FromLeftItem
                  name="adjustment"
                  // label="Select Start And End Date"
                  rules={[
                    {
                      required: true,
                      message: "ADJUSTMENT!",
                    },
                  ]}
                >
                  <Input prefix={<b>ADJUSTMENT :</b>} placeholder="Username" />
                </FromLeftItem>
                <FromRightItem
                  name="discount"
                  // label="Select Class Series / Membership"
                  rules={[
                    {
                      required: true,
                      message: "DISCOUNT!",
                    },
                  ]}
                >
                  <Input
                    prefix={<b>ADJUSTMENT AMOUNT: $</b>}
                    placeholder="Username"
                  />
                </FromRightItem>
              </ElementWrapper>
              <OtherFeesWrapper>
                <div>
                  <h3 style={{ marginBottom: "2px" }}>OTHER FEES :</h3>
                  <OtherFeesInnerElement>
                    <Form.Item
                      // label="GST"
                      name="gst"
                      rules={[
                        {
                          required: true,
                          message: "Please Enter GST!",
                        },
                      ]}
                      style={{ width: "51.5%" }}
                    >
                      <Input
                        prefix={<b>GST :</b>}
                        placeholder="Please Enter GST"
                        suffix={<b>%</b>}
                      />
                    </Form.Item>
                    <Checkbox style={{ marginLeft: "50px" }}>No Tax</Checkbox>
                  </OtherFeesInnerElement>
                  <OtherFeesInnerElement>
                    <Form.Item
                      // label="GST"
                      name="ccfees"
                      rules={[
                        {
                          required: true,
                          message: "Please Enter CC Fees!",
                        },
                      ]}
                    >
                      <Input
                        prefix={<b>CC FEES :</b>}
                        placeholder="Please Enter CC FEES"
                        suffix={<b>%</b>}
                      />
                    </Form.Item>
                    <Checkbox style={{ marginLeft: "50px" }}>No CC</Checkbox>
                  </OtherFeesInnerElement>
                  <h3 style={{ marginBottom: "2px" }}>SELECT PAYMENT :</h3>
                  <PaymentBTN>
                    <div>
                      <Button type="Default" className="paymentBtn">
                        <span>CASH</span>
                      </Button>
                      <Button type="Default" className="paymentBtn">
                        <span>CHEQUE</span>
                      </Button>
                    </div>
                    <div>
                      <Button type="Default" className="paymentBtn">
                        <span>CREDIT CARD</span>
                      </Button>
                      <Button type="Default" className="paymentBtn">
                        <span>GIFT VOUCHER</span>
                      </Button>
                    </div>
                  </PaymentBTN>
                  <StatusAndEmailWrapper>
                    <div className="statuswrapper">
                      <div>
                        <h3 style={{ margin: "0px 10px 0px 0px" }}>STATUS :</h3>
                      </div>
                      <Form.Item
                        // label="STATUS :"
                        name="gst"
                        rules={[
                          {
                            required: true,
                            message: "Please Enter GST!",
                          },
                        ]}
                      >
                        <Radio.Group>
                          <Radio value="paid">PAID</Radio>
                          <Radio value="payLater">PAY LATER</Radio>
                        </Radio.Group>
                      </Form.Item>
                    </div>
                    <div>
                    <Checkbox className="EReceipt">
                      Send E-Receipt
                    </Checkbox>
                    </div>
                  </StatusAndEmailWrapper>
                  <Form.Item
                    // label="NOTES"
                    name="notes"
                    rules={[
                      {
                        required: true,
                        message: "Notes!",
                      },
                    ]}
                  >
                    <Textarea placeholder="Please Enter NOTES" />
                  </Form.Item>
                </div>
                <AmountWrapper>
                  <Form.Item
                    // label="GST"
                    name="tax"
                    rules={[
                      {
                        required: false,
                        message: "Please Enter TAX!",
                      },
                    ]}
                    className="firstInputElement"
                  >
                    <Input
                      prefix={<b>TAX :$</b>}
                      placeholder="Please Enter TAX"
                    />
                  </Form.Item>
                  <Form.Item
                    // label="GST"
                    name="ccfees"
                    rules={[
                      {
                        required: false,
                        message: "Please Enter CC Fees!",
                      },
                    ]}
                    className="inputElement"
                  >
                    <Input
                      prefix={<b>CC FEES :$</b>}
                      placeholder="Please Enter CC FEES"
                    />
                  </Form.Item>
                  <Form.Item
                    // label="GST"
                    name="ccfees"
                    rules={[
                      {
                        required: false,
                        message: "Please Enter Total Amount!",
                      },
                    ]}
                    className="inputElement"
                  >
                    <Input
                      prefix={<b>TOTAL AMOUNT :$</b>}
                      placeholder="Please Enter CC FEES"
                    />
                  </Form.Item>
                  <Form.Item
                    // label="GST"
                    name="amountPaid"
                    rules={[
                      {
                        required: false,
                        message: "Please Enter Amount Paid!",
                      },
                    ]}
                    className="inputElement"
                  >
                    <Input
                      prefix={<b>AMOUNT PAID :$</b>}
                      placeholder="Please Enter Amount Paid"
                    />
                  </Form.Item>
                </AmountWrapper>
              </OtherFeesWrapper>

              <BottomButtonWrapper>
                <Button>
                  <span>Cancel</span>
                </Button>

                <Button type="primary" className="saveBtn" htmlType="submit">
                  <span>Save</span>
                </Button>
              </BottomButtonWrapper>
            </Form>
          </div>
        </div>
      </Box>
    </LayoutWrapper>
  );
};

export default MembershipCreateOrUpdate;
