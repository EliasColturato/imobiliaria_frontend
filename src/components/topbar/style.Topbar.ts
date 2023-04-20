import styled from 'styled-components';
import { color } from '../../utils/colors';

export const WrapperTopBar = styled.div`
  margin: 0;
  padding: 10px 0;
  height: 100%;
  background-image: url('./img/topbar_background.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60%;
  margin: 80px 0 0 0;
`;

export const MenuAction = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

export const Title = styled.div`
  width: 500px;
  color: ${color.white};
  font-weight: 300;
  h1 {
    font-size: 60px;
  }
  strong {
    color: ${color.primaryColor};
  }
  p {
    font-size: 20px;
  }
`;

export const SearchWrapper = styled.div`
  margin: 40px 0;
`;

export const OptionsMenu = styled.div`
  column-gap: 1rem;
  display: flex;
  button {
    cursor: pointer;
    width: 185px;
    height: 60px;
    border-radius: 10px;
    border: none;
    font-size: 25px;
    font-weight: bold;
  }
  #buy {
    color: ${color.white};
    background-color: ${color.primaryColor};
  }
  #rent {
    background: none;
    border: 1px solid ${color.primaryColor};
    color: ${color.primaryColor};
  }
`;

export const SearchMenu = styled.div`
  margin: 40px 0;
  border-radius: 10px;
  background-color: ${color.white};
  width: 656px;
  height: 286px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 1rem;
  input,
  button,
  select {
    width: 586px;
    height: 58px;
    border-radius: 10px;
    border: 2px solid ${color.primaryColor};
    background: none;
    font-size: 20px;
    padding: 0 20px;
  }
`;

export const TextInput = styled.div``;

export const SearchFilters = styled.div`
  justify-content: space-between;
  select {
    color: ${color.primaryColor};
    font-weight: bold;
  }
`;

export const SearchButton = styled.div`
  button {
    background-color: ${color.primaryColor};
    font-weight: bold;
    color: ${color.white};
    cursor: pointer;
  }
`;
