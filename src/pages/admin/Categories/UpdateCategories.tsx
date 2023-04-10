import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button, Checkbox, Form, Input, message, Select } from "antd";
import axios from "axios";
import { getCategories, updateCategory } from "../../../api/category";

interface ICategory {
  id: number;
  name: string;
}
interface IProps {
  onUpdateCate: (categories: ICategory) => void;
}
const UpdateCatePage = (props: IProps) => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { id } = useParams(); // lấy id từ url
  console.log(id);
  
  useEffect(() => {
    axios.get(`http://localhost:8080/api/categories/${id}`)
      .then((response) => {
        form.setFieldsValue(response.data);
      })
    .catch((error) => {
      console.log(error);
    });
  }, [id, form]);

  const onFinish = (data) => {
    const updateCate = {
      _id: id,
      ...data,
    };
    props.onUpdateCate(updateCate);
    navigate("/admin/categories");
    message.success("Cập nhật sản phẩm thành công!", 2);
    console.log(updateCategory);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
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
        form={form}
      >
        <Form.Item
          label="Categories Name"
          name="name"
        // rules={[{ required: true, message: 'Vui lòng nhập tên sản phẩm!' }]}
        >
          <Input value={`${form.getFieldValue("name")}`} />

        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Cập nhật sản phẩm
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default UpdateCatePage;
