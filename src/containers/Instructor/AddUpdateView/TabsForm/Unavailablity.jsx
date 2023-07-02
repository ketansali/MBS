import React, { useEffect, useState } from "react";
import {
    TwoElementWrapper,
    TwoElementInnerWrapper,
} from "@iso/components/UI/Form/FormUI.style";
import { Col, DatePicker, Divider, Form, Modal, Row, Select, TimePicker, Tooltip } from "antd";
import Box from "@iso/components/utility/box";
import { useHistory, useRouteMatch } from "react-router-dom";
import moment from "moment";
import {
    UploadOutlined,
    PlusOutlined,
    PlusCircleOutlined,
    MinusCircleOutlined,
    CloseOutlined
} from "@ant-design/icons";
import Button from "@iso/components/uielements/button";
import Input from "@iso/components/uielements/input";
import Checkbox, { CheckboxGroup } from "@iso/components/uielements/checkbox";
import FormListCommonForInstractor from "../../../../components/FormListCommon/FormListCommonForInstractor";
import { DateRangepicker } from "@iso/components/uielements/datePicker";
import { BottomButtonWrapper } from "../../../Client/Membership/Membership.style";
import DateRangFormCommon from "../../../../components/FormListCommon/DateRangFormCommon";
import { Textarea } from "../../../../components/uielements/input";

const format = 'HH:mm';

