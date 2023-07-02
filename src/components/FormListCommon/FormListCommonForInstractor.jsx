import React, { useEffect, useState } from "react";
import {
    TwoElementWrapper,
    TwoElementInnerWrapper,
} from "@iso/components/UI/Form/FormUI.style";
import { Form, Select, TimePicker, Tooltip } from "antd";
import {
    UploadOutlined,
    PlusOutlined,
    MinusCircleOutlined,
    PlusCircleOutlined,
    CloseOutlined
} from "@ant-design/icons";
import Button from "@iso/components/uielements/button";
import Checkbox, { CheckboxGroup } from "@iso/components/uielements/checkbox";

const FormListCommonForInstractor = ({ formList, formItemInputName, formInputName, formInputName1, format, formItemSelectName, typeTodel, handleDeleteDaysAndField, formType, checkBoxName, checkBoxLabel, formItemInputName1, handleDaysAndField }) => {

    return (
        <div>
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
                            style={{ marginLeft: i !== 0 && '62px' }}
                        >
                            <TimePicker
                                name={formInputName}
                                format={format}
                                style={{ width: '90%' }}
                            />
                        </Form.Item>
                        <Form.Item
                            name="mon1"
                            rules={[
                                {
                                    required: false,
                                    message: "Enter Mon!",
                                },
                            ]}
                        >
                            <TimePicker
                                name={formInputName1}
                                format={format}
                                style={{ width: '90%' }}
                            />
                        </Form.Item>
                        <Form.Item
                            name={formItemSelectName}
                            rules={[
                                {
                                    required: true,
                                    message: "Select Locations type!",
                                },
                            ]}
                        >
                            <Select
                                showSearch
                                placeholder="Select Location"
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
                                style={{ width: '170px' }}
                            />
                        </Form.Item>
                        {
                            i === 0 ? (
                                <Tooltip title="Add">
                                    <PlusCircleOutlined
                                        onClick={() => handleDaysAndField(typeTodel)}
                                        style={{ marginLeft: '20px', fontSize: "15px" }}
                                    />
                                </Tooltip>
                            ) : (
                                <Tooltip title="Remove">
                                    <MinusCircleOutlined
                                        onClick={() => handleDeleteDaysAndField(typeTodel, i)}
                                        // style={{ marginLeft: '5px' }}
                                        style={{ marginLeft: '20px', fontSize: "15px" }}
                                    />
                                </Tooltip>
                            )
                        }
                    </TwoElementWrapper>
                ))}
            {/* {
                formType === "single" ? (
                    <div style={{ display: 'flex' }}>
                        <Checkbox name={checkBoxName}>{checkBoxLabel}</Checkbox>
                        <Form.Item
                            name={formItemInputName}
                            rules={[
                                {
                                    required: false,
                                    // message: "Enter Mon!",
                                },
                            ]}
                        >
                            <TimePicker
                                name={formInputName}
                                format={format}
                                style={{ width: '90%' }}
                            />
                        </Form.Item>
                        <Form.Item
                            name={formItemInputName1}
                            rules={[
                                {
                                    required: false,
                                    // message: "Enter Mon!",
                                },
                            ]}
                        >
                            <TimePicker
                                name={formInputName1}
                                format={format}
                                style={{ width: '90%' }}
                            />
                        </Form.Item>
                        <Form.Item
                            name={formItemSelectName}
                            rules={[
                                {
                                    required: true,
                                    // message: "Select salary type!",
                                },
                            ]}
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
                                style={{ width: '170px' }}
                            />
                        </Form.Item>
                        <Tooltip title="Add">
                            <PlusCircleOutlined
                                onClick={() => handleDaysAndField(typeTodel)}
                                style={{ marginLeft: '5px', fontSize: "15px" }}
                            />
                        </Tooltip>
                    </div>
                ) : (
                    <>
                        
                    </>
                )
            } */}
            {/* <Button
                type="danger"
                icon={<CloseOutlined />}
                shape="circle"
                onClick={() => handleDeleteDaysAndField('MON', i)}
                style={{ marginLeft: '4px', marginRight: '8px' }}
            /> */}
            {/* <Form.List name={formListName}>
                {(fields, { add, remove }) => (
                    <>
                        {fields.map((field) => (
                            <TwoElementInnerWrapper key={field.key} style={{ display: "flex", alignItems: "baseline", marginTop: '-18px' }}>
                                <Form.Item
                                    name={formItemInputName}
                                    rules={[
                                        {
                                            required: false,
                                            message: "Enter Mon!",
                                        },
                                    ]}
                                    style={{ marginLeft: '75px' }}
                                >
                                    <TimePicker
                                        name={formInputName}
                                        format={format}
                                    />
                                </Form.Item>
                                <Form.Item
                                    name="mon1"
                                    rules={[
                                        {
                                            required: false,
                                            message: "Enter Mon!",
                                        },
                                    ]}
                                >
                                    <TimePicker
                                        name={formInputName1}
                                        format={format}
                                    />
                                </Form.Item>
                                <Form.Item
                                    name={formItemSelectName}
                                    rules={[
                                        {
                                            required: true,
                                            message: "Select Locations type!",
                                        },
                                    ]}
                                >
                                    <Select
                                        showSearch
                                        placeholder="Select Location"
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
                                <Tooltip title="Remove"><MinusCircleOutlined onClick={() => remove(field.name)} /></Tooltip>

                            </TwoElementInnerWrapper>

                        ))}

                        <Form.Item>
                            <Tooltip title="Add Mobile and Type"><Button
                                onClick={() => add()}
                                type="dashed"
                                icon={<PlusOutlined />}
                                shape="circle"
                            /></Tooltip>

                        </Form.Item>
                    </>
                )}
            </Form.List> */}
        </div>
    )
}

export default FormListCommonForInstractor