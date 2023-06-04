import React from "react";
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
import { Form, Radio, Space, Typography } from "antd";
import Checkbox from "@iso/components/uielements/checkbox";
const Option = SelectOption;
const { Text } = Typography;

const AppointmentTab = () => {
  const [form] = Form.useForm();
  return (
    <Form
      form={form}
      name="currency"
      layout="vertical"
      scrollToFirstError
    >
      <TwoElementWrapper>
        <Form.Item
          name="instructor"
          // label="instructor"
          rules={[
            {
              required: true,
              message: "Enter instructor!",
            },
          ]}
          // className="elementWidth"
          style={{ width: "100%" }}
        >
          <Select
            showSearch
            defaultValue="Instructor"
            placeholder="Select Instructor"
            // handleChange={handleChangeType}
            allowClear
          >
            <Option value="Days">Days</Option>
            <Option value="Months">Months</Option>
            <Option value="Years">Years</Option>
          </Select>
        </Form.Item>
        {/* <Space.Compact className="elementWidth">
          <Form.Item
            name="appintment"
            // label="Select Class Series / Membership"
            rules={[
              {
                required: true,
                message: "Type",
              },
            ]}

            style={{ width: "20%" }}
          >

            <Select
              defaultValue="Open"
              placeholder="type"
              // handleChange={handleChangeType}
              allowClear
              style={{ borderRadius: "100px" }}
            >
              <Option value="Open">Open</Option>
              <Option value="Private">Private</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="appintment"
            // label="Select Class Series / Membership"
            rules={[
              {
                required: true,
                message: "Select Appointment",
              },
            ]}
            style={{ width: "80%" }}
          >
            <Select
              defaultValue="Days"
              placeholder="Select Appointment"
              // handleChange={handleChangeType}
              allowClear
            >
              <Option value="Days">Hatha 1-1(Montly)</Option>
              <Option value="Months">Yoga 1-1(Weekly)</Option>
              <Option value="Years">3 Minutes consultation (Weekly) 30 minutes</Option>
            </Select>


          </Form.Item>
        </Space.Compact> */}
      </TwoElementWrapper>
      <TwoElementWrapper>
        <Form.Item
          name="selectedAppointment"
          // label="instructor"
          rules={[
            {
              required: true,
              message: "Enter Appointment!",
            },
          ]}
          className="elementWidth"
        >
          <Select
            showSearch
            defaultValue="Appointment"
            placeholder="Select Appointment"
            // handleChange={handleChangeType}
            allowClear
          >
            <Option value="Days">Days</Option>
            <Option value="Months">Months</Option>
            <Option value="Years">Years</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="fees"
          // label="Select Class Series / Membership"
          rules={[
            {
              required: true,
              message: "Please Enter Fees!",
            },
          ]}
          className="elementWidth"
        >
          <Input
            prefix={<Text strong> $ </Text>}
            placeholder="Fees"
          />
        </Form.Item>
      </TwoElementWrapper>

      <TwoElementWrapper>
        <Form.Item
          name="startAndDate"
          // label="Select Start And End Date"
          rules={[
            {
              required: true,
              message: "Select Start And End Date!",
            },
          ]}
          // className="elementWidth"
          style={{ width: '50%' }}
        >
          <DateRangepicker />
        </Form.Item>
      </TwoElementWrapper>

      <TwoElementWrapper>
        <Form.Item
          name="discountType"
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
            defaultValue="%"
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
          name="membership"
          // label="Select Class Series / Membership"
          rules={[
            {
              required: true,
              message: "DISCOUNT!",
            },
          ]}
          className="elementWidth"
        >
          <Input prefix={<b>DISCOUNT:</b>} placeholder="Discount" />
        </Form.Item>
      </TwoElementWrapper>

      <TwoElementWrapper>
        <Form.Item
          name="adjustment"
          // label="Select Start And End Date"
          rules={[
            {
              required: true,
              message: "ADJUSTMENT!",
            },
          ]}
          className="elementWidth"
        >
          <Input prefix={<b>ADJUSTMENT :</b>} placeholder="ADJUSTMENT Reasone" />
        </Form.Item>
        <Form.Item
          name="discount"
          // label="Select Class Series / Membership"
          rules={[
            {
              required: true,
              message: "ADJUSTMENT AMOUNT!",
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
          <h3 style={{ marginBottom: "2px" }}>TAXATION:</h3>
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

      <MainWrapper>
        <OtherFeesWrapper>
          <h3 style={{ marginBottom: "2px" }}>APPOINTMENT SCHEDULE:</h3>
          <OtherFeesInnerElement>
            <Checkbox >GENERATE RECURRING SCHEDULES</Checkbox>
          </OtherFeesInnerElement>
        </OtherFeesWrapper>
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

  )
}

export default AppointmentTab