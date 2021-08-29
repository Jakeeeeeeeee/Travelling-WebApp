import React from 'react';
import styles from './HomePage.module.scss';
import { Row, Col, Typography } from 'antd';
import { productList1, productList2, productList3 } from './mockProducts';
import { SideMenu, Carousal, ProductionCollection } from './components';

import sideImage from '../../assets/images/sider_2019_12-09.png';
import sideImage2 from '../../assets/images/sider_2019_02-04.png';
import sideImage3 from '../../assets/images/sider_2019_02-04-2.png';

export class HomePage extends React.Component {
  render() {
    return (
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
    </div>);
  }
}