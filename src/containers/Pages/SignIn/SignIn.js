import React, { useState } from "react";
import { Link, Redirect, useHistory, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Checkbox from "@iso/components/uielements/checkbox";
import Button from "@iso/components/uielements/button";
import IntlMessages from "@iso/components/utility/intlMessages";
import authAction from "@iso/redux/auth/actions";
import appAction from "@iso/redux/app/actions";
import axios from "../../../config/axios/axios";
import notification from "@iso/components/Notification";
import SignInStyleWrapper from "./SignIn.styles";
import { Form, Input,Spin } from "antd";
const { login } = authAction;
const { clearMenu } = appAction;

export default function SignIn() {
  let history = useHistory();
  let location = useLocation();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.Auth.idToken);
  const [form] = Form.useForm();
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);
  const [loading, setLoading] = useState(false);
  React.useEffect(() => {
    if (isLoggedIn) {
      setRedirectToReferrer(true);
    }
  }, [isLoggedIn]);
  const handleLogin = (e, token = false) => {
    setLoading(true)
    form
      .validateFields()
      .then(async (values) => {
        axios.post("/User/Login", values).then((res) => {
          if (!res.data.isSuccess) {
            notification("error", res.data.message);
          } else {
            dispatch(login(res.data.responseData));
            dispatch(clearMenu());
            history.push("/dashboard");
            setLoading(false)
            notification("success", res.data.message);
          }
        });
      })
      .catch((error) => {
        console.log("Form validation error:", error);
      });
  };
  let { from } = location.state || { from: { pathname: "/dashboard" } };

  if (redirectToReferrer) {
    return <Redirect to={from} />;
  }
  return (
    <Spin spinning={loading}>
      <SignInStyleWrapper className="isoSignInPage">
      <div className="isoLoginContentWrapper">
        <div className="isoLoginContent">
          <div className="isoLogoWrapper">
            <Link to="/dashboard">
              <IntlMessages id="page.signInTitle" />
            </Link>
          </div>
          <div className="isoSignInForm">
            <Form
              form={form}
              name="signin"
              layout="vertical"
              scrollToFirstError
              onFinish={handleLogin}
            >
              <Form.Item
                name="email"
                label="Email"
                placeholder="Enter Email"
                rules={[
                  {
                    required: true,
                    message: "Enter Email!",
                  },
                ]}
              >
                <div className="isoInputWrapper">
                  <Input
                    size="large"
                    placeholder="Email"
                    autoComplete="true"
                    name="email"
                  />
                </div>
              </Form.Item>
              <Form.Item
                name="password"
                label="Password"
                placeholder="Enter Password"
                rules={[
                  {
                    required: true,
                    message: "Enter Password!",
                  },
                ]}
              >
                <div className="isoInputWrapper">
                  <Input
                    size="large"
                    type="password"
                    placeholder="Password"
                    autoComplete="false"
                    name="password"
                  />
                </div>
              </Form.Item>
              <Form.Item>
                <div className="isoInputWrapper isoLeftRightComponent">
                  <Checkbox>
                    <IntlMessages id="page.signInRememberMe" />
                  </Checkbox>
                  <Button type="primary" htmlType="submit">
                    <IntlMessages id="page.signInButton" />
                  </Button>
                </div>

                <p className="isoHelperText">
                  <IntlMessages id="page.signInPreview" />
                </p>
              </Form.Item>
            </Form>
            <div className="isoCenterComponent isoHelperWrapper">
              <Link to="/forgotpassword" className="isoForgotPass">
                <IntlMessages id="page.signInForgotPass" />
              </Link>
              <Link to="/signup">
                <IntlMessages id="page.signInCreateAccount" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </SignInStyleWrapper>
    </Spin>
    
  );
}
