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
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  &.show {
    animation: ${fadeIn} 0.3s ease-in-out;
  }
  &.hide {
    display: none;
    animation: ${fadeOut} 0.3s all;
  }
`;

export const WrapperResponsiveMenuIcons = styled.div`
  background-color: rgba(20, 20, 20, 0.5);
  backdrop-filter: blur(4px);
  width: 100%;
  height: 200px;
  position: absolute;
  top: 60px;
  padding: 2rem;
  left: 0;
  z-index: 99;
  flex-direction: column;
  row-gap: 4rem;
  overflow-y: auto;
  display: none;
  @media (max-width: 1000px) {
    display: flex;
  }
`;

export const CloseMenu = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 60px;
  z-index: 99;
  background-color: ${color.primaryColor};
  display: flex;
  align-items: center;
  justify-content: space-around;
  h1 {
    color: ${color.white};
    font-size: 20px;
    font-weight: bold;
  }
  display: none;
  @media (max-width: 1000px) {
    display: flex;
  }
`;
