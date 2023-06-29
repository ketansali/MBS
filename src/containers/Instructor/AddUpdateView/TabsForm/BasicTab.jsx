import React, { useEffect, useState } from "react";
import {
    TwoElementWrapper,
    TwoElementInnerWrapper,
} from "@iso/components/UI/Form/FormUI.style";
import Input from "@iso/components/uielements/input";
import Datepicker from "@iso/components/uielements/datePicker";
import Select, { SelectOption } from "@iso/components/uielements/select";
import { Form, Radio, Upload, Checkbox } from "antd";
import Button from "@iso/components/uielements/button";

import { UploadOutlined, PlusOutlined, CloseOutlined } from '@ant-design/icons';
import { BottomButtonWrapper } from "../../../Client/Membership/Membership.style";
import moment from "moment";
import TextArea from "antd/lib/input/TextArea";
import COMMON from "../../../Constant/Common";
import { createInstructors } from "../../actions";
import { useHistory } from "react-router-dom";
import { GetAllRelation } from "../../../Masters/Relation/actions";
import { GetAllContract } from "../../../Client/actions";
import { GetAllLocation } from "../../../Masters/Location/actions";
import { GetCountry, GetCountryByState, GetStateByCity } from "../../../Masters/Country/actions";

const Option = SelectOption;
const BasicTab = () => {
    const [form] = Form.useForm();
    const [chData, setCHData] = useState([]);
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [city, setCity] = useState([]);
    const [relations, setRelations] = useState([]);
    const [contract, setContract] = useState([]);
    const [location, setLocation] = useState([]);
    const [createUserChecked, setCreateUserChecked] = useState(false);
    const history = useHistory();

    const marketing = [
        { label: "EMAIL", value: "EMAIL" },
        { label: "MAIL", value: "MAIL" },
        { label: "SMS", value: "SMS" },
        { label: "WHATSAPP", value: "WHATSAPP" },
    ];
    const onCountrySearch = (name) => {
        GetCountry(name).then((res) => {
            setCountries([]);
            setCountries(res?.responseData);
        });
    };
    const onStateSearch = (name) => {
        const { countryId } = form.getFieldValue();
        GetCountryByState(countryId, name).then((res) => {
            setStates([]);
            setStates(res?.responseData);
        });
    };
    const onCitySearch = (name) => {
        const { stateId } = form.getFieldValue();
        GetStateByCity(stateId, name).then((res) => {
            setCity([]);
            setCity(res?.responseData);
        });
    };
    const getAllRelations = (value) => {
        GetAllRelation({
            pageNo: 1,
            searchValue: value,
            length: 0,
            sortColumn: "",
            sortOrder: "",
        }).then((res) => {
            setRelations(res?.responseData.data);
        });
    };
    const getAllContracts = (value) => {
        GetAllContract({
            pageNo: 1,
            searchValue: value,
            length: 0,
            sortColumn: "",
            sortOrder: "",
        }).then((res) => {
            setContract(res?.responseData.data);
        });
    };

    const getAllLocation = (value) => {
        GetAllLocation({
            pageNo: 1,
            searchValue: value,
            length: 0,
            sortColumn: "",
            sortOrder: "",
        }).then((res) => {
            setLocation(res?.responseData.data);
        });
    };
    useEffect(() => {
        GetCountry("").then((res) => {
            setCountries(res?.responseData);
            setStates([]);
            setCity([]);
        });
        getAllRelations();
        getAllContracts();
        getAllLocation();
    }, []);

    const handleChangeCountryByState = (id) => {
        if (id) {
            GetCountryByState(id, "").then((res) => {
                form.resetFields(["state"]);
                form.resetFields(["city"]);
                setStates([]);
                setCity([]);
                setStates(res?.responseData);
            });
        }
    };
    const handleChangeStateByCity = (id) => {
        if (id) {
            GetStateByCity(id).then((res) => {
                form.resetFields(["city"]);
                setCity([]);
                setCity(res?.responseData);
            });
        }
    };

    const handleClientImage = (image) => {
        COMMON.convertToBase64(image?.file?.originFileObj, (url) => {
            form.setFieldsValue({ photo: url });
        });
    };

    const onCreateUserChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
        form.setFieldsValue({ createUser: e.target.checked });
        setCreateUserChecked(e.target.checked)
    }

    const submitBasicInfo = () => {
        form.validateFields().then(async (values) => {
            values.birthDay = moment(values.birthDay).format("YYYY-MM-DD")
            values.gender = values.gender === "male" ? true : false
            createInstructors(
                values).then((res) => {
                    console.log('res===', res);
                    history.push(`/dashboard/Instructors`);
                });

            console.log('values===', values);
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
                <TwoElementWrapper>
                    <Form.Item
                        className="elementWidth"
                    >
                        <Checkbox><span style={{ fontSize: "13px", fontWeight: "300" }}> IS SUBSTITUTE</span></Checkbox>
                    </Form.Item>
                    <Form.Item
                        className="elementWidth"
                    >
                        <Checkbox><span style={{ fontSize: "13px", fontWeight: "300" }}> BOOK ONLINE</span></Checkbox>
                    </Form.Item>
                </TwoElementWrapper>
                <TwoElementWrapper>
                    <Form.Item
                        name="firstName"
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
                        name="mobilePhone"
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
                    <div style={{ display: "flex", alignItems: "baseline" }}>
                        <h4 style={{ marginRight: "20px" }}>Gender</h4>
                        <Form.Item
                            //   label="Gender :"
                            name="gender"
                            rules={[
                                {
                                    required: false,
                                    message: "Please Select Gender!",
                                },
                            ]}
                            labelCol={{ span: 6 }}
                        >
                            <Radio.Group style={{ width: '180px' }}>
                                <Radio value="male">MALE</Radio>
                                <Radio value="female">FEMALE</Radio>
                                {/* <Radio value="nonBinary">NON BINARY</Radio> */}
                            </Radio.Group>
                        </Form.Item>
                    </div>
                    <Form.Item
                        name="birthDay"
                        rules={[
                            {
                                required: false,
                                message: "Select Birthday!",
                            },
                        ]}
                        // className="elementWidth"
                        style={{ width: '250px' }}
                    >
                        <Datepicker placeholder="Birthday" format={"YYYY/MM/DD"} />
                    </Form.Item>
                    <Form.Item
                        name="bio"
                        rules={[
                            {
                                required: true,
                                message: "Enter bio!",
                            },
                        ]}
                        className="elementWidth"
                    >
                        <TextArea placeholder="Bio" />
                    </Form.Item>
                </TwoElementWrapper>
                <TwoElementWrapper>
                    <Form.Item
                        name="countryId"
                        // label="Select Start And End Date"
                        rules={[
                            {
                                required: false,
                                message: "Select Country!",
                            },
                        ]}
                        className="elementWidth"
                    >
                        <Select
                            showSearch
                            placeholder="Select Country"
                            onChange={handleChangeCountryByState}
                            onSearch={onCountrySearch}
                            allowClear
                            filterOption={false}
                        >
                            {countries &&
                                countries.map((c) => (
                                    <Option value={c.id} key={c.id}>
                                        {c.country}
                                    </Option>
                                ))}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="stateId"
                        // label="Select Start And End Date"
                        rules={[
                            {
                                required: false,
                                message: "Select State!",
                            },
                        ]}
                        className="elementWidth"
                    >
                        <Select
                            showSearch
                            placeholder="Select State"
                            onChange={handleChangeStateByCity}
                            onSearch={onStateSearch}
                            allowClear
                            filterOption={false}
                        >
                            {states.map((e) => (
                                <Option value={e.id} key={e.id}>
                                    {e.state}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                </TwoElementWrapper>
                <TwoElementWrapper>
                    <Form.Item
                        name="address"
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
                        rules={[
                            {
                                required: true,
                                message: "Enter City!",
                            },
                        ]}
                        className="elementWidth"
                    >
                        {/* <Input placeholder="City" /> */}
                        <Select
                            showSearch
                            placeholder="Select City"
                            allowClear
                            onSearch={onCitySearch}
                            filterOption={false}
                        >
                            {city.map((e) => (
                                <Option value={e.id} key={e.id}>
                                    {e.city}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                </TwoElementWrapper>


                <TwoElementWrapper>
                    {/* <Form.Item
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
                            placeholder="Select State"
                            onChange={handleChangeStateByCity}
                            onSearch={onStateSearch}
                            allowClear
                            filterOption={false}
                        >
                            {states.map((e) => (
                                <Option value={e.id} key={e.id}>
                                    {e.state}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item> */}
                    <Form.Item
                        name="zip"
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
                        getValueFromEvent={handleClientImage}
                    >
                        <Input type="file" />
                        <span style={{ fontSize: "13px", fontWeight: "300" }} >(File Size Max 2MB, allowed formats: jpg, jpeg, png, gif)</span>
                    </Form.Item>
                    {/* <div className="elementWidth">
                        <div style={{ display: "flex", alignItems: "baseline" }}>
                            <div>
                                <h4 style={{ marginRight: "10px" }}>Photo :</h4>
                            </div>
                            <Form.Item
                                name="photo"
                                valuePropName="fileList"
                                getValueFromEvent={handleClientImage}
                                rules={[
                                    {
                                        required: false,
                                        message: "Select Photo!",
                                    },
                                ]}
                                style={{ width: "70%", marginBottom: "5px" }}
                            >
                                <Upload style={{ width: "70%" }} maxCount={1}>
                                    <Button>
                                        <UploadOutlined /> Click to Upload
                                    </Button>
                                </Upload>
                            </Form.Item>
                        </div>
                        <div style={{ fontSize: "13px", fontWeight: "300", marginBottom: '10px' }}>
                            (File Size Max 2MB, allowed formats: jpg, jpeg, png, gif)
                        </div>
                    </div> */}
                    <Form.Item
                        name="homePhone"
                        className="elementWidth"
                    >
                        <Input placeholder="Home Phone" />
                    </Form.Item>
                </TwoElementWrapper>

                <TwoElementWrapper>
                    <Form.Item name="emailSMSStatus">
                        <Checkbox><span style={{ fontSize: "13px", fontWeight: "300" }}> RECEIVE EMAIL/SMS</span></Checkbox>
                    </Form.Item>
                    <Form.Item
                        name="workPhone"
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
                        className="elementWidth"
                    >
                        <Input placeholder="User Name" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        className="elementWidth"
                    >
                        <Input placeholder="Password" />
                    </Form.Item>
                </TwoElementWrapper>


                <TwoElementWrapper>
                    <Form.Item
                        name="confirmPassword" s
                        className="elementWidth"
                    >
                        <Input placeholder="Confirm Password" />
                    </Form.Item>
                    <Form.Item
                        name="contract"
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
                            placeholder="Select Pref Location"
                            onSearch={getAllLocation}
                            allowClear
                            filterOption={false}
                        >
                            {location &&
                                location.map((e) => (
                                    <Option value={e.id} key={e.id}>
                                        {e.name}
                                    </Option>
                                ))}
                        </Select>
                    </Form.Item>
                </TwoElementWrapper>

                <TwoElementWrapper>
                    <Form.Item
                        name="status"
                    >
                        <label >Status:&nbsp;&nbsp;</label>
                        <Radio.Group>
                            <Radio value="0">ACTIVE</Radio>
                            <Radio value="1">INACTIVE</Radio>
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
                        name="createUser"
                        style={{ width: '20%' }}
                    >
                        <labe>Create User&nbsp;&nbsp;</labe>
                        <Checkbox value="createUser" onChange={onCreateUserChange}><span style={{ fontSize: "13px", fontWeight: "300" }}></span></Checkbox>
                    </Form.Item>
                    {
                        createUserChecked && (
                            <>
                                <Form.Item
                                    name="instrctorCreateUserGroup"
                                    className="elementWidth"
                                    style={{ marginRight: '12px' }}
                                >
                                    <Select
                                        showSearch
                                        placeholder="Select Group"
                                        // handleChange={handleChangeType}
                                        allowClear
                                    >
                                        <Option value="instructorGroup">Instructor Group</Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item
                                    name="instrctorCreateUserPassowrd"
                                    className="elementWidth"
                                >
                                    <Input placeholder="Password" />
                                </Form.Item>

                            </>
                        )
                    }
                </TwoElementWrapper>

                <TwoElementWrapper>
                    <Form.Item
                        name="emergencyContactName"
                        label="EMERGENCY INFORMATION"

                        className="elementWidth"
                    >
                        <Input placeholder="Name" />
                    </Form.Item>
                    <Form.Item
                        name="emergencyRelationShipId"
                        label="RelationShip"
                        className="elementWidth"
                    >
                        <Select
                            showSearch
                            placeholder="Select Relation"
                            onSearch={getAllRelations}
                            allowClear
                            filterOption={false}
                        >
                            {relations &&
                                relations.map((e) => (
                                    <Option value={e.id} key={e.id}>
                                        {e.name}
                                    </Option>
                                ))}
                        </Select>
                    </Form.Item>
                </TwoElementWrapper>

                <TwoElementWrapper>
                    <Form.Item
                        name="emergencyContactPhone"
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
            </Form >
        </>
    )
}
export default BasicTab;