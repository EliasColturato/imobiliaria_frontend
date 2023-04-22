import styled from 'styled-components';
import { color } from '../../utils/colors';

export const SectionWrapper = styled.div`
  width: 100%;
  height: 346px;
  @media (max-width: 1440px) {
    height: 450px;
  }
  @media (max-width: 1000px) {
    height: 600px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${color.secundaryColor};
  text-align: center;
  padding: 40px;
  h1 {
    font-size: 30px;
    font-weight: 300;
  }
  strong {
    color: ${color.primaryColor};
  }
`;

export const Cards = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
  margin: 40px 0;
  flex-wrap: wrap;
  row-gap: 1rem;
`;
