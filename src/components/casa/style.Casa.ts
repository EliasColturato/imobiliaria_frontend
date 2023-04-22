import styled from 'styled-components';
import { color } from '../../utils/colors';

export const CasasCard = styled.div`
  margin: 15px 0;
  border-radius: 10px;
  width: 390px;
  height: 443px;
  border: 1px solid ${color.primaryColor};
  background-color: ${color.secundaryColor};
  img {
    border-radius: 10px 10px 0 0;
    width: 100%;
  }
  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const CasaInfo = styled.div`
  margin: 20px;
`;

export const Title = styled.div``;

export const DetailsCasa = styled.div`
  display: flex;
  justify-content: space-between;
  width: 240px;
  margin: 10px 0;
  color: ${color.gray75};
  font-weight: 500;
  img {
    width: 30px;
  }
  @media (max-width: 400px) {
    img {
      width: 25px;
    }
  }
`;

export const AreaCasa = styled.div`
  display: flex;
  width: 120px;
  margin-right: 10px;
  padding-right: 10px;
  align-items: center;
  border-right: 2px solid ${color.gray75};
`;

export const GaragemCasa = styled.div`
  display: flex;
  align-items: center;
  width: 120px;
`;

export const ValueCasa = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${color.primaryColor};
  img {
    width: 30px;
  }
  @media (max-width: 400px) {
    h1 {
      font-size: 30px;
    }
  }
`;
