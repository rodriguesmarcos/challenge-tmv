import styled from 'styled-components';
import { Link } from 'react-router-dom';

import PriceComponent from '../Price';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
`;

export const Logo = styled(Link)`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  text-decoration: none;

  @media (min-width: 600px) {
    font-size: 30px;
  }
`;

export const Cart = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const Items = styled.span`
  &:after {
    content: '|';
    margin: 0 10px;
  }
`;

export const Price = styled(PriceComponent)`
  margin-right: 10px;
`;
