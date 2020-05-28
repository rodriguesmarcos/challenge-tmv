import styled from 'styled-components';

import GridComponent from '../../components/Grid';

export const Container = styled.div``;

export const Loading = styled.div`
  text-align: center;
`;

export const Grid = styled(GridComponent)`
  grid-gap: 20px;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
