import { Badge } from 'antd';
import { ShoppingOutlined } from '@ant-design/icons';
import React from 'react';
import { useShoppingCart } from 'use-shopping-cart';

function ShoppingCartWithBadge() {
  const { cartCount } = useShoppingCart();
  return (
    <Badge
      count={cartCount}
      size={'small'}
      style={{
        top: '15px',
        right: '5px',
      }}
    >
      <ShoppingOutlined />
    </Badge>
  );
}

export default ShoppingCartWithBadge;
