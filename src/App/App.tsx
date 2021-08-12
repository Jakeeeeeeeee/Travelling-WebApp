import React from 'react';
import styles from './App.module.css';
import { Footer, Header, SideMenu, Carousal, ProductionCollection } from './components';
import { Row, Col, Typography } from 'antd';
import { productList1, productList2, productList3 } from './mockProducts';

import sideImage from '../assets/images/sider_2019_12-09.png';
import sideImage2 from '../assets/images/sider_2019_02-04.png';
import sideImage3 from '../assets/images/sider_2019_02-04-2.png';

function App() {
  return (
    <div className={styles.App}>
      <Header />

      <div className={styles.pageContent}>
        <Row style={{marginTop: 20}}>
          <Col span={6}>
            <SideMenu />
          </Col>
          <Col span={18}>
            <Carousal />
          </Col>
        </Row>

        <ProductionCollection 
          title={<Typography.Title level={3} type='warning'>Hot</Typography.Title>}
          sideImage={sideImage}
          products={productList1}
        />

        <ProductionCollection 
          title={<Typography.Title level={3} type='danger'>New</Typography.Title>}
          sideImage={sideImage2}
          products={productList2}
        />

        <ProductionCollection 
          title={<Typography.Title level={3} type='success'>Recommend</Typography.Title>}
          sideImage={sideImage3}
          products={productList3}
        />
      </div>

      <Footer />
    </div>
  );
}

export default App;
