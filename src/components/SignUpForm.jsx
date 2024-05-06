import React from "react";
import { Button, Form, Input } from "antd";
import styled from "styled-components";
import image from "../assets/svgs/login ImGEEE.webp";
import logo from "../assets/svgs/logo.svg";

const layout = {
  labelCol: {
    span: 24,
  },
  wrapperCol: {
    span: 24,
  },
};
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
  },
};
const onFinish = (values) => {
  console.log(values);
};
const SignUpForm = () => {
  return (
    <MainContainer>
      <SignUpFormContainer>
        <div style={{width: "81%"}}>
          <img className="logo"  src={logo} alt="" />
        </div>
        <FormDiv>
          <StyledForm
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            //   style={{
            //     width: 500,
            //   }}
            validateMessages={validateMessages}
          >
            <Form.Item
              name={["user", "name"]}
              label="Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item name={["user", "lname"]} label="Last Name">
              <Input />
            </Form.Item>
            <Form.Item
              name={["user", "email"]}
              label="Email"
              rules={[
                {
                  type: "email",
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              wrapperCol={{
                ...layout.wrapperCol,
                offset: 0,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </StyledForm>
        </FormDiv>
        <div style={{ textAlign: "center" }}>
          <p style={{ wordSpacing: "6px" }}>
            Already have an account?
            <span>
              <a style={{ color: "#FFD017" }} href="">
                Sign in
              </a>
            </span>
          </p>
        </div>
      </SignUpFormContainer>
      <div className="sideimage">
        <img src={image} alt="" />
      </div>
    </MainContainer>
  );
};
export default SignUpForm;
const MainContainer = styled.div`
  display: flex;
    justify-content: center;

  @media (max-width: 767px) {
    .sideimage {
      display: none;
    }
  }
`;
const SignUpFormContainer = styled.div`
  width: 60%;
  padding: 180px 0px;
  .logo{
    height: 129px;
  }
  @media (max-width: 767px) {
    .logo{
      height: 100px;
    }
  }

`;
const FormDiv = styled.div`
  display: flex;
  justify-content: center;
`;
const SignUpHeading = styled.h2`
  text-align: center;
  font-weight: 400;
`;
const StyledForm = styled(Form)`
  width: 30rem;
`;
