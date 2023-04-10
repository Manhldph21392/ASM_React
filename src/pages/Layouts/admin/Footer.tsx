import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Footer } = Layout;

type Props = {}

const FooterAdmin = (props: Props) => {
  return (
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by ManhLd</Footer>
  )
}

export default FooterAdmin;