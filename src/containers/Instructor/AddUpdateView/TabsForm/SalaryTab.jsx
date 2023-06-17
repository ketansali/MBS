import React from 'react'
import { Button, Col, Form, Input, Row } from 'antd'
import {
    TwoElementWrapper,
    TwoElementInnerWrapper,
} from "@iso/components/UI/Form/FormUI.style";
import Select, { SelectOption } from "@iso/components/uielements/select";
import { BottomButtonWrapper } from '../../../Client/Membership/Membership.style';

const Option = SelectOption;
const SalaryTab = () => {
    const [form] = Form.useForm();

    return (
        <Form form={form} name="currency" layout="vertical" scrollToFirstError>
            <h3>CLASS SALARY</h3>
            <TwoElementWrapper>
                <Form.Item
                    name="salaryType"
                    rules={[
                        {
                            required: true,
                            message: "Select salary type!",
                        },
                    ]}
                    className="elementWidth"
                >
                    <Select
                        showSearch
                        defaultValue="Select Salary Type"
                        placeholder="Select Salary Type"
                        allowClear
                    >
                        <Option value="perclass">Per Class</Option>
                        <Option value="perclient">Per Client</Option>
                        <Option value="combination">Combination Per Class & Per Client</Option>
                        <Option value="hourly">Hourly</Option>
                    </Select>
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
                    <Input placeholder="Zip" />
                </Form.Item>
            </TwoElementWrapper>

            <TwoElementWrapper>
                <Form.Item
                    name="username"
                    // label="Select Class Series / Membership"

                    className="elementWidth"
                >
                    <Input placeholder="User Name" />
                </Form.Item>
                <Form.Item
                    name="password"
                    // label="Select Class Series / Membership"

                    className="elementWidth"
                >
                    <Input placeholder="Password" />
                </Form.Item>
            </TwoElementWrapper>

            <BottomButtonWrapper>
                <Button className="saveBtn">
                    <span>Back</span>
                </Button>
                <Button type="primary" className="saveBtn" htmlType="submit">
                    <span>Save</span>
                </Button>
            </BottomButtonWrapper>
        </Form>
    )
}

export default SalaryTab