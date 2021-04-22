import React, { useState } from 'react';

import { Form, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';

import AboutPage from "./AboutPage";
import { LoadingComponent } from "../Components/LoadingComponent";
import { useHistory } from 'react-router-dom';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const LoginPage = () => {
  const [user, setUser] = useState({ password: "", username: "" })
  const [isLoading, setIsLoading] = useState(false);

  // Use for route in respond to user input
  const history = useHistory();

  // Admin details
  const adminName = "Orel Cohen";
  const adminPass = "123456Oo";

  const onFinish = (values) => {
    console.log('Success:', values);

    // set is loading true

    // check if the user in the server
    if (values.username === adminName && values.password === adminPass) {
      setUser(adminPass, adminName);
      history.push("/dashboard");
    }

    // go to dashboard
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
      
        <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="מספר אישי"
          name="username"
          rules={[
            {
              required: true,
              message: 'הכנס מספר אישי',
            },
          ]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          label="סיסמה"
          name="password"
          rules={[
            {
              required: true,
              message: 'הכנס סיסמה',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
  
        {/* <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item> */}
  
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            כניסה
          </Button>
        </Form.Item>
      </Form>

      
    </div>


  );
};

export default LoginPage;
