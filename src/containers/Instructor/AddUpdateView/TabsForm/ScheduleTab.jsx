import React, { useState } from "react";
import {
    TwoElementWrapper,
    TwoElementInnerWrapper,
} from "@iso/components/UI/Form/FormUI.style";
import { Button, Col, Form, Modal, Row, TimePicker } from 'antd';
import Box from "@iso/components/utility/box";
import Checkbox, { CheckboxGroup } from "@iso/components/uielements/checkbox";
import Input from "@iso/components/uielements/input";
import { BottomButtonWrapper } from "../../../Client/Membership/Membership.style";
import { CloseOutlined, PlusOutlined } from "@ant-design/icons";
import { DateRangepicker } from "@iso/components/uielements/datePicker";
import dayjs from 'dayjs';
const format = 'HH:mm';

const ScheduleTab = () => {
    const [form] = Form.useForm();
    const [modal1Open, setModal1Open] = useState(false);
    const [monData, setMonData] = useState([]);
    const [tueData, setTueData] = useState([]);
    const [wedData, setWedData] = useState([]);
    const [thuData, setThuData] = useState([]);
    const [friData, setFriData] = useState([]);
    const [satData, setSatData] = useState([]);
    const [sunData, setSunData] = useState([]);
    const [moreSchedulerFiled, setMoreSchedulerFiled] = useState([]);

    // for days add
    const handleDaysAndField = (instrctDay) => {
        if (instrctDay === "MON") {
            setMonData([...monData, { contact: "", contactType: "" }]);
        } else if (instrctDay === "TUE") {
            setTueData([...tueData, { contact: "", contactType: "" }]);
        } else if (instrctDay === "WED") {
            setWedData([...wedData, { contact: "", contactType: "" }]);
        } else if (instrctDay === "THU") {
            setThuData([...thuData, { contact: "", contactType: "" }]);
        } else if (instrctDay === "FRI") {
            setFriData([...friData, { contact: "", contactType: "" }]);
        } else if (instrctDay === "SAT") {
            setSatData([...satData, { contact: "", contactType: "" }]);
        } else if (instrctDay === "SUN") {
            setSunData([...sunData, { contact: "", contactType: "" }]);
        } else if (instrctDay === "MORE_SCHEDULER") {
            setMoreSchedulerFiled([...moreSchedulerFiled, { contact: "", contactType: "" }]);
        }
    };

    const handleDeleteDaysAndField = (instrctDay, i) => {
        if (instrctDay === "MON") {
            const deleteField = [...monData];
            deleteField.splice(i, 1);
            setMonData(deleteField);
        } else if (instrctDay === "TUE") {
            const deleteField = [...tueData];
            deleteField.splice(i, 1);
            setTueData(deleteField);
        } else if (instrctDay === "WED") {
            const deleteField = [...wedData];
            deleteField.splice(i, 1);
            setWedData(deleteField);
        } else if (instrctDay === "THU") {
            const deleteField = [...thuData];
            deleteField.splice(i, 1);
            setThuData(deleteField);
        } else if (instrctDay === "FRI") {
            const deleteField = [...friData];
            deleteField.splice(i, 1);
            setFriData(deleteField);
        } else if (instrctDay === "SAT") {
            const deleteField = [...satData];
            deleteField.splice(i, 1);
            setSatData(deleteField);
        } else if (instrctDay === "SUN") {
            const deleteField = [...sunData];
            deleteField.splice(i, 1);
            setSunData(deleteField);
        } else if (instrctDay === "MORE_SCHEDULER") {
            const deleteField = [...moreSchedulerFiled];
            deleteField.splice(i, 1);
            setMoreSchedulerFiled(deleteField);
        }
    };

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

                    <Row>
                        <Col span={8}>
                            <div style={{ display: 'flex', width: '100%' }}>
                                <Checkbox >MON</Checkbox>
                                <Form.Item
                                    name="mon"
                                    rules={[
                                        {
                                            required: false,
                                            message: "Enter Mon!",
                                        },
                                    ]}
                                    style={{ width: '60%' }}
                                >
                                    <TimePicker
                                        style={{ width: '100%' }}
                                        name="mon"
                                        format={format}
                                    />
                                </Form.Item>
                                <Button
                                    style={{ marginLeft: "4px" }}
                                    type="secondary"
                                    icon={<PlusOutlined />}
                                    shape="circle"
                                    onClick={() => handleDaysAndField('MON')}

                                />
                            </div>
                            {monData.map((val, i) => (
                                <div style={{ display: 'flex', width: '100%' }}>
                                    <Form.Item
                                        name={`monFirst_${i}`}
                                        rules={[
                                            {
                                                required: false,
                                                message: "Enter Name!",
                                            },
                                        ]}
                                        style={{ width: '50%' }}
                                    >
                                        <TimePicker
                                            style={{ width: '100%' }}
                                            name={`monFirst_${i}`}
                                            format={format}
                                        />
                                    </Form.Item>

                                    <Form.Item
                                        name={`monSecond_${i}`}
                                        rules={[
                                            {
                                                required: false,
                                                message: "Enter Name!",
                                            },
                                        ]}
                                        style={{ marginLeft: '5px', width: '50%' }}
                                    >
                                        <TimePicker
                                            style={{ width: '100%' }}
                                            format={format}
                                            name={`monSecond_${i}`}
                                        />
                                    </Form.Item>
                                    <Button
                                        type="danger"
                                        icon={<CloseOutlined />}
                                        shape="circle"
                                        onClick={() => handleDeleteDaysAndField('MON', i)}
                                        style={{ marginLeft: '4px', marginRight: '8px' }}
                                    />
                                </div>
                            ))}
                        </Col>
                        <Col span={8}>
                            <div style={{ display: 'flex', width: '100%' }}>
                                <Checkbox style={{ marginLeft: '10px' }}>TUE</Checkbox>
                                <Form.Item
                                    name={`tue`}
                                    rules={[
                                        {
                                            required: false,
                                            message: "Enter Name!",
                                        },
                                    ]}
                                    style={{ width: '60%' }}
                                >
                                    <TimePicker
                                        style={{ width: '100%' }}
                                        name={`tue`}
                                        format={format}
                                    />
                                </Form.Item>
                                <Button
                                    style={{ marginLeft: "4px" }}
                                    type="secondary"
                                    icon={<PlusOutlined />}
                                    shape="circle"
                                    onClick={() => handleDaysAndField('TUE')}
                                />
                            </div>
                            {tueData.map((val, i) => (
                                <div style={{ display: 'flex', width: '100%', marginLeft: '10px' }}>
                                    <Form.Item
                                        name={`tueFirst_${i}`}
                                        rules={[
                                            {
                                                required: false,
                                                message: "Enter Name!",
                                            },
                                        ]}
                                        style={{ width: '50%' }}
                                    >
                                        <TimePicker
                                            style={{ width: '100%' }}
                                            format={format}
                                            name={`tueFirst_${i}`}
                                        />
                                    </Form.Item>

                                    <Form.Item
                                        name={`tueSecond_${i}`}
                                        rules={[
                                            {
                                                required: false,
                                                message: "Enter Name!",
                                            },
                                        ]}
                                        style={{ marginLeft: '5px', width: '50%' }}
                                    >
                                        <TimePicker
                                            style={{ width: '100%' }}
                                            format={format}
                                            name={`tueSecond_${i}`}
                                        />
                                    </Form.Item>
                                    <Button
                                        type="danger"
                                        icon={<CloseOutlined />}
                                        shape="circle"
                                        onClick={() => handleDeleteDaysAndField('TUE', i)}
                                        style={{ marginLeft: '4px', marginRight: '14px' }}
                                    />
                                </div>
                            ))}
                        </Col>
                        <Col span={8}>
                            <div style={{ display: 'flex', width: '100%' }}>
                                <Checkbox style={{ marginLeft: '10px' }}> WED</Checkbox>
                                <Form.Item
                                    name={`wed`}
                                    rules={[
                                        {
                                            required: false,
                                            message: "Enter Name!",
                                        },
                                    ]}
                                    style={{ width: '60%' }}
                                >
                                    <TimePicker
                                        style={{ width: '100%' }}
                                        name={`wed`}
                                        format={format}
                                    />
                                </Form.Item>
                                <Button
                                    style={{ marginLeft: "4px" }}
                                    type="secondary"
                                    icon={<PlusOutlined />}
                                    shape="circle"
                                    onClick={() => handleDaysAndField('WED')}
                                />
                            </div>
                            {wedData.map((val, i) => (
                                <div style={{ display: 'flex', width: '100%', marginLeft: '10px' }}>
                                    <Form.Item
                                        name={`wedFirst_${i}`}
                                        rules={[
                                            {
                                                required: false,
                                                message: "Enter Name!",
                                            },
                                        ]}
                                        style={{ width: '50%' }}
                                    >
                                        <TimePicker
                                            style={{ width: '100%' }}
                                            format={format}
                                            name={`wedFirst_${i}`}
                                        />
                                    </Form.Item>

                                    <Form.Item
                                        name={`wedSecond_${i}`}
                                        rules={[
                                            {
                                                required: false,
                                                message: "Enter Name!",
                                            },
                                        ]}
                                        style={{ marginLeft: '5px', width: '50%' }}
                                    >
                                        <TimePicker
                                            style={{ width: '100%' }}
                                            format={format}
                                            name={`wedSecond_${i}`}
                                        />
                                    </Form.Item>
                                    <Button
                                        type="danger"
                                        icon={<CloseOutlined />}
                                        shape="circle"
                                        onClick={() => handleDeleteDaysAndField('WED', i)}
                                        style={{ marginLeft: '4px', marginRight: '13px' }}
                                    />
                                </div>
                            ))}
                        </Col>
                    </Row>

                    <Row>
                        <Col span={8}>
                            <div style={{ display: 'flex', width: '100%' }}>
                                <Checkbox >THU</Checkbox>
                                <Form.Item
                                    name={`thu`}
                                    rules={[
                                        {
                                            required: false,
                                            message: "Enter Name!",
                                        },
                                    ]}
                                    style={{ width: '61.5%' }}
                                >
                                    <TimePicker
                                        style={{ width: '100%' }}
                                        format={format}
                                        name={`thu`}
                                    />
                                </Form.Item>
                                <Button
                                    style={{ marginLeft: "4px" }}
                                    type="secondary"
                                    icon={<PlusOutlined />}
                                    shape="circle"
                                    onClick={() => handleDaysAndField('THU')}

                                />
                            </div>
                            {thuData.map((val, i) => (
                                <div style={{ display: 'flex', width: '100%' }}>
                                    <Form.Item
                                        name={`thuFirst_${i}`}
                                        rules={[
                                            {
                                                required: false,
                                                message: "Enter Name!",
                                            },
                                        ]}
                                        style={{ width: '50%' }}
                                    >
                                        <TimePicker
                                            style={{ width: '100%' }}
                                            name={`thuFirst_${i}`}
                                            format={format}
                                        />
                                    </Form.Item>

                                    <Form.Item
                                        name={`thuSecond_${i}`}
                                        rules={[
                                            {
                                                required: false,
                                                message: "Enter Name!",
                                            },
                                        ]}
                                        style={{ marginLeft: '5px', width: '50%' }}
                                    >
                                        <TimePicker
                                            style={{ width: '100%' }}
                                            name={`thuSecond_${i}`}
                                            format={format}
                                        />
                                    </Form.Item>
                                    <Button
                                        type="danger"
                                        icon={<CloseOutlined />}
                                        shape="circle"
                                        onClick={() => handleDeleteDaysAndField('THU', i)}
                                        style={{ marginLeft: '4px', marginRight: '12px' }}
                                    />
                                </div>
                            ))}
                        </Col>
                        <Col span={8}>
                            <div style={{ display: 'flex', width: '100%' }}>
                                <Checkbox style={{ marginLeft: '10px' }}>FRI</Checkbox>
                                <Form.Item
                                    name={`fri`}
                                    rules={[
                                        {
                                            required: false,
                                            message: "Enter Name!",
                                        },
                                    ]}
                                    style={{ width: '61.5%' }}
                                >
                                    <TimePicker
                                        style={{ width: '100%' }}
                                        name={`fri`}
                                        format={format}
                                    />
                                </Form.Item>
                                <Button
                                    style={{ marginLeft: "4px" }}
                                    type="secondary"
                                    icon={<PlusOutlined />}
                                    shape="circle"
                                    onClick={() => handleDaysAndField('FRI')}
                                />
                            </div>
                            {friData.map((val, i) => (
                                <div style={{ display: 'flex', width: '100%', marginLeft: '10px' }}>
                                    <Form.Item
                                        name={`friFirst_${i}`}
                                        rules={[
                                            {
                                                required: false,
                                                message: "Enter Name!",
                                            },
                                        ]}
                                        style={{ width: '50%' }}
                                    >
                                        <TimePicker
                                            style={{ width: '100%' }}
                                            name={`friFirst_${i}`}
                                            format={format}
                                        />
                                    </Form.Item>

                                    <Form.Item
                                        name={`friSecond_${i}`}
                                        rules={[
                                            {
                                                required: false,
                                                message: "Enter Name!",
                                            },
                                        ]}
                                        style={{ marginLeft: '5px', width: '50%' }}
                                    >
                                        <TimePicker
                                            style={{ width: '100%' }}
                                            name={`friSecond_${i}`}
                                            format={format}
                                        />
                                    </Form.Item>
                                    <Button
                                        type="danger"
                                        icon={<CloseOutlined />}
                                        shape="circle"
                                        onClick={() => handleDeleteDaysAndField('FRI', i)}
                                        style={{ marginLeft: '4px', marginRight: '16px' }}
                                    />
                                </div>
                            ))}
                        </Col>
                        <Col span={8}>
                            <div style={{ display: 'flex', width: '100%' }}>
                                <Checkbox style={{ marginLeft: '10px' }}> SAT</Checkbox>
                                <Form.Item
                                    name={`sat`}
                                    rules={[
                                        {
                                            required: false,
                                            message: "Enter Name!",
                                        },
                                    ]}
                                    style={{ width: '61.5%' }}
                                >
                                    <TimePicker
                                        style={{ width: '100%' }}
                                        format={format}
                                        name={`sat`}
                                    />
                                </Form.Item>
                                <Button
                                    style={{ marginLeft: "4px" }}
                                    type="secondary"
                                    icon={<PlusOutlined />}
                                    shape="circle"
                                    onClick={() => handleDaysAndField('SAT')}
                                />
                            </div>
                            {satData.map((val, i) => (
                                <div style={{ display: 'flex', width: '100%', marginLeft: '10px' }}>
                                    <Form.Item
                                        name={`satFirst_${i}`}
                                        rules={[
                                            {
                                                required: false,
                                                message: "Enter Name!",
                                            },
                                        ]}
                                        style={{ width: '50%' }}
                                    >
                                        <TimePicker
                                            style={{ width: '100%' }}
                                            format={format}
                                            name={`satFirst_${i}`}
                                        />
                                    </Form.Item>

                                    <Form.Item
                                        name={`satSecond_${i}`}
                                        rules={[
                                            {
                                                required: false,
                                                message: "Enter Name!",
                                            },
                                        ]}
                                        style={{ marginLeft: '5px', width: '50%' }}
                                    >
                                        <TimePicker
                                            style={{ width: '100%' }}
                                            name={`satSecond_${i}`}
                                            format={format}
                                        />
                                    </Form.Item>
                                    <Button
                                        type="danger"
                                        icon={<CloseOutlined />}
                                        shape="circle"
                                        onClick={() => handleDeleteDaysAndField('SAT', i)}
                                        style={{ marginLeft: '4px', marginRight: '13px' }}
                                    />
                                </div>
                            ))}
                        </Col>
                    </Row>

                    <Row>
                        <Col span={8}>
                            <div style={{ display: 'flex', width: '100%' }}>
                                <Checkbox >SUN</Checkbox>
                                <Form.Item
                                    name={`sun`}
                                    rules={[
                                        {
                                            required: false,
                                            message: "Enter Name!",
                                        },
                                    ]}
                                    style={{ width: '61%' }}
                                >
                                    <TimePicker
                                        style={{ width: '100%' }}
                                        format={format}
                                        name={`sun`}
                                    />
                                </Form.Item>
                                <Button
                                    style={{ marginLeft: "4px" }}
                                    type="secondary"
                                    icon={<PlusOutlined />}
                                    shape="circle"
                                    onClick={() => handleDaysAndField('SUN')}

                                />
                            </div>
                            {sunData.map((val, i) => (
                                <div style={{ display: 'flex', width: '100%' }}>
                                    <Form.Item
                                        name={`sunFirst_${i}`}
                                        rules={[
                                            {
                                                required: false,
                                                message: "Enter Name!",
                                            },
                                        ]}
                                        style={{ width: '50%' }}
                                    >
                                        <TimePicker
                                            style={{ width: '100%' }}
                                            name={`sunFirst_${i}`}
                                            format={format}
                                        />
                                    </Form.Item>

                                    <Form.Item
                                        name={`sunSecond_${i}`}
                                        rules={[
                                            {
                                                required: false,
                                                message: "Enter Name!",
                                            },
                                        ]}
                                        style={{ marginLeft: '5px', width: '50%' }}
                                    >
                                        <TimePicker
                                            style={{ width: '100%' }}
                                            name={`sunSecond_${i}`}
                                            format={format}
                                        />
                                    </Form.Item>
                                    <Button
                                        type="danger"
                                        icon={<CloseOutlined />}
                                        shape="circle"
                                        onClick={() => handleDeleteDaysAndField('SUN', i)}
                                        style={{ marginLeft: '8px' }}
                                    />
                                </div>
                            ))}
                        </Col>
                    </Row>

                    <BottomButtonWrapper>
                        <Button type="primary"
                            icon={<PlusOutlined />}
                            // className="saveBtn"
                            // htmlType="submit"
                            style={{ borderRadius: '18px' }}
                            onClick={() => handleDaysAndField('MORE_SCHEDULER')}
                        >
                            <span>More Scheduler</span>
                        </Button>
                    </BottomButtonWrapper>
                </Form>
            </Box>

            {
                moreSchedulerFiled.map((i) => (
                    <Box style={{ marginTop: '10px' }}>
                        <Form form={form} name="currency" layout="vertical" scrollToFirstError>
                            <TwoElementWrapper>
                                <Form.Item
                                    name="class"
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

                            <Row>
                                <Col span={8}>
                                    <div style={{ display: 'flex', width: '100%' }}>
                                        <Checkbox >MON</Checkbox>
                                        <Form.Item
                                            name="mon"
                                            rules={[
                                                {
                                                    required: false,
                                                    message: "Enter Mon!",
                                                },
                                            ]}
                                            style={{ width: '60%' }}
                                        >
                                            <TimePicker
                                                style={{ width: '100%' }}
                                                name="mon"
                                                format={format}
                                            />
                                        </Form.Item>
                                        <Button
                                            style={{ marginLeft: "4px" }}
                                            type="secondary"
                                            icon={<PlusOutlined />}
                                            shape="circle"
                                            onClick={() => handleDaysAndField('MON')}

                                        />
                                    </div>
                                    {monData.map((val, i) => (
                                        <div style={{ display: 'flex', width: '100%' }}>
                                            <Form.Item
                                                name={`monFirst_${i}`}
                                                rules={[
                                                    {
                                                        required: false,
                                                        message: "Enter Name!",
                                                    },
                                                ]}
                                                style={{ width: '50%' }}
                                            >
                                                <TimePicker
                                                    style={{ width: '100%' }}
                                                    name={`monFirst_${i}`}
                                                    format={format}
                                                />
                                            </Form.Item>

                                            <Form.Item
                                                name={`monSecond_${i}`}
                                                rules={[
                                                    {
                                                        required: false,
                                                        message: "Enter Name!",
                                                    },
                                                ]}
                                                style={{ marginLeft: '5px', width: '50%' }}
                                            >
                                                <TimePicker
                                                    style={{ width: '100%' }}
                                                    format={format}
                                                    name={`monSecond_${i}`}
                                                />
                                            </Form.Item>
                                            <Button
                                                type="danger"
                                                icon={<CloseOutlined />}
                                                shape="circle"
                                                onClick={() => handleDeleteDaysAndField('MON', i)}
                                                style={{ marginLeft: '4px', marginRight: '8px' }}
                                            />
                                        </div>
                                    ))}
                                </Col>
                                <Col span={8}>
                                    <div style={{ display: 'flex', width: '100%' }}>
                                        <Checkbox style={{ marginLeft: '10px' }}>TUE</Checkbox>
                                        <Form.Item
                                            name={`tue`}
                                            rules={[
                                                {
                                                    required: false,
                                                    message: "Enter Name!",
                                                },
                                            ]}
                                            style={{ width: '60%' }}
                                        >
                                            <TimePicker
                                                style={{ width: '100%' }}
                                                name={`tue`}
                                                format={format}
                                            />
                                        </Form.Item>
                                        <Button
                                            style={{ marginLeft: "4px" }}
                                            type="secondary"
                                            icon={<PlusOutlined />}
                                            shape="circle"
                                            onClick={() => handleDaysAndField('TUE')}
                                        />
                                    </div>
                                    {tueData.map((val, i) => (
                                        <div style={{ display: 'flex', width: '100%', marginLeft: '10px' }}>
                                            <Form.Item
                                                name={`tueFirst_${i}`}
                                                rules={[
                                                    {
                                                        required: false,
                                                        message: "Enter Name!",
                                                    },
                                                ]}
                                                style={{ width: '50%' }}
                                            >
                                                <TimePicker
                                                    style={{ width: '100%' }}
                                                    format={format}
                                                    name={`tueFirst_${i}`}
                                                />
                                            </Form.Item>

                                            <Form.Item
                                                name={`tueSecond_${i}`}
                                                rules={[
                                                    {
                                                        required: false,
                                                        message: "Enter Name!",
                                                    },
                                                ]}
                                                style={{ marginLeft: '5px', width: '50%' }}
                                            >
                                                <TimePicker
                                                    style={{ width: '100%' }}
                                                    format={format}
                                                    name={`tueSecond_${i}`}
                                                />
                                            </Form.Item>
                                            <Button
                                                type="danger"
                                                icon={<CloseOutlined />}
                                                shape="circle"
                                                onClick={() => handleDeleteDaysAndField('TUE', i)}
                                                style={{ marginLeft: '4px', marginRight: '14px' }}
                                            />
                                        </div>
                                    ))}
                                </Col>
                                <Col span={8}>
                                    <div style={{ display: 'flex', width: '100%' }}>
                                        <Checkbox style={{ marginLeft: '10px' }}> WED</Checkbox>
                                        <Form.Item
                                            name={`wed`}
                                            rules={[
                                                {
                                                    required: false,
                                                    message: "Enter Name!",
                                                },
                                            ]}
                                            style={{ width: '60%' }}
                                        >
                                            <TimePicker
                                                style={{ width: '100%' }}
                                                name={`wed`}
                                                format={format}
                                            />
                                        </Form.Item>
                                        <Button
                                            style={{ marginLeft: "4px" }}
                                            type="secondary"
                                            icon={<PlusOutlined />}
                                            shape="circle"
                                            onClick={() => handleDaysAndField('WED')}
                                        />
                                    </div>
                                    {wedData.map((val, i) => (
                                        <div style={{ display: 'flex', width: '100%', marginLeft: '10px' }}>
                                            <Form.Item
                                                name={`wedFirst_${i}`}
                                                rules={[
                                                    {
                                                        required: false,
                                                        message: "Enter Name!",
                                                    },
                                                ]}
                                                style={{ width: '50%' }}
                                            >
                                                <TimePicker
                                                    style={{ width: '100%' }}
                                                    format={format}
                                                    name={`wedFirst_${i}`}
                                                />
                                            </Form.Item>

                                            <Form.Item
                                                name={`wedSecond_${i}`}
                                                rules={[
                                                    {
                                                        required: false,
                                                        message: "Enter Name!",
                                                    },
                                                ]}
                                                style={{ marginLeft: '5px', width: '50%' }}
                                            >
                                                <TimePicker
                                                    style={{ width: '100%' }}
                                                    format={format}
                                                    name={`wedSecond_${i}`}
                                                />
                                            </Form.Item>
                                            <Button
                                                type="danger"
                                                icon={<CloseOutlined />}
                                                shape="circle"
                                                onClick={() => handleDeleteDaysAndField('WED', i)}
                                                style={{ marginLeft: '4px', marginRight: '13px' }}
                                            />
                                        </div>
                                    ))}
                                </Col>
                            </Row>

                            <Row>
                                <Col span={8}>
                                    <div style={{ display: 'flex', width: '100%' }}>
                                        <Checkbox >THU</Checkbox>
                                        <Form.Item
                                            name={`thu`}
                                            rules={[
                                                {
                                                    required: false,
                                                    message: "Enter Name!",
                                                },
                                            ]}
                                            style={{ width: '61.5%' }}
                                        >
                                            <TimePicker
                                                style={{ width: '100%' }}
                                                format={format}
                                                name={`thu`}
                                            />
                                        </Form.Item>
                                        <Button
                                            style={{ marginLeft: "4px" }}
                                            type="secondary"
                                            icon={<PlusOutlined />}
                                            shape="circle"
                                            onClick={() => handleDaysAndField('THU')}

                                        />
                                    </div>
                                    {thuData.map((val, i) => (
                                        <div style={{ display: 'flex', width: '100%' }}>
                                            <Form.Item
                                                name={`thuFirst_${i}`}
                                                rules={[
                                                    {
                                                        required: false,
                                                        message: "Enter Name!",
                                                    },
                                                ]}
                                                style={{ width: '50%' }}
                                            >
                                                <TimePicker
                                                    style={{ width: '100%' }}
                                                    name={`thuFirst_${i}`}
                                                    format={format}
                                                />
                                            </Form.Item>

                                            <Form.Item
                                                name={`thuSecond_${i}`}
                                                rules={[
                                                    {
                                                        required: false,
                                                        message: "Enter Name!",
                                                    },
                                                ]}
                                                style={{ marginLeft: '5px', width: '50%' }}
                                            >
                                                <TimePicker
                                                    style={{ width: '100%' }}
                                                    name={`thuSecond_${i}`}
                                                    format={format}
                                                />
                                            </Form.Item>
                                            <Button
                                                type="danger"
                                                icon={<CloseOutlined />}
                                                shape="circle"
                                                onClick={() => handleDeleteDaysAndField('THU', i)}
                                                style={{ marginLeft: '4px', marginRight: '12px' }}
                                            />
                                        </div>
                                    ))}
                                </Col>
                                <Col span={8}>
                                    <div style={{ display: 'flex', width: '100%' }}>
                                        <Checkbox style={{ marginLeft: '10px' }}>FRI</Checkbox>
                                        <Form.Item
                                            name={`fri`}
                                            rules={[
                                                {
                                                    required: false,
                                                    message: "Enter Name!",
                                                },
                                            ]}
                                            style={{ width: '61.5%' }}
                                        >
                                            <TimePicker
                                                style={{ width: '100%' }}
                                                name={`fri`}
                                                format={format}
                                            />
                                        </Form.Item>
                                        <Button
                                            style={{ marginLeft: "4px" }}
                                            type="secondary"
                                            icon={<PlusOutlined />}
                                            shape="circle"
                                            onClick={() => handleDaysAndField('FRI')}
                                        />
                                    </div>
                                    {friData.map((val, i) => (
                                        <div style={{ display: 'flex', width: '100%', marginLeft: '10px' }}>
                                            <Form.Item
                                                name={`friFirst_${i}`}
                                                rules={[
                                                    {
                                                        required: false,
                                                        message: "Enter Name!",
                                                    },
                                                ]}
                                                style={{ width: '50%' }}
                                            >
                                                <TimePicker
                                                    style={{ width: '100%' }}
                                                    name={`friFirst_${i}`}
                                                    format={format}
                                                />
                                            </Form.Item>

                                            <Form.Item
                                                name={`friSecond_${i}`}
                                                rules={[
                                                    {
                                                        required: false,
                                                        message: "Enter Name!",
                                                    },
                                                ]}
                                                style={{ marginLeft: '5px', width: '50%' }}
                                            >
                                                <TimePicker
                                                    style={{ width: '100%' }}
                                                    name={`friSecond_${i}`}
                                                    format={format}
                                                />
                                            </Form.Item>
                                            <Button
                                                type="danger"
                                                icon={<CloseOutlined />}
                                                shape="circle"
                                                onClick={() => handleDeleteDaysAndField('FRI', i)}
                                                style={{ marginLeft: '4px', marginRight: '16px' }}
                                            />
                                        </div>
                                    ))}
                                </Col>
                                <Col span={8}>
                                    <div style={{ display: 'flex', width: '100%' }}>
                                        <Checkbox style={{ marginLeft: '10px' }}> SAT</Checkbox>
                                        <Form.Item
                                            name={`sat`}
                                            rules={[
                                                {
                                                    required: false,
                                                    message: "Enter Name!",
                                                },
                                            ]}
                                            style={{ width: '61.5%' }}
                                        >
                                            <TimePicker
                                                style={{ width: '100%' }}
                                                format={format}
                                                name={`sat`}
                                            />
                                        </Form.Item>
                                        <Button
                                            style={{ marginLeft: "4px" }}
                                            type="secondary"
                                            icon={<PlusOutlined />}
                                            shape="circle"
                                            onClick={() => handleDaysAndField('SAT')}
                                        />
                                    </div>
                                    {satData.map((val, i) => (
                                        <div style={{ display: 'flex', width: '100%', marginLeft: '10px' }}>
                                            <Form.Item
                                                name={`satFirst_${i}`}
                                                rules={[
                                                    {
                                                        required: false,
                                                        message: "Enter Name!",
                                                    },
                                                ]}
                                                style={{ width: '50%' }}
                                            >
                                                <TimePicker
                                                    style={{ width: '100%' }}
                                                    format={format}
                                                    name={`satFirst_${i}`}
                                                />
                                            </Form.Item>

                                            <Form.Item
                                                name={`satSecond_${i}`}
                                                rules={[
                                                    {
                                                        required: false,
                                                        message: "Enter Name!",
                                                    },
                                                ]}
                                                style={{ marginLeft: '5px', width: '50%' }}
                                            >
                                                <TimePicker
                                                    style={{ width: '100%' }}
                                                    name={`satSecond_${i}`}
                                                    format={format}
                                                />
                                            </Form.Item>
                                            <Button
                                                type="danger"
                                                icon={<CloseOutlined />}
                                                shape="circle"
                                                onClick={() => handleDeleteDaysAndField('SAT', i)}
                                                style={{ marginLeft: '4px', marginRight: '13px' }}
                                            />
                                        </div>
                                    ))}
                                </Col>
                            </Row>

                            <Row>
                                <Col span={8}>
                                    <div style={{ display: 'flex', width: '100%' }}>
                                        <Checkbox >SUN</Checkbox>
                                        <Form.Item
                                            name={`sun`}
                                            rules={[
                                                {
                                                    required: false,
                                                    message: "Enter Name!",
                                                },
                                            ]}
                                            style={{ width: '61%' }}
                                        >
                                            <TimePicker
                                                style={{ width: '100%' }}
                                                format={format}
                                                name={`sun`}
                                            />
                                        </Form.Item>
                                        <Button
                                            style={{ marginLeft: "4px" }}
                                            type="secondary"
                                            icon={<PlusOutlined />}
                                            shape="circle"
                                            onClick={() => handleDaysAndField('SUN')}

                                        />
                                    </div>
                                    {sunData.map((val, i) => (
                                        <div style={{ display: 'flex', width: '100%' }}>
                                            <Form.Item
                                                name={`sunFirst_${i}`}
                                                rules={[
                                                    {
                                                        required: false,
                                                        message: "Enter Name!",
                                                    },
                                                ]}
                                                style={{ width: '50%' }}
                                            >
                                                <TimePicker
                                                    style={{ width: '100%' }}
                                                    name={`sunFirst_${i}`}
                                                    format={format}
                                                />
                                            </Form.Item>

                                            <Form.Item
                                                name={`sunSecond_${i}`}
                                                rules={[
                                                    {
                                                        required: false,
                                                        message: "Enter Name!",
                                                    },
                                                ]}
                                                style={{ marginLeft: '5px', width: '50%' }}
                                            >
                                                <TimePicker
                                                    style={{ width: '100%' }}
                                                    name={`sunSecond_${i}`}
                                                    format={format}
                                                />
                                            </Form.Item>
                                            <Button
                                                type="danger"
                                                icon={<CloseOutlined />}
                                                shape="circle"
                                                onClick={() => handleDeleteDaysAndField('SUN', i)}
                                                style={{ marginLeft: '8px' }}
                                            />
                                        </div>
                                    ))}
                                </Col>
                            </Row>

                            <BottomButtonWrapper>
                                <Button
                                    type="danger"
                                    icon={<CloseOutlined />}
                                    shape="circle"
                                    onClick={() => handleDeleteDaysAndField('MORE_SCHEDULER', i)}
                                    style={{ marginLeft: '4px', marginRight: '8px' }}
                                />
                            </BottomButtonWrapper>
                        </Form>
                    </Box>
                ))
            }

        </div>
    )
}

export default ScheduleTab