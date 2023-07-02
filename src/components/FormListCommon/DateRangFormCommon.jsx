import React, { useEffect, useState } from "react";
import {
    TwoElementWrapper,
} from "@iso/components/UI/Form/FormUI.style";
import { Form, Select, TimePicker, Tooltip } from "antd";
import {
    MinusCircleOutlined,
    PlusCircleOutlined,
} from "@ant-design/icons";
import Button from "@iso/components/uielements/button";
import Checkbox, { CheckboxGroup } from "@iso/components/uielements/checkbox";

const DateRangFormCommon = ({ formList, formItemInputName, formInputName, formInputName1, format, formItemSelectName, typeTodel, handleDeleteDaysAndField, formType, checkBoxName, checkBoxLabel, formItemInputName1, handleDaysAndField, formMarginLeft }) => {
    return (
        <div style={{ width: '100%' }}>
            {
                formList.map((val, i) => (
                    <TwoElementWrapper key={i} style={{ display: "flex", alignItems: "baseline", marginTop: '-18px' }}>
                        {
                            i === 0 && (
                                <Checkbox name={checkBoxName}>{checkBoxLabel}</Checkbox>
                            )
                        }
                        <Form.Item
                            name={formItemInputName}
                            rules={[
                                {
                                    required: false,
                                    message: "Enter Mon!",
                                },
                            ]}
                            // className="elementWidth"
                            style={{ marginLeft: i !== 0 && formMarginLeft, width: '83%' }}
                        >
                            <TimePicker
                                name={formInputName}
                                format={format}
                                style={{ width: '83%' }}
                            />
                        </Form.Item>
                        <Form.Item
                            name={formItemInputName1}
                            rules={[
                                {
                                    required: false,
                                    message: "Enter Mon!",
                                },
                            ]}
                            // className="elementWidth"
                            style={{ width: '83%' }}
                        >
                            <TimePicker
                                name={formInputName1}
                                format={format}
                                style={{ width: '83%' }}
                            />
                        </Form.Item>
                        {
                            i === 0 ? (
                                <Tooltip title="Add">
                                    <PlusCircleOutlined
                                        onClick={() => handleDaysAndField(typeTodel)}
                                        style={{ marginRight: '40px', fontSize: "15px" }}
                                    />
                                </Tooltip>
                            ) : (
                                <Tooltip title="Remove">
                                    <MinusCircleOutlined
                                        onClick={() => handleDeleteDaysAndField(typeTodel, i)}
                                        // style={{ marginLeft: '5px' }}
                                        style={{ marginRight: '40px', fontSize: "15px" }}
                                    />
                                </Tooltip>
                            )
                        }
                    </TwoElementWrapper>
                ))}
        </div>
    )
}

export default DateRangFormCommon