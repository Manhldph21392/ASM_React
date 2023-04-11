import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button, Checkbox, Form, Input, message, Select } from "antd";
import { getCategories } from "../../../api/category";

// Định nghĩa kiểu dữ liệu cho đối tượng danh mục
interface ICategory {
  id: number;
  name: string;
}

// Định nghĩa kiểu dữ liệu cho props của component
interface IProps {
  onAddCate: (product: ICategory) => void;
}

// Khai báo component AddCatePage
const AddCatePage = (props: IProps) => {
  // Sử dụng hook useState để quản lý state categories
  const [categories, setCategories] = useState<ICategory[]>([]);
  const navigate = useNavigate();

  // Sử dụng hook useEffect để gọi hàm getCategories() sau khi component được render
  useEffect(() => {
    getCategories()
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Hàm xử lý khi submit form
  const onFinish = (values: any) => {
    console.log(values);
    props.onAddCate(values);
    navigate("/admin/categories");
    message.success("Thêm danh mục thành công!", 2);
  };

  // Hàm xử lý khi submit form thất bại
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  // Render giao diện của component
  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ width: 600, margin: "0 auto" }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Category Name"
          name="name"
          rules={[{ required: true, message: "Vui lòng nhập tên danh mục!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Thêm danh mục
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

// Xuất component AddCatePage để sử dụng trong các module khác
export default AddCatePage;
