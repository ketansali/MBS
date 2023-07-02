import React, { useEffect, useState } from "react";
import {
    TwoElementWrapper,
    TwoElementInnerWrapper,
} from "@iso/components/UI/Form/FormUI.style";
import { Col, Divider, Form, Modal, Row, Select, TimePicker, Tooltip } from "antd";
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

const format = 'HH:mm';
const Availablity = () => {
    const [form] = Form.useForm();
    const [modal1Open, setModal1Open] = useState(false);
    const [monData, setMonData] = useState([]);
    const [tueData, setTueData] = useState([]);
    const [wedData, setWedData] = useState([]);
    const [thuData, setThuData] = useState([]);
    const [friData, setFriData] = useState([]);
    const [satData, setSatData] = useState([]);
    const [sunData, setSunData] = useState([]);
    const [ongoingData, setOngoingData] = useState({
        onMonData: [],
        onTueData: [],
        onWedData: [],
        onThuData: [],
        onFriData: [],
        onSatData: [],
        onSunData: [],
    });
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
        } else if (instrctDay === "ONGOINGMON") {
            ongoingData.onMonData = [...ongoingData.onMonData, { contact: "", contactType: "" }]
            setOngoingData({ ...ongoingData });
        } else if (instrctDay === "ONGOINGTUE") {
            ongoingData.onTueData = [...ongoingData.onTueData, { contact: "", contactType: "" }]
            setOngoingData({ ...ongoingData });
        } else if (instrctDay === "ONGOINGWED") {
            ongoingData.onWedData = [...ongoingData.onWedData, { contact: "", contactType: "" }]
            setOngoingData({ ...ongoingData });
        } else if (instrctDay === "ONGOINGTHU") {
            ongoingData.onThuData = [...ongoingData.onThuData, { contact: "", contactType: "" }]
            setOngoingData({ ...ongoingData });
        } else if (instrctDay === "ONGOINGFRI") {
            ongoingData.onFriData = [...ongoingData.onFriData, { contact: "", contactType: "" }]
            setOngoingData({ ...ongoingData });
        } else if (instrctDay === "ONGOINGSAT") {
            ongoingData.onSatData = [...ongoingData.onSatData, { contact: "", contactType: "" }]
            setOngoingData({ ...ongoingData });
        } else if (instrctDay === "ONGOINGSUN") {
            ongoingData.onSunData = [...ongoingData.onSunData, { contact: "", contactType: "" }]
            setOngoingData({ ...ongoingData });
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
        } else if (instrctDay === "ONGOINGMON") {
            const deleteField = [...ongoingData.onMonData];
            deleteField.splice(i, 1);
            setOngoingData({ ...ongoingData, onMonData: deleteField });
        } else if (instrctDay === "ONGOINGTUE") {
            const deleteField = [...ongoingData.onTueData];
            deleteField.splice(i, 1);
            setOngoingData({ ...ongoingData, onTueData: deleteField });
        } else if (instrctDay === "ONGOINGWED") {
            const deleteField = [...ongoingData.onWedData];
            deleteField.splice(i, 1);
            setOngoingData({ ...ongoingData, onWedData: deleteField });
        } else if (instrctDay === "ONGOINGTHU") {
            const deleteField = [...ongoingData.onThuData];
            deleteField.splice(i, 1);
            setOngoingData({ ...ongoingData, onThuData: deleteField });
        } else if (instrctDay === "ONGOINGFRI") {
            const deleteField = [...ongoingData.onFriData];
            deleteField.splice(i, 1);
            setOngoingData({ ...ongoingData, onFriData: deleteField });
        } else if (instrctDay === "ONGOINGSAT") {
            const deleteField = [...ongoingData.onSatData];
            deleteField.splice(i, 1);
            setOngoingData({ ...ongoingData, onSatData: deleteField });
        } else if (instrctDay === "ONGOINGSUN") {
            const deleteField = [...ongoingData.onSunData];
            deleteField.splice(i, 1);
            setOngoingData({ ...ongoingData, onSunData: deleteField });
        }
    };

    const submitBasicInfo = () => {
        form.validateFields().then(async (values) => {
            const {
                clientMobiles
            } = form.getFieldValue();

        });
    };

    return (
        <>
            <Form
                form={form}
                name="currency"
                layout="vertical"
                scrollToFirstError
                onFinish={submitBasicInfo}
            >
                <h3 style={{ marginBottom: '-20px' }}>ONGOING</h3>
                <Divider />
                {/* for mon and tue */}
                <TwoElementWrapper>
                    <FormListCommonForInstractor
                        formType="single"
                        checkBoxName={'ON_WorkCounter1_1'}
                        checkBoxLabel={'MON'}
                        formItemInputName="ON_start_time1_1_1"
                        formInputName="ON_start_time1_1_1"
                        formItemInputName1="ON_end_time1_1_1"
                        formInputName1="ON_end_time1_1_1"
                        formItemSelectName="ON_location_id1_1_1"
                        format={format}
                        typeTodel="ONGOINGMON"
                        handleDaysAndField={handleDaysAndField}
                    />

                    <FormListCommonForInstractor
                        formType="single"
                        checkBoxName={'ON_WorkCounter1_2'}
                        checkBoxLabel={'TUE'}
                        formItemInputName="ON_start_time1_2_1"
                        formInputName="ON_start_time1_2_1"
                        formItemInputName1="ON_end_time1_2_1"
                        formInputName1="ON_end_time1_2_1"
                        formItemSelectName="ON_location_id1_2_1"
                        format={format}
                        typeTodel="ONGOINGTUE"
                        handleDaysAndField={handleDaysAndField}
                    />
                </TwoElementWrapper>

                <TwoElementWrapper>
                    <FormListCommonForInstractor
                        formList={ongoingData.onMonData}
                        formItemInputName="ON_start_time1_1_"
                        formInputName="ON_start_time1_1_"
                        formInputName1="ON_end_time1_1_"
                        formItemSelectName="ON_location_id1_1_"
                        format={format}
                        typeTodel="ONGOINGMON"
                        handleDeleteDaysAndField={handleDeleteDaysAndField}
                    />

                    <FormListCommonForInstractor
                        formList={ongoingData.onTueData}
                        formItemInputName="ON_start_time1_1_"
                        formInputName="ON_start_time1_2_"
                        formInputName1="ON_end_time1_2_"
                        formItemSelectName="ON_location_id1_2_"
                        format={format}
                        typeTodel="ONGOINGTUE"
                        handleDeleteDaysAndField={handleDeleteDaysAndField}
                    />
                </TwoElementWrapper>

                {/* for wed and thu */}
                <TwoElementWrapper>
                    <FormListCommonForInstractor
                        formType="single"
                        checkBoxName={'ON_WorkCounter1_3'}
                        checkBoxLabel={'WED'}
                        formItemInputName="ON_start_time1_3_1"
                        formInputName="ON_start_time1_3_1"
                        formItemInputName1="ON_end_time1_3_1"
                        formInputName1="ON_end_time1_3_1"
                        formItemSelectName="ON_location_id1_3_1"
                        format={format}
                        typeTodel="ONGOINGWED"
                        handleDaysAndField={handleDaysAndField}
                    />

                    <FormListCommonForInstractor
                        formType="single"
                        checkBoxName={'ON_WorkCounter1_4'}
                        checkBoxLabel={'THU'}
                        formItemInputName="ON_start_time1_4_1"
                        formInputName="ON_start_time1_4_1"
                        formItemInputName1="ON_end_time1_4_1"
                        formInputName1="ON_end_time1_4_1"
                        formItemSelectName="ON_location_id1_4_1"
                        format={format}
                        typeTodel="ONGOINGTHU"
                        handleDaysAndField={handleDaysAndField}
                    />
                </TwoElementWrapper>

                <TwoElementWrapper>
                    <FormListCommonForInstractor
                        formList={ongoingData.onWedData}
                        formItemInputName="ON_start_time1_1_"
                        formInputName="ON_start_time1_3_"
                        formInputName1="ON_end_time1_3_"
                        formItemSelectName="ON_location_id1_3_"
                        format={format}
                        typeTodel="ONGOINGWED"
                        handleDeleteDaysAndField={handleDeleteDaysAndField}
                    />

                    <FormListCommonForInstractor
                        formList={ongoingData.onThuData}
                        formItemInputName="ON_start_time1_1_"
                        formInputName="ON_start_time1_4_"
                        formInputName1="ON_end_time1_4_"
                        formItemSelectName="ON_location_id1_4_"
                        format={format}
                        typeTodel="ONGOINGTHU"
                        handleDeleteDaysAndField={handleDeleteDaysAndField}
                    />
                </TwoElementWrapper>

                {/* for fri and sat */}
                <TwoElementWrapper >
                    <FormListCommonForInstractor
                        formType="single"
                        checkBoxName={'ON_WorkCounter1_5'}
                        checkBoxLabel={'FRID'}
                        formItemInputName="ON_start_time1_5_1"
                        formInputName="ON_start_time1_5_1"
                        formItemInputName1="ON_end_time1_5_1"
                        formInputName1="ON_end_time1_5_1"
                        formItemSelectName="ON_location_id1_5_1"
                        format={format}
                        typeTodel="ONGOINGFRI"
                        handleDaysAndField={handleDaysAndField}
                    />

                    <FormListCommonForInstractor
                        formType="single"
                        checkBoxName={'ON_WorkCounter1_6'}
                        checkBoxLabel={'SAT'}
                        formItemInputName="ON_start_time1_6_1"
                        formInputName="ON_start_time1_6_1"
                        formItemInputName1="ON_end_time1_6_1"
                        formInputName1="ON_end_time1_6_1"
                        formItemSelectName="ON_location_id1_6_1"
                        format={format}
                        typeTodel="ONGOINGSAT"
                        handleDaysAndField={handleDaysAndField}
                    />
                </TwoElementWrapper>

                <TwoElementWrapper>
                    <FormListCommonForInstractor
                        formList={ongoingData.onFriData}
                        formItemInputName="ON_start_time1_1_"
                        formInputName="ON_start_time1_5_"
                        formInputName1="ON_end_time1_5_"
                        formItemSelectName="ON_location_id1_5_"
                        format={format}
                        typeTodel="ONGOINGFRI"
                        handleDeleteDaysAndField={handleDeleteDaysAndField}
                    />

                    <FormListCommonForInstractor
                        formList={ongoingData.onSatData}
                        formItemInputName="ON_start_time1_1_"
                        formInputName="ON_start_time1_6_"
                        formInputName1="ON_end_time1_6_"
                        formItemSelectName="ON_location_id1_6_"
                        format={format}
                        typeTodel="ONGOINGSAT"
                        handleDeleteDaysAndField={handleDeleteDaysAndField}
                    />
                </TwoElementWrapper>

                <TwoElementWrapper >
                    <FormListCommonForInstractor
                        formType="single"
                        checkBoxName={'ON_WorkCounter1_7'}
                        checkBoxLabel={'SUN'}
                        formItemInputName="ON_start_time1_8_1"
                        formInputName="ON_start_time1_8_1"
                        formItemInputName1="ON_end_time1_8_1"
                        formInputName1="ON_end_time1_8_1"
                        formItemSelectName="ON_location_id1_8_1"
                        format={format}
                        typeTodel="ONGOINGSUN"
                        handleDaysAndField={handleDaysAndField}
                    />
                </TwoElementWrapper>

                <TwoElementWrapper>
                    <FormListCommonForInstractor
                        formList={ongoingData.onSunData}
                        formItemInputName="ON_start_time1_1_"
                        formInputName="ON_start_time1_7_"
                        formInputName1="ON_end_time1_7_"
                        formItemSelectName="ON_location_id1_7_"
                        format={format}
                        typeTodel="ONGOINGSUN"
                        handleDeleteDaysAndField={handleDeleteDaysAndField}
                    />
                </TwoElementWrapper>
                <Divider />

                {/* for dateRenge section */}
                <h3 style={{ marginBottom: '-20px' }}>DATE RANGE
                </h3>
                <Divider />

                {/* for mon and tue */}
                <Box style={{ marginTop: '10px' }}>
                    <TwoElementWrapper>
                        <Form.Item
                            name="DR_location_id1"
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
                            name="DR_start_date1" //DR_end_date1
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
                        <DateRangFormCommon
                            formType="single"
                            checkBoxName={'DR_WorkCounter1_1'}
                            checkBoxLabel={'MON'}
                            formItemInputName="DR_start_time1_1_1"
                            formInputName="DR_start_time1_1_1"
                            formItemInputName1="DR_end_time1_1_1"
                            formInputName1="DR_end_time1_1_1"
                            format={format}
                            typeTodel="DRGOINGMON"
                            handleDaysAndField={handleDaysAndField}
                        />

                        <DateRangFormCommon
                            formType="single"
                            checkBoxName={'DR_WorkCounter1_2'}
                            checkBoxLabel={'TUE'}
                            formItemInputName="DR_start_time1_2_1"
                            formInputName="DR_start_time1_2_1"
                            formItemInputName1="DR_end_time1_2_1"
                            formInputName1="DR_end_time1_2_1"
                            format={format}
                            typeTodel="DRGOINGTUE"
                            handleDaysAndField={handleDaysAndField}
                        />
                    </TwoElementWrapper>

                    <TwoElementWrapper>
                        <DateRangFormCommon
                            formList={ongoingData.onMonData}
                            formItemInputName="ON_start_time1_1_"
                            formInputName="ON_start_time1_1_"
                            formInputName1="ON_end_time1_1_"
                            formItemSelectName="ON_location_id1_1_"
                            format={format}
                            typeTodel="DRGOINGMON"
                            handleDeleteDaysAndField={handleDeleteDaysAndField}
                            formMarginLeft={"62px"}
                        />

                        <DateRangFormCommon
                            formList={ongoingData.onTueData}
                            formItemInputName="ON_start_time1_1_"
                            formInputName="ON_start_time1_2_"
                            formInputName1="ON_end_time1_2_"
                            formItemSelectName="ON_location_id1_2_"
                            format={format}
                            typeTodel="DRGOINGTUE"
                            handleDeleteDaysAndField={handleDeleteDaysAndField}
                            formMarginLeft={"57px"}
                        />
                    </TwoElementWrapper>

                    {/* wed & thu */}
                    <TwoElementWrapper>
                        <DateRangFormCommon
                            formType="single"
                            checkBoxName={'ON_WorkCounter1_3'}
                            checkBoxLabel={'WED'}
                            formItemInputName="ON_start_time1_3_1"
                            formInputName="ON_start_time1_3_1"
                            formItemInputName1="DR_end_time1_3_1"
                            formInputName1="DR_end_time1_3_1"
                            format={format}
                            typeTodel="DRGOINGWED"
                            handleDaysAndField={handleDaysAndField}
                        />

                        <DateRangFormCommon
                            formType="single"
                            checkBoxName={'DR_WorkCounter1_4'}
                            checkBoxLabel={'THU'}
                            formItemInputName="DR_start_time1_4_1"
                            formInputName="DR_start_time1_4_1"
                            formItemInputName1="DR_end_time1_4_1"
                            formInputName1="DR_end_time1_4_1"
                            format={format}
                            typeTodel="DRGOINGTHU"
                            handleDaysAndField={handleDaysAndField}
                        />
                    </TwoElementWrapper>

                    <TwoElementWrapper>
                        <DateRangFormCommon
                            formList={ongoingData.onMonData}
                            formItemInputName="ON_start_time1_3_"
                            formInputName="ON_start_time1_3_"
                            formInputName1="ON_end_time1_3_"
                            formItemSelectName="ON_location_id1_3_"
                            format={format}
                            typeTodel="DRGOINGWED"
                            handleDeleteDaysAndField={handleDeleteDaysAndField}
                            formMarginLeft={"62px"}
                        />

                        <DateRangFormCommon
                            formList={ongoingData.onTueData}
                            formItemInputName="ON_start_time1_4_"
                            formInputName="ON_start_time1_4_"
                            formInputName1="ON_end_time1_4_"
                            formItemSelectName="ON_location_id1_4_"
                            format={format}
                            typeTodel="DRGOINGTHU"
                            handleDeleteDaysAndField={handleDeleteDaysAndField}
                            formMarginLeft={"57px"}
                        />
                    </TwoElementWrapper>

                    {/* FRID & SAT */}
                    <TwoElementWrapper>
                        <DateRangFormCommon
                            formType="single"
                            checkBoxName={'ON_WorkCounter1_5'}
                            checkBoxLabel={'FRID'}
                            formItemInputName="ON_start_time1_5_1"
                            formInputName="ON_start_time1_5_1"
                            formItemInputName1="DR_end_time1_5_1"
                            formInputName1="DR_end_time1_5_1"
                            format={format}
                            typeTodel="DRGOINGFRID"
                            handleDaysAndField={handleDaysAndField}
                        />

                        <DateRangFormCommon
                            formType="single"
                            checkBoxName={'DR_WorkCounter1_6'}
                            checkBoxLabel={'SAT'}
                            formItemInputName="DR_start_time1_6_1"
                            formInputName="DR_start_time1_6_1"
                            formItemInputName1="DR_end_time1_6_1"
                            formInputName1="DR_end_time1_6_1"
                            format={format}
                            typeTodel="DRGOINGSAT"
                            handleDaysAndField={handleDaysAndField}
                        />
                    </TwoElementWrapper>

                    <TwoElementWrapper>
                        <DateRangFormCommon
                            formList={ongoingData.onMonData}
                            formItemInputName="ON_start_time1_5_"
                            formInputName="ON_start_time1_5_"
                            formInputName1="ON_end_time1_5_"
                            formItemSelectName="ON_location_id1_5_"
                            format={format}
                            typeTodel="DRGOINGFRID"
                            handleDeleteDaysAndField={handleDeleteDaysAndField}
                            formMarginLeft={"62px"}
                        />

                        <DateRangFormCommon
                            formList={ongoingData.onTueData}
                            formItemInputName="ON_start_time1_6_"
                            formInputName="ON_start_time1_6_"
                            formInputName1="ON_end_time1_6_"
                            formItemSelectName="ON_location_id1_6_"
                            format={format}
                            typeTodel="DRGOINGSAT"
                            handleDeleteDaysAndField={handleDeleteDaysAndField}
                            formMarginLeft={"57px"}
                        />
                    </TwoElementWrapper>

                    {/* sun */}
                    <TwoElementWrapper style={{ width: '50%' }}>
                        <DateRangFormCommon
                            formType="single"
                            checkBoxName={'DR_WorkCounter1_7'}
                            checkBoxLabel={'SUN'}
                            formItemInputName="DR_start_time1_8_1"
                            formInputName="DR_start_time1_8_1"
                            formItemInputName1="DR_end_time1_8_1"
                            formInputName1="DR_end_time1_8_1"
                            format={format}
                            typeTodel="DRGOINGSUN"
                            handleDaysAndField={handleDaysAndField}
                        />
                    </TwoElementWrapper>
                    <TwoElementWrapper style={{ width: '50%' }}>
                        <DateRangFormCommon
                            formList={ongoingData.onSunData}
                            formItemInputName="DR_start_time1_1_"
                            formInputName="DR_start_time1_7_"
                            formInputName1="DR_end_time1_7_"
                            format={format}
                            typeTodel="DRGOINGSUN"
                            handleDeleteDaysAndField={handleDeleteDaysAndField}
                        />
                    </TwoElementWrapper>
                </Box>
                <Divider />

            </Form>
        </>
    )
}

export default Availablity