import React from 'react';
import { Image, Typography } from 'antd';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';

interface PropsType extends RouteComponentProps {
  id: string | number;
  size: 'large' | 'small';
  imageSrc: string;
  price: number | string;
  title: string;
}

const ProductItemWrapper: React.FC<PropsType> = ({ 
  id, 
  size, 
  imageSrc, 
  price, 
  title, 
  history, 
  location, 
  match
}) => {
  return (
    <Link to={`travelDetail/${id}`}>
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
    </Link>                    
  )
};

export default withRouter(ProductItemWrapper);
