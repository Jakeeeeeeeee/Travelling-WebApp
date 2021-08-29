import React from 'react';
import styles from './ProductItem.module.css';
import { Image, Typography } from 'antd';

interface PropsType {
  id: string | number;
  size: 'large' | 'small';
  imageSrc: string;
  price: number | string;
  title: string;
}

export const ProductItem: React.FC<PropsType> = ({ id, size, imageSrc, price, title}) => {
  return (
    <>
      {size === 'large' ? (
        <Image src={imageSrc} height={285} width={490} />
      ) : (
        <Image src={imageSrc} height={120} width={240} />
      )}
      <div>
        <Typography.Text type='secondary'>
          {title.slice(0, 20)}
        </Typography.Text>
        <Typography.Text type='danger' strong>
          $ {price}
        </Typography.Text>
      </div> 
    </>                    
  )
};