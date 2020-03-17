import React from 'react';

import { Menu } from 'antd';
import { UserOutlined, SettingOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
const { SubMenu } = Menu;

class Sider extends React.Component {
  render() {
    return (
      <div>
        <span className="ant-divider" style={{ margin: '0 1em' }} />
        <Menu
          style={{ width: 256 }}
          defaultSelectedKeys={['3']}
          defaultOpenKeys={['sub1']}
          mode={'inline'}
          theme={'light'}
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <UserOutlined />
                <span>My Profile</span>
              </span>
            }
          >
            <Menu.Item key="3">General Info</Menu.Item>
            <Menu.Item key="4">Change Password</Menu.Item>
            <Menu.Item key="5">Plan Usage</Menu.Item>
            <Menu.Item key="6">Settings</Menu.Item>
            <Menu.Item key="7">Exports</Menu.Item>
            <Menu.Item key="8">Integrations</Menu.Item>
            <SubMenu key="sub1-2" title="Submenu">
              <Menu.Item key="9">Option 5</Menu.Item>
              <Menu.Item key="10">Option 6</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <SettingOutlined />
                <span>Account Settings</span>
              </span>
            }
          >
            <Menu.Item key="11">Manage Team</Menu.Item>
            <Menu.Item key="12">Manage Subscription</Menu.Item>
            <Menu.Item key="13">Manage Billings</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

export default Sider;
