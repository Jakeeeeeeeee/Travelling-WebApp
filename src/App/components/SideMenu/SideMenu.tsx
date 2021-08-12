import { GifOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import React from 'react';
import styles from './SideMenu.module.css';
import { sideMenuList } from './mockMenu';

export const SideMenu: React.FC = () => {
  return(
    <Menu mode='vertical' className={styles.sideMenu}>
      {sideMenuList.map((list, index) => (
        <Menu.SubMenu
          key={index}
          title={
            <span>
              <GifOutlined />
              {list.title}
            </span>}  
        >
          {list.subMenu.map((subList, slIndex) => (
            <Menu.SubMenu
              key={slIndex}
              title={
                <span>
                  <GifOutlined />
                  {subList.title}
                </span>}
            >
              {subList.subMenu.map((menuItem, mIndex) => (
                <Menu.Item
                  key={mIndex}
                >
                  <span>
                    <GifOutlined />
                    {menuItem}
                  </span>
                </Menu.Item>
              ))}
            </Menu.SubMenu>
          ))}
        </Menu.SubMenu>
      ))}
    </Menu>
  )
};