const Unavailablity = () => {
    const [form] = Form.useForm();
    const initialForm = { onStartTime: "", onEndTime: "", onSelectLocation: "" }

    const [dateRangeData, setdateRangeData] = useState({
        drMonData: [initialForm],
        drTueData: [initialForm],
        drWedData: [initialForm],
        drThuData: [initialForm],
        drFriData: [initialForm],
        drSatData: [initialForm],
        drSunData: [initialForm],
    });
    const [moreSchedulerFiled, setMoreSchedulerFiled] = useState([{ contact: "", contactType: "" }]);

    const [perticulardate, setPerticulardate] = useState([
        {
            selectLocation: '',
            startDate: '',
            reason: '',
            startAndEndTime: [{ startTime: '', endTime: '' }]
        }
    ])
    // for days add
    const handleDaysAndField = (instrctDay, index) => {
        if (instrctDay === "MORE_SCHEDULER") {
            setMoreSchedulerFiled([...moreSchedulerFiled, { contact: "", contactType: "" }]);
        } else if (instrctDay === "DRMON") {
            dateRangeData.drMonData = [...dateRangeData.drMonData, { drStartTime: "", drEndTime: "" }]
            setdateRangeData({ ...dateRangeData });
        } else if (instrctDay === "DRTUE") {
            dateRangeData.drTueData = [...dateRangeData.drTueData, { drStartTime: "", drEndTime: "" }]
            setdateRangeData({ ...dateRangeData });
        } else if (instrctDay === "DRWED") {
            dateRangeData.drWedData = [...dateRangeData.drWedData, { drStartTime: "", drEndTime: "" }]
            setdateRangeData({ ...dateRangeData });
        } else if (instrctDay === "DRTHU") {
            dateRangeData.drThuData = [...dateRangeData.drThuData, { drStartTime: "", drEndTime: "" }]
            setdateRangeData({ ...dateRangeData });
        } else if (instrctDay === "DRFRID") {
            dateRangeData.drFriData = [...dateRangeData.drFriData, { drStartTime: "", drEndTime: "" }]
            setdateRangeData({ ...dateRangeData });
        } else if (instrctDay === "DRSAT") {
            dateRangeData.drSatData = [...dateRangeData.drSatData, { drStartTime: "", drEndTime: "" }]
            setdateRangeData({ ...dateRangeData });
        } else if (instrctDay === "DRSUN") {
            dateRangeData.drSunData = [...dateRangeData.drSunData, { drStartTime: "", drEndTime: "" }]
            setdateRangeData({ ...dateRangeData });
        } else if (instrctDay === 'ADDNEWPERTICULAR') {
            const tempObj = {
                selectLocation: '',
                startDate: '',
                startDate: '',
                startAndEndTime: [{ startTime: '', endTime: '' }]
            }
            setPerticulardate([...perticulardate, tempObj]);
        } else if (instrctDay === 'ADDNEWPERTICULAR_TIME') {
            perticulardate[index].startAndEndTime = [...perticulardate[index].startAndEndTime, { startTime: '', endTime: '' }]
            setPerticulardate([...perticulardate]);
        }
    };

    const handleDeleteDaysAndField = (instrctDay, i) => {
        if (instrctDay === "MORE_SCHEDULER") {
            const deleteField = [...moreSchedulerFiled];
            deleteField.splice(i, 1);
            setMoreSchedulerFiled(deleteField);
        } else if (instrctDay === "DRMON") {
            const deleteField = [...dateRangeData.drMonData];
            deleteField.splice(i, 1);
            setdateRangeData({ ...dateRangeData, drMonData: deleteField });
        } else if (instrctDay === "DRTUE") {
            const deleteField = [...dateRangeData.drTueData];
            deleteField.splice(i, 1);
            setdateRangeData({ ...dateRangeData, drTueData: deleteField });
        } else if (instrctDay === "DRWED") {
            const deleteField = [...dateRangeData.drWedData];
            deleteField.splice(i, 1);
            setdateRangeData({ ...dateRangeData, drWedData: deleteField });
        } else if (instrctDay === "DRTHU") {
            const deleteField = [...dateRangeData.drThuData];
            deleteField.splice(i, 1);
            setdateRangeData({ ...dateRangeData, drThuData: deleteField });
        } else if (instrctDay === "DRFRID") {
            const deleteField = [...dateRangeData.drFriData];
            deleteField.splice(i, 1);
            setdateRangeData({ ...dateRangeData, drFriData: deleteField });
        } else if (instrctDay === "DRSAT") {
            const deleteField = [...dateRangeData.drSatData];
            deleteField.splice(i, 1);
            setdateRangeData({ ...dateRangeData, drSatData: deleteField });
        } else if (instrctDay === "DRSUN") {
            const deleteField = [...dateRangeData.drSunData];
            deleteField.splice(i, 1);
            setdateRangeData({ ...dateRangeData, drSunData: deleteField });
        } else if (instrctDay === "ADDNEWPERTICULAR") {
            const deleteField = perticulardate.filter((item, indx) => indx !== i);
            setPerticulardate(deleteField);
        } else if (instrctDay === "ADDNEWPERTICULAR_TIME") {
            const deleteField = perticulardate[i].startAndEndTime.filter((item, indx) => indx !== i);
            perticulardate[i].startAndEndTime = deleteField
            setPerticulardate([...perticulardate]);
        }
    };

    const onDateChange = (date, dateString) => {
        console.log(date, dateString);
    };

    const submitBasicInfo = () => {
        form.validateFields().then(async (values) => {
            const {
                clientMobiles
            } = form.getFieldValue();

        });
    };

    return (
        <Form
            form={form}
            name="currency"
            layout="vertical"
            scrollToFirstError
            onFinish={submitBasicInfo}
        >
            {/* for dateRenge section */}
            <h3 style={{ marginBottom: '-20px' }}>DATE RANGE
            </h3>
            <Divider />
            {/* logic with morescheduler array*/}
            {
                moreSchedulerFiled.map((item, index) => (
                    <Box style={{ marginTop: '10px' }}>
                        <TwoElementWrapper>
                            <Form.Item
                                name={`DR_location_id1_${index}`}
                                rules={[
                                    {
                                        required: true,
                                        message: "Select salary type!",
                                    },
                                ]}
                                className="elementWidth"
                                style={{ marginLeft: '10px' }}
                            >
                                <Select
                                    showSearch
                                    placeholder="Select Location Type"
                                    optionFilterProp="children"
                                    // onChange={onChange}
                                    // onSearch={onSearch}
                                    filterOption={(input, option) =>
                                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                    }
                                    options={[
                                        {
                                            value: 'salect',
                                            label: 'Select Salary Type',
                                        },
                                        {
                                            value: 'perClass',
                                            label: 'Per Class',
                                        },
                                    ]}
                                />
                            </Form.Item>
                            <Form.Item
                                name={`DR_start_date1_${index}`} //DR_end_date1
                                rules={[
                                    {
                                        required: true,
                                        message: "Select Start And End Date!",
                                    },
                                ]}
                                // className="elementWidth"
                                style={{ width: '50%', marginLeft: '10px' }}
                            >
                                <DateRangepicker />
                            </Form.Item>
                            <Form.Item
                                name={`reason`}
                                rules={[
                                    {
                                        required: true,
                                        message: "Enter reason!",
                                    },
                                ]}
                                // className="elementWidth"
                                style={{ width: '50%', marginLeft: '10px' }}
                            >
                                <Textarea name="reason" placeholder='Reason' />
                            </Form.Item>
                        </TwoElementWrapper>

                        <TwoElementWrapper>
                            <DateRangFormCommon
                                checkBoxLabel={'MON'}
                                formList={dateRangeData.drMonData}
                                formItemInputName={`ON_start_time1_1_${index}`}
                                formInputName={`ON_start_time1_1_${index}`}
                                formInputName1={`ON_end_time1_1_${index}`}
                                format={format}
                                typeTodel="DRMON"
                                handleDaysAndField={handleDaysAndField}
                                handleDeleteDaysAndField={handleDeleteDaysAndField}
                                formMarginLeft={"62px"}
                            />

                            <DateRangFormCommon
                                checkBoxLabel={'TUE'}
                                formList={dateRangeData.drTueData}
                                formItemInputName={`ON_start_time1_1_${index}`}
                                formInputName={`ON_start_time1_2_${index}`}
                                formInputName1={`ON_end_time1_2_${index}`}
                                format={format}
                                typeTodel="DRTUE"
                                handleDaysAndField={handleDaysAndField}
                                handleDeleteDaysAndField={handleDeleteDaysAndField}
                                formMarginLeft={"57px"}
                            />
                        </TwoElementWrapper>

                        {/* wed & thu */}
                        <TwoElementWrapper>
                            <DateRangFormCommon
                                checkBoxLabel={'WED'}
                                formList={dateRangeData.drWedData}
                                formItemInputName="ON_start_time1_3_"
                                formInputName="ON_start_time1_3_"
                                formInputName1="ON_end_time1_3_"
                                formItemSelectName="ON_location_id1_3_"
                                format={format}
                                typeTodel="DRWED"
                                handleDaysAndField={handleDaysAndField}
                                handleDeleteDaysAndField={handleDeleteDaysAndField}
                                formMarginLeft={"62px"}
                            />

                            <DateRangFormCommon
                                checkBoxLabel={'THU'}
                                formList={dateRangeData.drThuData}
                                formItemInputName="ON_start_time1_4_"
                                formInputName="ON_start_time1_4_"
                                formInputName1="ON_end_time1_4_"
                                formItemSelectName="ON_location_id1_4_"
                                format={format}
                                typeTodel="DRTHU"
                                handleDaysAndField={handleDaysAndField}
                                handleDeleteDaysAndField={handleDeleteDaysAndField}
                                formMarginLeft={"57px"}
                            />
                        </TwoElementWrapper>

                        {/* FRID & SAT */}
                        <TwoElementWrapper>
                            <DateRangFormCommon
                                checkBoxLabel={'FRID'}
                                formList={dateRangeData.drFriData}
                                formItemInputName="ON_start_time1_5_"
                                formInputName="ON_start_time1_5_"
                                formInputName1="ON_end_time1_5_"
                                formItemSelectName="ON_location_id1_5_"
                                format={format}
                                typeTodel="DRFRID"
                                handleDaysAndField={handleDaysAndField}
                                handleDeleteDaysAndField={handleDeleteDaysAndField}
                                formMarginLeft={"62px"}
                            />

                            <DateRangFormCommon
                                checkBoxLabel={'SAT'}
                                formList={dateRangeData.drSatData}
                                formItemInputName="ON_start_time1_6_"
                                formInputName="ON_start_time1_6_"
                                formInputName1="ON_end_time1_6_"
                                formItemSelectName="ON_location_id1_6_"
                                format={format}
                                typeTodel="DRSAT"
                                handleDaysAndField={handleDaysAndField}
                                handleDeleteDaysAndField={handleDeleteDaysAndField}
                                formMarginLeft={"57px"}
                            />
                        </TwoElementWrapper>

                        {/* sun */}
                        <TwoElementWrapper style={{ width: '50%' }}>
                            <DateRangFormCommon
                                checkBoxLabel={'SUN'}
                                formList={dateRangeData.drSunData}
                                formItemInputName="DR_start_time1_1_"
                                formInputName="DR_start_time1_7_"
                                formInputName1="DR_end_time1_7_"
                                format={format}
                                typeTodel="DRSUN"
                                handleDaysAndField={handleDaysAndField}
                                handleDeleteDaysAndField={handleDeleteDaysAndField}
                                formMarginLeft={'58px'}
                            />
                        </TwoElementWrapper>

                        {
                            index === 0 ? (
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
                            ) : (
                                <BottomButtonWrapper>
                                    <Button
                                        type="danger"
                                        icon={<CloseOutlined />}
                                        shape="circle"
                                        onClick={() => handleDeleteDaysAndField('MORE_SCHEDULER', index)}
                                        style={{ marginLeft: '4px', marginRight: '8px' }}
                                    />
                                </BottomButtonWrapper>
                            )
                        }
                    </Box>
                ))
            }
            <Divider />

            {/* for PARTICULAR DATE section */}
            <h3>
                PARTICULAR DATE
            </h3>
            {
                perticulardate?.map((item, i) => (
                    <Box key={i} style={{ marginTop: '10px' }}>
                        <TwoElementWrapper style={{ justifyContent: 'start' }}>
                            {
                                i === 0 ? (
                                    <Button type="secondary"
                                        icon={<PlusOutlined />}
                                        style={{ borderRadius: '18px' }}
                                        onClick={() => handleDaysAndField('ADDNEWPERTICULAR')}
                                    >
                                        <span>Add New</span>
                                    </Button>
                                ) : (
                                    <Button
                                        type="danger"
                                        icon={<CloseOutlined />}
                                        // shape="circle"
                                        onClick={() => handleDeleteDaysAndField('ADDNEWPERTICULAR', i)}
                                        style={{ borderRadius: '18px' }}
                                    >
                                        <span>Remove</span>
                                    </Button>
                                )
                            }

                            <Form.Item
                                name={`DR_location_id1_${'index'}`}
                                rules={[
                                    {
                                        required: true,
                                        message: "Select salary type!",
                                    },
                                ]}
                                style={{ marginLeft: '50px' }}
                            >
                                <Select
                                    showSearch
                                    placeholder="Select Location Type"
                                    optionFilterProp="children"
                                    // onChange={onChange}
                                    // onSearch={onSearch}
                                    filterOption={(input, option) =>
                                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                    }
                                    options={[
                                        {
                                            value: 'salect',
                                            label: 'Select Salary Type',
                                        },
                                        {
                                            value: 'perClass',
                                            label: 'Per Class',
                                        },
                                    ]}
                                />
                            </Form.Item>
                            <Form.Item
                                name={`DR_start_date1_${'index'}`} //DR_end_date1
                                rules={[
                                    {
                                        required: true,
                                        message: "Select Start And End Date!",
                                    },
                                ]}
                                style={{ width: 'auto', marginLeft: '50px' }}
                            >
                                <DatePicker onChange={onDateChange} />
                            </Form.Item>
                            <Form.Item
                                name={`reason`}
                                rules={[
                                    {
                                        required: true,
                                        message: "Enter reason!",
                                    },
                                ]}
                                // className="elementWidth"
                                style={{ width: '150px', marginLeft: '10px' }}
                            >
                                <Textarea name="reason" placeholder='Reason' />
                            </Form.Item>
                            <div>
                                {
                                    perticulardate[i].startAndEndTime?.map((itemTiem, indexTime) => (
                                        <TwoElementWrapper key={indexTime}>
                                            <Form.Item
                                                name={'formItemInputName'}
                                                rules={[
                                                    {
                                                        required: false,
                                                        message: "Enter Mon!",
                                                    },
                                                ]}
                                                style={{ width: '100%', marginLeft: '60px' }}
                                            >
                                                <TimePicker
                                                    name={'formInputName'}
                                                    format={format}
                                                    style={{ width: '100%' }}
                                                />
                                            </Form.Item>
                                            <Form.Item
                                                name={'formItemInputName1'}
                                                rules={[
                                                    {
                                                        required: false,
                                                        message: "Enter Mon!",
                                                    },
                                                ]}
                                                style={{ width: '100%', marginLeft: '50px' }}
                                            >
                                                <TimePicker
                                                    name={'formInputName1'}
                                                    format={format}
                                                    style={{ width: '100%' }}
                                                />
                                            </Form.Item>
                                            {
                                                indexTime === 0 ? (
                                                    <Tooltip title="Add">
                                                        <PlusCircleOutlined
                                                            onClick={() => handleDaysAndField('ADDNEWPERTICULAR_TIME', i)} style={{ marginLeft: '20px', fontSize: "15px" }}
                                                        />
                                                    </Tooltip>
                                                ) : (
                                                    <Tooltip title="Remove">
                                                        <MinusCircleOutlined
                                                            onClick={() => handleDeleteDaysAndField('ADDNEWPERTICULAR_TIME', i)}
                                                            style={{ marginLeft: '20px', fontSize: "15px" }}
                                                        />
                                                    </Tooltip>
                                                )
                                            }
                                        </TwoElementWrapper>
                                    ))
                                }
                            </div>
                        </TwoElementWrapper>

                    </Box>
                ))
            }
        </Form>
    )
}

export default Unavailablity