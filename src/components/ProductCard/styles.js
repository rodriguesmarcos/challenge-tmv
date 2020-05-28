import styled from 'styled-components';

import PriceComponent from '../Price';

export const Container = styled.div`
  background: #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
`;

export const ImageWrapper = styled.div`
  max-width: 260px;
  margin: 0 auto 20px;
  padding-bottom: 100%;
  position: relative;
  width: 100%;
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  max-width: 100%;
`;

export const Title = styled.h2`
  color: #191919;
  font-size: 16px;
  margin-bottom: 10px;
`;

export const Price = styled(PriceComponent)`
  color: ${({ theme }) => theme.colors.smokyBlack};
  font-size: 20px;
  margin-bottom: 15px;
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.illuminatingEmerald};
  border: 0 none;
  color: ${({ theme }) => theme.colors.platinum};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  font-weight: bold;
  min-height: 34px;
  padding: 5px 10px;
  border-radius: 5px;
`;
