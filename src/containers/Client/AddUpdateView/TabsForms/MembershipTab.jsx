import React, { useEffect, useState } from "react";
import { TwoElementWrapper } from "@iso/components/UI/Form/FormUI.style";
import {
  BottomButtonWrapper,
  OtherFeesWrapper,
  OtherFeesInnerElement,
  AmountWrapper,
  PaymentBTN,
  StatusAndEmailWrapper,
  MainWrapper,
} from "./Styles/Membership.style";
import Button from "@iso/components/uielements/button";
import Input, { Textarea } from "@iso/components/uielements/input";
import { DateRangepicker } from "@iso/components/uielements/datePicker";
import Select, { SelectOption } from "@iso/components/uielements/select";
import { Form, Radio } from "antd";
import Checkbox from "@iso/components/uielements/checkbox";
import { GetAllClients } from "../../actions";
const Option = SelectOption;
const MembershipCreateOrUpdate = () => {
  const [form] = Form.useForm();
  const [clients, setClients] = useState([]);

  const getAllClients = (value) => {
    GetAllClients({
      pageNo: 1,
      searchValue: value,
      length: 0,
      sortColumn: "",
      sortOrder: "",
    })
      .then((res) => {
        setClients(res?.responseData.data);
      })
      .catch(() => {});
  };

  useEffect(() => {
    getAllClients();
  }, []);

  return (
    <>
      <div className="PageContent">
        <div className="BillingInformation">
          <Form
            form={form}
            name="currency"
            layout="vertical"
            scrollToFirstError
          >
            <TwoElementWrapper>
              <Form.Item
                name="clientId"
                // label="Client"
                rules={[
                  {
                    required: true,
                    message: "Select Client!",
                  },
                ]}
                className="elementWidth"
              >
                <Select
                  showSearch
                  placeholder="Select Client"
                  onSearch={getAllClients}
                  allowClear
                  filterOption={false}
                >
                  {clients &&
                    clients.map((e) => (
                      <Option value={e.id} key={e.id}>
                        {e.firstName}
                      </Option>
                    ))}
                </Select>
              </Form.Item>
              <Form.Item
                name="membershipId"
                // label="Select Class Series / Membership"
                rules={[
                  {
                    required: true,
                    message: "Select Class Series / Membership!",
                  },
                ]}
                className="elementWidth"
              >
                <Select
                  placeholder="Select Class Series / Membership"
                  // handleChange={handleChangeType}
                  allowClear
                >
                  <Option value="Days">Days</Option>
                  <Option value="Months">Months</Option>
                  <Option value="Years">Years</Option>
                </Select>
              </Form.Item>
            </TwoElementWrapper>
            <TwoElementWrapper>
              <Form.Item
                name="startAndEndDate"
                // label="Select Start And End Date"
                rules={[
                  {
                    required: true,
                    message: "Select Start And End Date!",
                  },
                ]}
                className="elementWidth"
              >
                <DateRangepicker />
              </Form.Item>
              <Form.Item
                name="membershipFees"
                // label="Class Series / Membership Fees"
                rules={[
                  {
                    required: true,
                    message: "Enter Class Series / Membership Fees!",
                  },
                ]}
                className="elementWidth"
              >
                <Input
                  prefix={<b>CLASS SERIES / MEMBERSHIP FEES: $</b>}
                  placeholder="Username"
                />
              </Form.Item>
            </TwoElementWrapper>

            <TwoElementWrapper>
              <Form.Item
                name="discountType"
                // label="Select Class Series / Membership"
                rules={[
                  {
                    required: true,
                    message: "Enter Discount Type!",
                  },
                ]}
                className="elementWidth"
              >
                <Select
                  placeholder="Select Discount Type"
                  // handleChange={handleChangeType}
                  allowClear
                >
                  <Option value="%">%</Option>
                  <Option value="Flat">Flat</Option>
                  <Option value="Promo Code">Promo Code</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="discount"
                // label="Select Class Series / Membership"
                rules={[
                  {
                    required: true,
                    message: "Enter DISCOUNT!",
                  },
                ]}
                className="elementWidth"
              >
                <Input prefix={<b>DISCOUNT:</b>} placeholder="DISCOUNT" />
              </Form.Item>
            </TwoElementWrapper>

            <TwoElementWrapper>
              <Form.Item
                name="adjustment"
                // label="Select Start And End Date"
                rules={[
                  {
                    required: true,
                    message: "Enter ADJUSTMENT!",
                  },
                ]}
                className="elementWidth"
              >
                <Input prefix={<b>ADJUSTMENT :</b>} placeholder="ADJUSTMENT" />
              </Form.Item>
              <Form.Item
                name="adjustmentAmount"
                // label="ADJUSTMENT AMOUNT"
                rules={[
                  {
                    required: true,
                    message: "Enter ADJUSTMENT AMOUNT!",
                  },
                ]}
                className="elementWidth"
              >
                <Input
                  prefix={<b>ADJUSTMENT AMOUNT: $</b>}
                  placeholder="ADJUSTMENT AMOUNT"
                />
              </Form.Item>
            </TwoElementWrapper>
            <MainWrapper>
              <OtherFeesWrapper>
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
                  <Form.Item
                    // label="GST"
                    name="noTax"
                    valuePropName="Checked"
                    rules={[
                      {
                        required: true,
                        message: "Please Check Tax!",
                      },
                    ]}
                  >
                    <Checkbox style={{ marginLeft: "50px" }}>No Tax</Checkbox>
                  </Form.Item>
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
                  <Form.Item
                    // label="GST"
                    name="cc"
                    valuePropName="Checked"
                    rules={[
                      {
                        required: true,
                        message: "Please Check CC!",
                      },
                    ]}
                  >
                    <Checkbox style={{ marginLeft: "50px" }}>No CC</Checkbox>
                  </Form.Item>
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
                    <Checkbox className="EReceipt">Send E-Receipt</Checkbox>
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
              </OtherFeesWrapper>
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
            </MainWrapper>

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
    </>
  );
};

export default MembershipCreateOrUpdate;
