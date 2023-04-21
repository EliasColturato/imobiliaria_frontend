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

export const WrapperHouse = styled.div`
  border-radius: 10px;
  width: 377px;
  height: 443px;
  border: 1px solid ${color.primaryColor};
  background-color: ${color.secundaryColor};
  img {
    border-radius: 10px 10px 0 0;
    width: 100%;
  }
`;
