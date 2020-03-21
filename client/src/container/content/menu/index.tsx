import React from 'react';
import { Menu, Button } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './index.scss';

const { SubMenu } = Menu;
const { useState } = React;

const AppMenu = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    // setCollapsed(!collapsed);
  }

  return (
    <div style={{ width: 256 }} className='app-menu'>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
      >
        <Menu.Item key="1">
          <PieChartOutlined />
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <DesktopOutlined />
          <Link to="/graphql">Graphql</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default AppMenu;

