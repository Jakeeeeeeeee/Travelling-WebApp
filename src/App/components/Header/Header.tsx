import React from 'react';
import styles from './Header.module.css';
import { GlobalOutlined } from '@ant-design/icons';
import { Typography, Dropdown, Menu, Button, Layout, Input } from 'antd';
import { MENULISTS } from './MENULISTS';

export const Header: React.FC = () => {
  return (
    <div className={styles.appHeader}>
      <div className={styles.topHeader}>
        <Typography.Text>Let's Travel</Typography.Text>

        <Dropdown.Button
          style={{ marginLeft: 15 }}
          overlay={
            <Menu>
              <Menu.Item>English</Menu.Item>
              <Menu.Item>中文</Menu.Item>
            </Menu>
          }
          icon={<GlobalOutlined />}
        >
          Language
        </Dropdown.Button>

        <Button.Group className={styles.buttonGroup}>
          <Button>Sign Up</Button>
          <Button>Login In</Button>
        </Button.Group>
      </div>

      <Layout.Header className={styles.mainHeader}>
        <Typography.Title className={styles.title} level={3}>Jake's Travel</Typography.Title>
        
        <Input.Search 
          placeholder={'Please input the destination'}
          className={styles.searchInput}
        />
      </Layout.Header>

      <Menu mode={'horizontal'} className={styles.mainMenu}>
        {MENULISTS.map((list) => (
          <Menu.Item key={list.id}>{list.name}</Menu.Item>
        ))}
      </Menu>
    </div>
  )
};

