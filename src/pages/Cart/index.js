import React from 'react';

import Grid from '../../components/Grid';
import CartItem from '../../components/CartItem';

import { useCart } from '../../context/cart';

import { Container } from './styles';

const Cart = () => {
  const { cartProducts } = useCart();

  return (
    <Container>
      <h1>Cart</h1>

      <Grid
        data={cartProducts}
        renderItem={(item) => <CartItem product={item} />}
        keyExtractor={(item) => item.id}
        columns={1}
        gap={10}
      />
    </Container>
  );
};

export default Cart;
