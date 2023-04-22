import styled from 'styled-components';
import { color } from '../../../utils/colors';

export const WrapperCard = styled.div`
  width: 365px;
  height: 112px;
  border: 2px solid ${color.primaryColor};
  border-radius: 10px;
  justify-content: center;
  column-gap: 2rem;
  display: flex;
  align-items: center;
  img {
    width: 40px;
  }
`;

export const TextCard = styled.div`
  width: 200px;
  text-align: left;
  h1 {
    font-weight: 400;
  }
`;
