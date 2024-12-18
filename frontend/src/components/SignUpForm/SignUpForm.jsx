import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';

const SignUpForm = () => {
  // Hàm xử lý khi submit form thành công
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  // Hàm xử lý khi submit form thất bại
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Tài khoản"
        name="username"
        rules={[
          {
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Mật khẩu"
        name="password"
        rules={[
          {
            message: 'Vui lòng nhập mật khẩu!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Xác nhận mật khẩu"
        name="confirm password"
        rules={[
          {
            message: 'Vui lòng xác nhận lại mật khẩu!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
          Đăng ký
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignUpForm;
