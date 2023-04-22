import styled, { keyframes } from 'styled-components';
import { color } from '../../../utils/colors';

export const WrapperNavbar = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 2rem;
  align-items: center;
  justify-content: space-around;
  padding: 30px 0;
`;

export const Logo = styled.div`
  color: ${color.primaryColor};
  font-size: 24px;
`;

export const ActionNavBar = styled.div`
  width: 245px;
  display: flex;
  justify-content: space-between;
  button {
    border: none;
    background: none;
    font-size: 20px;
  }
  #home {
    font-weight: 600;
    color: ${color.primaryColor};
  }
  #buy {
    color: ${color.white};
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const SuportNavBar = styled.div`
  align-items: center;
  display: flex;
  width: 170px;
  justify-content: space-between;
  button {
    background: none;
    border: none;
    font-size: 20px;
    color: ${color.primaryColor};
    font-weight: 500;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const ResponsiveMenu = styled.div`
  display: none;
  cursor: pointer;
  img {
    width: 40px;
  }
  @media (max-width: 1000px) {
    display: block;
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.9);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.9);
  }
`;

export const ResponsiveMenuIcons = styled.div`
  &.show {
    animation: ${fadeIn} 0.3s ease-in-out;
  }
  &.hide {
    display: none;
    animation: ${fadeOut} 0.3s all;
  }
  width: 100%;
  height: 100vh;
  background-color: ${color.secundaryColor};
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2rem;
  justify-content: center;
  transition: all 0.3s;
`;

export const WrapperResponsiveMenuIcons = styled.div`
  button {
    font-size: 30px;
    border-radius: 10px;
    width: 500px;
    height: 80px;
    color: ${color.white};
    font-weight: bold;
    background-color: ${color.primaryColor};
    border: none;
  }
`;
