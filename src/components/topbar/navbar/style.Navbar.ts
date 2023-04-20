import styled from 'styled-components';
import { color } from '../../../utils/colors';

export const WrapperNavbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 30px 0;
`;

export const Logo = styled.div`
  color: ${color.primaryColor};
`;

export const ActionNavBar = styled.div`
  width: 245px;
  display: flex;
  justify-content: space-between;
`;

export const SuportNavBar = styled.div`
  align-items: center;
  display: flex;
  width: 170px;
  justify-content: space-between;
  a {
    color: ${color.primaryColor};
    font-weight: 500;
  }
`;
