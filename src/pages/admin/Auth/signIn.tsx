import React from "react";
import { useForm } from "react-hook-form"; // Import hook useForm từ thư viện react-hook-form
import { useNavigate } from "react-router-dom"; // Import hook useNavigate từ thư viện react-router-dom
import { LockOutlined, UserOutlined } from "@ant-design/icons"; // Import các icon từ thư viện ant-design/icons
import { Button, Checkbox, Form, Input, message } from "antd"; // Import các component từ thư viện antd
import { login } from "../../../api/auth"; // Import hàm login từ file api/auth

type Props = {}; // Khai báo kiểu dữ liệu cho Props

const Signin = (props: Props) => { // Khai báo component Signin với props là kiểu Props
  const {
    formState: { errors }, // Destructuring lấy ra errors từ object formState của hook useForm
  } = useForm(); // Sử dụng hook useForm để quản lý form

  const navigate = useNavigate(); // Sử dụng hook useNavigate để thực hiện chuyển hướng trang

  const onFinish = async (values: any) => { // Khai báo hàm onFinish được gọi khi form được submit
    const { data: user } = await login(values); // Gọi hàm login từ file api/auth và lấy dữ liệu user trả về
    console.log(user); // In ra thông tin user lấy được từ hàm login
    localStorage.setItem("token", JSON.stringify(user.accessToken)); // Lưu token của user vào localStorage
    navigate('/admin/products'); // Chuyển hướng đến đường dẫn '/admin/products'
    message.success('Đăng nhập thành công!', 2); // Hiển thị thông báo thành công
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ width: 600, margin: "250px auto" }}
      initialValues={{ remember: true }}
      onFinish={onFinish} // Gọi hàm onFinish khi form được submit
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your Email!" }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Email"
        />
      </Form.Item>
      <Form.Item
        label="Password "
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Signin; // Xuất component Signin để có thể sử dụng ở những nơi khác
