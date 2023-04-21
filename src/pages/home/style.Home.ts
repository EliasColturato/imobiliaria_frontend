import styled from 'styled-components';
import { color } from '../../utils/colors';

export const WrapperShelf = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HouseShelf = styled.div`
  margin: 40px 0;
  width: 80%;
`;

export const Title = styled.div`
  h1 {
    font-weight: 300;
  }
  strong {
    color: ${color.primaryColor};
  }
`;

export const HouseCard = styled.div`
  display: flex;
  column-gap: 1rem;
  row-gap: 1rem;
`;
