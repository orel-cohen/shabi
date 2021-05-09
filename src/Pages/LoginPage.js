import React, { useState } from 'react';
import axios from 'axios';

import { Form, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';

import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';


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
  const [userLoginData, setUserLoginData] = useState({ password: "", username: "" })
  const [isLoading, setIsLoading] = useState(false);

  // Use for route in respond to user input
  const history = useHistory();


  const onFinish = async (values) => {

    // set is loading true
    setIsLoading(true);

    setUserLoginData(values.password, values.username);

    axios.post('http://localhost:4000/login', userLoginData)
        .then(response => {
          console.log("res:");
          console.log(response);
          if (response.data) {
            history.push("/dashboard");
          } else {
            values.username = "";
            values.password = "";

          }
        });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
      {
        isLoading ? <LoadingOutlined style={{ fontSize: 24 }} spin /> :


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


      }
    </div>
  );
};

export default LoginPage;
