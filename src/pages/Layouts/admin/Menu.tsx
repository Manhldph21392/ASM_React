import React, { useState } from 'react';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';
type Props = {}

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
  href?: string,

): MenuItem {
  const itemProps: MenuItem = {
    key,
    icon,
    children,
    label,
    type,
  };
  if (href) {
    itemProps.label = (
      <a href={href}>
        <span>{label}</span>
      </a>
    );
  } else {
    itemProps.label = (
      <>
        <span>{label}</span>
      </>
    );
  }
  return itemProps;
}

const items: MenuItem[] = [
  // getItem('Home', '1', <PieChartOutlined />, undefined, undefined, '/admin'),
  // getItem('Blog', '2', <DesktopOutlined />),
  // getItem('Contact', '3', <ContainerOutlined />),

  getItem('Products', 'sub1', <DesktopOutlined />, [
    getItem(' Products', '5', null, undefined, undefined, '/admin/products'),
    getItem('Create Product', '6', null, undefined, undefined, '/admin/products/add'),
  ]),

  getItem('Categories', 'sub2', <AppstoreOutlined />, [
    getItem(' Categories', '9', null, undefined, undefined, '/admin/categories'),
    getItem('Create Categories', '10', null, undefined, undefined, '/admin/categories/add'),

    getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
  ]),
];

const MenuAdmin: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div style={{ width: 256 }}>
      {/* <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button> */}
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="light"
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
}



export default MenuAdmin;