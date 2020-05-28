import React from 'react';
import { FiShoppingBag } from 'react-icons/fi';

import { useCart } from '../../context/cart';

import { Container, Logo, Cart, Items, Price } from './styles';

const Header = () => {
  const { qty, total } = useCart();

  return (
    <Container>
      <Logo to="/">RandomStore</Logo>

      <Cart to="/cart">
        <Items>{qty}</Items>
        <Price value={total} />

        <FiShoppingBag size="30" />
      </Cart>
    </Container>
  );
};

export default Header;
