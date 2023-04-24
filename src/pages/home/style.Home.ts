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
  @media (max-width: 1000px) {
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
  }
`;

export const Title = styled.div`
  h1 {
    font-weight: 300;
  }
  strong {
    color: ${color.primaryColor};
  }
  @media (max-width: 1000px) {
    text-align: center;
  }
`;

export const HouseCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 1rem;
  row-gap: 1rem;
  @media (max-width: 1000px) {
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
  }
`;
