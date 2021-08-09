import React from 'react';
import styles from './App.module.css';
import { Layout, Typography } from 'antd';

function App() {
  return (
    <div className={styles.App}>
      <div>
        <Layout.Header>
          <Typography.Title level={3}>Let's Travel</Typography.Title>
        </Layout.Header>
      </div>
    </div>
  );
}

export default App;
