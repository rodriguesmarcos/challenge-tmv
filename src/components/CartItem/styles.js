import styled from 'styled-components';

import PriceComponent from '../Price';

export const Container = styled.div`
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.platinum};
  display: flex;
  flex-flow: row wrap;
  margin-bottom: 15px;
  padding-bottom: 15px;

  @media (min-width: 768px) {
    margin-bottom: 10px;
    padding-bottom: 10px;
  }
`;

export const Image = styled.img`
  max-width: 160px;
  height: auto;
  margin: 0 auto 15px;

  @media (min-width: 768px) {
    margin: 0 15px 0 0;
    max-width: 40px;
  }
`;

export const Title = styled.span`
  font-size: 14px;
  font-weight: bold;
  flex: 0 0 100%;
  margin-bottom: 15px;
  text-align: center;

  @media (min-width: 768px) {
    flex: 3;
    margin: 0 15px 0 0;
    text-align: left;
  }
`;

export const Qty = styled.div`
  display: flex;
  border: 0 none;
  background: #fff;
`;

export const Button = styled.button`
  border: 0 none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  width: 32px;
  height: 32px;
`;

export const DeleteButton = styled(Button)`
  color: #fff;
  background: #e91e63;
  margin-left: 10px;
`;

export const Input = styled.input.attrs({ type: 'number', min: 1, max: 99 })`
  border: 0 none;
  padding: 5px 0px 5px 8px;
  width: 60px;
  margin: 0 5px;
`;

export const SubTotal = styled(PriceComponent)`
  flex: 1;
  padding: 0 20px;
  text-align: right;
`;

export const Message = styled.div`
  display: flex;
  align-items: center;
`;

export const MessageText = styled.p`
  margin: 0 10px 0;
`;
