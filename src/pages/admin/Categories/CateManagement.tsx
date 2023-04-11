// Import các thành phần cần thiết
import { Link } from "react-router-dom";
import React, { useRef, useState, useEffect } from "react";
import { Button, Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { IProduct } from "../../../interfaces/product";
import { ICategory } from "../../../interfaces/category";
import { getCategories } from "../../../api/category";

// Định nghĩa trang quản lý danh mục (CategoriesManagementPage)
const CategoriesManagementPage = (props) => {
  // Khai báo và quản lý trạng thái danh mục (categories) bằng useState
  const [categories, setCategories] = useState<ICategory[]>([]);

  // Hàm xóa danh mục (removeCate) được gọi từ props
  const removeCate = (id: IProduct) => {
    props.removeCate(id);
  };

  // Biến data chứa dữ liệu danh mục được xử lý từ props.categories
  const data = Array.isArray(props.categories)
    ? props.categories.map((item) => {
        return {
          key: item._id,
          name: item.name
        };
      })
    : [];
  console.log(data);

  // Gọi hàm getCategories từ API khi trang được tải lên, cập nhật lại trạng thái danh mục (categories)
  useEffect(() => {
    getCategories()
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Định nghĩa kiểu dữ liệu (DataType) cho dữ liệu trong bảng
  interface DataType {
    key: string;
    name: string;
  }

  // Định nghĩa các cột của bảng (columns)
  const columns: ColumnsType<DataType> = [
    {
      title: "Categories Name",
      dataIndex: "name",
      key: "name",
      width: "60%",
    },
    {
      title: "Action",
      key: "action",
      // Render các nút "Remove" và "Update" trong cột "Action"
      render: (record) => (
        <Space size="middle">
          <Button
            style={{ backgroundColor: "red" }}
            type="primary"
            onClick={() => removeCate(record.key)}
          >
            Remove
          </Button>
          <Button type="primary">
            <Link to={`/admin/categories/${record.key}/update`}>Update</Link>
          </Button>
        </Space>
      ),
    },
  ];

  // Trả về một bảng (Table) được hiển thị trên trang với các cột và dữ liệu từ trạng thái danh mục (categories), cùng với cấu hình phân trang (pagination)
  return (
    <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
  );
};

export default CategoriesManagementPage;
