import React from "react";
import "antd/dist/antd.css";
import { Form, Input, Button } from "antd";
import "./loginpage.css";
const LoginPage = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={"wrapper"}>
      <Form
        name="basic"
        layout="vertical"
        colon={false}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className={"content"}>
          <div className={"user"}>
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input placeholder="Please input your username" />
            </Form.Item>
          </div>
          <div className={"phone"}>
            <Form.Item
              label="Number"
              name="Number"
              rules={[
                {
                  required: true,
                  message: "Please input your Phone Number!",
                },
              ]}
            >
              <Input placeholder="Please input your phone Number" />
            </Form.Item>
          </div>
          <div className={"pass"}>
            <Form.Item
              label="Password"
              name="Password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input placeholder="Please input your Password" />
            </Form.Item>
          </div>
          <Form.Item>
            <Button className={"btn"} type="primary" htmlType="submit">
              <span> Submit </span>
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default LoginPage;
