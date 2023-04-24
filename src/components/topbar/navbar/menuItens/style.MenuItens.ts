import styled from 'styled-components';
import { color } from '../../../../utils/colors';

export const WrapperMenuItem = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  column-gap: 1rem;
  h1 {
    font-size: 20px;
    color: ${color.primaryColor};
  }
`;
