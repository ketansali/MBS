import React, { useState } from "react";
import {
    TwoElementWrapper,
    TwoElementInnerWrapper,
} from "@iso/components/UI/Form/FormUI.style";
import Input from "@iso/components/uielements/input";
import Datepicker from "@iso/components/uielements/datePicker";
import Select, { SelectOption } from "@iso/components/uielements/select";
import { Form, Radio, Upload } from "antd";
import Checkbox, { CheckboxGroup } from "@iso/components/uielements/checkbox";
import Button from "@iso/components/uielements/button";

import { UploadOutlined, PlusOutlined, CloseOutlined } from '@ant-design/icons';
import { BottomButtonWrapper } from "../../../Client/Membership/Membership.style";

const Option = SelectOption;
const BasicTab = () => {
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
                    <Form.Item>
                        <Checkbox><span style={{ fontSize: "13px", fontWeight: "300" }}> IS SUBSTITUTE</span></Checkbox>
                        <Checkbox><span style={{ fontSize: "13px", fontWeight: "300" }}> BOOK ONLINE</span></Checkbox>
                    </Form.Item>
                </TwoElementWrapper>
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
                    <Form.Item
                        name="email"
                        // label="First Name"
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
                    <Form.Item
                        name="phoneNo"
                        // label="Last Name"
                        rules={[
                            {
                                required: true,
                                message: "Enter Phone No!",
                            },
                        ]}
                        className="elementWidth"
                    >
                        <Input placeholder="Mobile Phone" type="number" maxLength="10" />
                    </Form.Item>
                </TwoElementWrapper>

                <TwoElementWrapper>
                    <Form.Item
                        name="address"
                        // label="First Name"
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
                        // label="Last Name"
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
                            <Option value="California">California</Option>
                            <Option value="Los Angel">Los Angel</Option>
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
                        name="photo"
                        className="elementWidth"
                    >
                        <Input type="file" />
                        <span style={{ fontSize: "13px", fontWeight: "300" }} >(File Size Max 2MB, allowed formats: jpg, jpeg, png, gif)</span>
                    </Form.Item>
                    <Form.Item
                        name="homePhone"
                        // label="Select Class Series / Membership"

                        className="elementWidth"
                    >
                        <Input placeholder="Home Phone" />
                    </Form.Item>
                </TwoElementWrapper>

                <TwoElementWrapper>
                    <Form.Item>
                        <Checkbox><span style={{ fontSize: "13px", fontWeight: "300" }}> RECEIVE EMAIL/SMS</span></Checkbox>
                    </Form.Item>
                    <Form.Item
                        name="workPhone"
                        // label="Select Class Series / Membership"

                        className="elementWidth"
                    >
                        <Input placeholder="Work Phone" />
                    </Form.Item>
                </TwoElementWrapper>

                <TwoElementWrapper>
                    <Form.Item name="appointmentCategory"
                        label="APPOINTMENT CATEGORY">
                        <Checkbox><span style={{ fontSize: "13px", fontWeight: "300" }}> DANCE</span></Checkbox>
                        <Checkbox><span style={{ fontSize: "13px", fontWeight: "300" }}> Massage</span></Checkbox>
                        <Checkbox><span style={{ fontSize: "13px", fontWeight: "300" }}> Pilates</span></Checkbox>
                        <Checkbox><span style={{ fontSize: "13px", fontWeight: "300" }}> Yoga</span></Checkbox>
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


                <TwoElementWrapper>
                    <Form.Item
                        name="confirmPassword"
                        // label="Select Class Series / Membership"

                        className="elementWidth"
                    >
                        <Input placeholder="Confirm Password" />
                    </Form.Item>
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
                            defaultValue="Select Location"
                            placeholder="Select Location"
                            // handleChange={handleChangeType}
                            allowClear
                        >
                            <Option value="LosAngeles">Los Angeles</Option>
                            <Option value="Texas">Texas</Option>
                        </Select>
                    </Form.Item>
                </TwoElementWrapper>


                <TwoElementWrapper>
                    <Form.Item
                        name="status"

                    >
                        <label >Status:&nbsp;&nbsp;</label>
                        <Radio.Group>
                            <Radio value="male">ACTIVE</Radio>
                            <Radio value="female">INACTIVE</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item
                        name="sortOrder"
                        className="elementWidth"
                    >
                        <Input placeholder="Sort Order" />
                    </Form.Item>
                </TwoElementWrapper>

                <TwoElementWrapper>
                    <Form.Item
                        name="status"
                    >
                        <labe>Create User&nbsp;&nbsp;</labe>
                        <Checkbox><span style={{ fontSize: "13px", fontWeight: "300" }}></span></Checkbox>
                    </Form.Item>

                </TwoElementWrapper>

                <TwoElementWrapper>
                    <Form.Item
                        name="emergencyName"
                        label="EMERGENCY INFORMATION"

                        className="elementWidth"
                    >
                        <Input placeholder="Name" />
                    </Form.Item>
                    <Form.Item
                        name="relationShip"
                        label="RelationShip"

                        className="elementWidth"
                    >
                        <Select
                            showSearch
                            defaultValue="RelationShip"
                            placeholder="Select RelationShip"
                            // handleChange={handleChangeType}
                            allowClear
                        >
                            <Option value="Aunt">Aunt</Option>
                            <Option value="Brother">Brother</Option>
                        </Select>
                    </Form.Item>
                </TwoElementWrapper>

                <TwoElementWrapper>
                    <Form.Item
                        name="emergencyPhone"
                        className="elementWidth"
                    >
                        <Input placeholder="Phone" />
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
        </>
    )
}
export default BasicTab;