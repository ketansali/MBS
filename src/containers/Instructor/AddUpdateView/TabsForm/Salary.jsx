import React, { useState } from "react";
import {
    TwoElementWrapper,
    TwoElementInnerWrapper,
} from "@iso/components/UI/Form/FormUI.style";
import { Button, Form, Modal } from 'antd';
import Box from "@iso/components/utility/box";
import Checkbox, { CheckboxGroup } from "@iso/components/uielements/checkbox";
import Input from "@iso/components/uielements/input";
import { BottomButtonWrapper } from "../../../Client/Membership/Membership.style";
import { PlusOutlined } from "@ant-design/icons";
import { DateRangepicker } from "@iso/components/uielements/datePicker";

const Salary = () => {
    const [form] = Form.useForm();
    const [modal1Open, setModal1Open] = useState(false);

    return (
        <div className="main-conatiner-salary">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px' }}>
                <h3>ASSIGN NEW CLASS </h3>
                <Button type="primary" className="saveBtn" onClick={() => setModal1Open(true)}>
                    <span>QUICK ADD CLASS</span>
                </Button>
            </div>
            <Modal
                title="QUICK ADD CLASS"
                style={{ top: 20, borderRadius: "10px", overflow: "auto" }}
                open={modal1Open}
                onOk={() => setModal1Open(false)}
                onCancel={() => setModal1Open(false)}
            >
                <Form form={form} name="product" layout="vertical" scrollToFirstError>
                    <Form.Item
                        name="className"
                        // label="Name"
                        rules={[
                            {
                                required: true,
                                message: "Enter ClassName!",
                            },
                        ]}
                    >
                        <Input placeholder="Class Name*" />
                    </Form.Item>

                    <Form.Item
                        name="maxNumberOfCients"
                        // label="Address"
                        rules={[
                            {
                                required: true,
                                message: "Enter Max No Client!",
                            },
                        ]}
                    >
                        <Input placeholder="Enter Max No Of Clients" />
                    </Form.Item>

                    <Form.Item
                        name="Class Details"
                        // label="Address"
                        rules={[
                            {
                                required: true,
                                message: "Enter Class Details!",
                            },
                        ]}
                    >
                        <Input placeholder="Enter Class Details" />
                    </Form.Item>

                </Form>
            </Modal>
            <Box style={{ marginTop: '10px' }}>
                <Form form={form} name="currency" layout="vertical" scrollToFirstError>
                    <TwoElementWrapper>
                        <Form.Item
                            name="class"
                            // label="First Name"
                            rules={[
                                {
                                    required: true,
                                    message: "Enter Class!",
                                },
                            ]}
                            className="elementWidth"
                        >
                            <Input placeholder="Class" />
                        </Form.Item>
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
                        <Checkbox >MON</Checkbox>
                        <Form.Item
                            name="econtact"
                            // label="Select Class Series / Membership"
                            rules={[
                                {
                                    required: false,
                                    message: "Enter Name!",
                                },
                            ]}
                            // className="clsEcontact"
                            style={{ width: "30%" }}
                        >
                            <Input placeholder="Name" />
                        </Form.Item>
                        <Button
                            style={{ marginLeft: "10px" }}
                            type="secondary"
                            icon={<PlusOutlined />}
                            shape="circle"
                        // onClick={handleMobileAndTypeField}
                        />

                        <Checkbox style={{ marginLeft: '10px' }}>TUE</Checkbox>
                        <Form.Item
                            name="econtact"
                            // label="Select Class Series / Membership"
                            rules={[
                                {
                                    required: false,
                                    message: "Enter Name!",
                                },
                            ]}
                            // className="clsEcontact"
                            style={{ width: "30%" }}
                        >
                            <Input placeholder="Name" />
                        </Form.Item>
                        <Button
                            style={{ marginLeft: "10px" }}
                            type="secondary"
                            icon={<PlusOutlined />}
                            shape="circle"
                        // onClick={handleMobileAndTypeField}
                        />

                        <Checkbox style={{ marginLeft: '10px' }}> WED</Checkbox>
                        <Form.Item
                            name="econtact"
                            // label="Select Class Series / Membership"
                            rules={[
                                {
                                    required: false,
                                    message: "Enter Name!",
                                },
                            ]}
                            // className="clsEcontact"
                            style={{ width: "30%" }}
                        >
                            <Input placeholder="Name" />
                        </Form.Item>
                        <Button
                            style={{ marginLeft: "10px" }}
                            type="secondary"
                            icon={<PlusOutlined />}
                            shape="circle"

                        // onClick={handleMobileAndTypeField}
                        />
                    </TwoElementWrapper>
                    <BottomButtonWrapper>
                        <Button type="primary"
                            icon={<PlusOutlined />}
                            className="saveBtn"
                            htmlType="submit"
                            style={{ borderRadius: '20px' }}
                        >
                            <span>More Scheduler</span>
                        </Button>
                    </BottomButtonWrapper>
                </Form>
            </Box>
        </div>
    )
}

export default Salary