import React, { useEffect, useState } from "react";
import {
  TwoElementWrapper,
  TwoElementInnerWrapper,
} from "@iso/components/UI/Form/FormUI.style";
import { BottomButtonWrapper } from "../../Membership/Membership.style";
import Button from "@iso/components/uielements/button";
import Input from "@iso/components/uielements/input";
import Datepicker from "@iso/components/uielements/datePicker";
import Select, { SelectOption } from "@iso/components/uielements/select";
import { Form, Radio, Upload } from "antd";
import Checkbox, { CheckboxGroup } from "@iso/components/uielements/checkbox";
import InputNumber from "@iso/components/uielements/InputNumber";
import "./Styles/BasicInfo.css";
import { UploadOutlined, PlusOutlined, CloseOutlined } from "@ant-design/icons";
import {
  GetCountry,
  GetCountryByState,
  GetStateByCity,
} from "../../../Masters/Country/actions";
import moment from "moment";
import { CreateClient, GetAllContract } from "../../actions";
import { GetAllRelation } from "../../../Masters/Relation/actions";
import { GetAllLocation } from "../../../Masters/Location/actions";
import { COMMON } from "../../../Constant/Index";
import { useHistory, useRouteMatch } from "react-router-dom";
const Option = SelectOption;
const BasicInfoTab = () => {
  const [form] = Form.useForm();
  const history = useHistory();
  const match = useRouteMatch();
  const [chData, setCHData] = useState([]);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [city, setCity] = useState([]);
  const [relations, setRelations] = useState([]);
  const [contract, setContract] = useState([]);
  const [location, setLocation] = useState([]);
  const [isVaccinated, setIsVaccinated] = useState(false);

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
    const { country } = form.getFieldValue();
    GetCountryByState(country, name).then((res) => {
      setStates([]);
      setStates(res?.responseData);
    });
  };
  const onCitySearch = (name) => {
    const { state } = form.getFieldValue();
    GetStateByCity(state, name).then((res) => {
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
    COMMON.convertToBase64(image.file.originFileObj, (url) => {
      form.setFieldsValue({ studentPhoto: url });
    });
  };
  const handleVaccinatedImage = (image) => {
    COMMON.convertToBase64(image.file.originFileObj, (url) => {
      form.setFieldsValue({ proofCovidVaccinated: url });
    });
  };
  const onChangeMarketing = (marketingPreference) => {
    if (marketingPreference.includes("EMAIL")) {
      form.setFieldsValue({ marketingEmail: true });
    } else {
      form.setFieldsValue({ marketingEmail: false });
    }
    if (marketingPreference.includes("MAIL")) {
      form.setFieldsValue({ marketingMail: true });
    } else {
      form.setFieldsValue({ marketingMail: false });
    }
    if (marketingPreference.includes("SMS")) {
      form.setFieldsValue({ marketingSMS: true });
    } else {
      form.setFieldsValue({ marketingSMS: false });
    }
    if (marketingPreference.includes("WHATSAPP")) {
      form.setFieldsValue({ marketingWhatsapp: true });
    } else {
      form.setFieldsValue({ marketingWhatsapp: false });
    }
  };
  const submitBasicInfo = () => {
    form.validateFields().then(async (values) => {
      const {
        firstName,
        lastName,
        birthDay,
        address,
        countryId,
        stateId,
        cityId,
        zip,
        email,
        phone,
        refferedBy,
        isApplicant18,
        status,
        isCovidvaccinated,
        gender,
        sendTxtMsg,
        emergencyPhone,
        emergencyRelationId,
        emergencyName,
        studentPhoto,
        proofCovidVaccinated,
        marketingEmail,
        marketingMail,
        marketingSMS,
        marketingWhatsapp,
        locationId,
        SubscribeNow,
        ContactId,
      } = form.getFieldValue();

      CreateClient({
        firstName,
        lastName,
        birthDay: moment(birthDay).format("YYYY-MM-DD"),
        address,
        countryId,
        stateId,
        cityId,
        zip,
        email,
        phone,
        refferedBy,
        isApplicant18,
        status,
        isCovidvaccinated,
        gender,
        sendTxtMsg,
        emergencyPhone,
        emergencyRelationId,
        emergencyName,
        studentPhoto,
        proofCovidVaccinated,
        marketingEmail,
        marketingMail,
        marketingSMS,
        marketingWhatsapp,
        locationId,
        SubscribeNow,
        ContactId,
      }).then(() => {
        history.push(`/dashboard/client`);
      });
    });
  };
  const handleIsVaccinated = (e) => {
    setIsVaccinated(e.target.checked);
  };
  return (
    <Form
      form={form}
      name="currency"
      layout="vertical"
      scrollToFirstError
      onFinish={submitBasicInfo}
    >
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
        <div style={{ display: "flex", alignItems: "baseline" }}>
          <h4 style={{ marginRight: "20px" }}>Gender :</h4>
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
            <Radio.Group>
              <Radio value="male">MALE</Radio>
              <Radio value="female">FEMALE</Radio>
              <Radio value="nonBinary">NON BINARY</Radio>
            </Radio.Group>
          </Form.Item>
        </div>
        <Form.Item
          name="birthDay"
          // label="Select Class Series / Membership"
          rules={[
            {
              required: false,
              message: "Select Birthday!",
            },
          ]}
          className="elementWidth"
        >
          <Datepicker placeholder="Birthday" format={"YYYY/MM/DD"} />
        </Form.Item>
      </TwoElementWrapper>

      <TwoElementWrapper>
        <Form.Item
          name="address"
          // label="Select Class Series / Membership"
          rules={[
            {
              required: false,
              message: "Enter Address!",
            },
          ]}
          className="elementWidth"
        >
          <Input placeholder="Address" />
        </Form.Item>

        <div className="elementWidth">
          <TwoElementInnerWrapper>
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
          </TwoElementInnerWrapper>
        </div>
      </TwoElementWrapper>

      <TwoElementWrapper>
        <div className="elementWidth">
          <TwoElementInnerWrapper>
            <Form.Item
              name="cityId"
              // label="Select Class Series / Membership"
              rules={[
                {
                  required: false,
                  message: "Select city!",
                },
              ]}
              className="elementWidth"
            >
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
            <Form.Item
              name="zip"
              // label="Select Class Series / Membership"
              rules={[
                {
                  required: false,
                  message: "ZIP!",
                },
              ]}
              className="elementWidth"
            >
              <Input placeholder="Zip" />
            </Form.Item>
          </TwoElementInnerWrapper>
        </div>
        <Form.Item
          name="email"
          // label="Select Start And End Date"
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
      </TwoElementWrapper>

      <TwoElementWrapper>
        <Form.Item
          name="phone"
          // label="Select Start And End Date"
          rules={[
            {
              required: true,
              message: "Enter Phone!",
            },
          ]}
          className="elementWidth"
        >
          <Input placeholder="Phone" />
        </Form.Item>
        <div className="elementWidth">
          <TwoElementInnerWrapper>
            <Form.Item
              name="contact"
              // label="Select Class Series / Membership"
              rules={[
                {
                  required: false,
                  message: "Enter Mobile!",
                },
              ]}
              className="clsMobileElement"
            >
              <InputNumber placeholder="Mobile" />
            </Form.Item>
            <Button
              style={{ marginLeft: "10px" }}
              type="primary"
              icon={<PlusOutlined />}
              shape="circle"
              onClick={handleMobileAndTypeField}
            />
            <Form.Item
              name="sendTxtMsg"
              // label="TEXT ME"
              valuePropName="checked"
              rules={[
                {
                  required: false,
                  message: "Text Me!",
                },
              ]}
              className="elementWidth"
            >
              <Checkbox className="clsTextMe">
                <h4>TEXT ME</h4>
              </Checkbox>
            </Form.Item>
          </TwoElementInnerWrapper>
        </div>
      </TwoElementWrapper>
      {chData.map((val, i) => (
        <TwoElementWrapper key={i}>
          <div className="elementWidth"></div>
          <div className="elementWidth">
            <TwoElementInnerWrapper>
              <Form.Item
                name="econtact"
                // label="Select Class Series / Membership"
                rules={[
                  {
                    required: false,
                    message: "Enter Mobile!",
                  },
                ]}
                className="clsEcontact"
              >
                <InputNumber placeholder="Mobile" />
              </Form.Item>
              <Form.Item
                name="Mobile Type"
                // label="Type"
                rules={[
                  {
                    required: false,
                    message: "Select Type!",
                  },
                ]}
                style={{ width: "30%" }}
              >
                <Select
                  showSearch
                  placeholder="Select Type"
                  // handleChange={handleChangeType}
                  allowClear
                >
                  <Option value="Home">Home</Option>
                  <Option value="Office">Office</Option>
                  <Option value="Mobile">Mobile</Option>
                  <Option value="Fax">Fax</Option>
                </Select>
              </Form.Item>
              <Button
                type="danger"
                icon={<CloseOutlined />}
                shape="circle"
                onClick={() => handleDeleteMobileAndTypeField(i)}
              />
            </TwoElementInnerWrapper>
          </div>
        </TwoElementWrapper>
      ))}
      <TwoElementWrapper>
        <Form.Item
          name="refferedBy"
          // label="Select Start And End Date"
          rules={[
            {
              required: false,
              message: "Enter Referred By!",
            },
          ]}
          className="elementWidth"
        >
          <Input placeholder="Referred By" />
        </Form.Item>
        <Form.Item
          name="locationId"
          // label="Pref Location"
          rules={[
            {
              required: false,
              message: "Select Pref Location!",
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
      <TwoElementWrapper style={{ marginBottom: "24px" }}>
        <div className="elementWidth">
          <div style={{ display: "flex", alignItems: "baseline" }}>
            <div>
              <h4 style={{ marginRight: "10px" }}>Photo :</h4>
            </div>
            <Form.Item
              name="studentImage"
              // label="Photo"
              valuePropName="fileList"
              getValueFromEvent={handleClientImage}
              rules={[
                {
                  required: false,
                  message: "Select Student Image!",
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
          <div style={{ fontSize: "13px", fontWeight: "300" }}>
            (File Size Max 2MB, allowed formats: jpg, jpeg, png, gif)
          </div>
        </div>
        <div className="elementWidth">
          <Form.Item
            name="ContactId"
            // label="Contract"
            rules={[
              {
                required: false,
                message: "Select Contract!",
              },
            ]}
            style={{ width: "100%", marginBottom: "5px" }}
          >
            <Select
              showSearch
              placeholder="Select Contract"
              onSearch={getAllContracts}
              allowClear
              filterOption={false}
            >
              {contract &&
                contract.map((e) => (
                  <Option value={e.id} key={e.id}>
                    {e.contractName}
                  </Option>
                ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="ContractAgree"
            // label="Contract"
            valuePropName="checked"
            rules={[
              {
                required: false,
                message: "Please Agree Term and condition!",
              },
            ]}
            style={{ width: "100%", marginBottom: "5px" }}
          >
            <Checkbox>
              <span style={{ fontSize: "13px", fontWeight: "300" }}>
                {" "}
                I agree to all the terms and conditions
              </span>
            </Checkbox>
          </Form.Item>
        </div>
      </TwoElementWrapper>
      <TwoElementWrapper>
        <div className="elementWidth">
          <Form.Item
            name="SubscribeNow"
            // label="CLIENT NOTIFICATION"
            valuePropName="checked"
            rules={[
              {
                required: false,
                message: "Select CLIENT NOTIFICATION!",
              },
            ]}
            style={{ marginBottom: "2px" }}
          >
            <Checkbox>
              <h4>CLIENT NOTIFICATION</h4>
            </Checkbox>
          </Form.Item>
          <div>
            <span
              style={{
                fontSize: "13px",
                fontWeight: "300",
                marginLeft: "25px",
              }}
            >
              Select this option to enable email and text.
            </span>
          </div>
        </div>

        <div className="elementWidth">
          <TwoElementInnerWrapper>
            <Form.Item
              name="isCovidvaccinated"
              // label="Select Class Series / Membership"
              valuePropName="checked"
              onChange={handleIsVaccinated}
              rules={[
                {
                  required: false,
                  message: "Check Is Vaccinated!",
                },
              ]}
              className="elementWidth"
            >
              <Checkbox>
                <h4>Is Vaccinated</h4>
              </Checkbox>
            </Form.Item>
            {isVaccinated && (
              <div
                className="elementWidth"
                style={{ display: "flex", alignItems: "baseline" }}
              >
                <div style={{ marginLeft: "10px", paddingRight: "10px" }}>
                  <h4>Proof :</h4>{" "}
                </div>
                <Form.Item
                  name="proofVaccinated"
                  // label="Select Vaccinated Proof"
                  valuePropName="fileList"
                  getValueFromEvent={handleVaccinatedImage}
                  rules={[
                    {
                      required: false,
                      message: "Select Vaccinated Proof!",
                    },
                  ]}
                  className="elementWidth"
                >
                  <Upload>
                    <Button>
                      <UploadOutlined maxCount={1} /> Click to Upload
                    </Button>
                  </Upload>
                </Form.Item>
              </div>
            )}
          </TwoElementInnerWrapper>
        </div>
      </TwoElementWrapper>
      <TwoElementWrapper>
        <Form.Item
          name="isApplicant18"
          // label="isApplicant18"
          valuePropName="checked"
          rules={[
            {
              required: false,
              message: "CHECK CLIENT IS UNDER 18 YEARS OLD!",
            },
          ]}
          className="elementWidth"
        >
          <Checkbox>
            <h4>CLIENT IS UNDER 18 YEARS OLD</h4>
          </Checkbox>
        </Form.Item>
        <div
          style={{ display: "flex", alignItems: "baseline" }}
          className="elementWidth"
        >
          <h4 style={{ marginRight: "20px" }}>Status :</h4>
          <Form.Item
            //   label="Gender :"
            name="status"
            rules={[
              {
                required: false,
                message: "Please Select Status!",
              },
            ]}
            style={{ width: "70%" }}
          >
            <Radio.Group>
              <Radio value={true}>ACTIVE</Radio>
              <Radio value={false}>INACTIVE</Radio>
            </Radio.Group>
          </Form.Item>
        </div>
      </TwoElementWrapper>
      <TwoElementWrapper>
        <Form.Item
          name="marketingPreference"
          label={<h4>MARKETING PREFERENCE</h4>}
          valuePropName="checked"
          rules={[
            {
              required: false,
              message: "MARKETING PREFERENCE!",
            },
          ]}
          className="elementWidth"
        >
          <CheckboxGroup options={marketing} onChange={onChangeMarketing} />
        </Form.Item>
      </TwoElementWrapper>
      <TwoElementWrapper>
        <Form.Item
          name="emergencyName"
          label="EMERGENCY CONTACT"
          rules={[
            {
              required: false,
              message: "Enter Name!",
            },
          ]}
          className="elementWidth"
        >
          <Input placeholder="Name" />
        </Form.Item>
        <Form.Item
          name="emergencyRelationId"
          label="                    "
          rules={[
            {
              required: false,
              message: "Select Relation!",
            },
          ]}
          className="elementWidth"
        >
          <Select
            showSearch
            // defaultValue="Cancelation Policy"
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
          name="emergencyPhone"
          // label=""
          rules={[
            {
              required: false,
              message: "Enter Phone!",
            },
          ]}
          className="elementWidth"
        >
          <Input placeholder="Phone" />
        </Form.Item>
      </TwoElementWrapper>
      <BottomButtonWrapper>
        <Button>
          <span>Cancel</span>
        </Button>

        <Button type="primary" className="saveBtn" htmlType="submit">
          <span>Save</span>
        </Button>
      </BottomButtonWrapper>
    </Form>
  );
};

export default BasicInfoTab;
