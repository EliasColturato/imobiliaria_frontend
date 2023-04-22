import { useState } from 'react';

import {
  WrapperNavbar,
  Logo,
  ActionNavBar,
  SuportNavBar,
  ResponsiveMenu,
  ResponsiveMenuIcons,
  WrapperResponsiveMenuIcons,
} from './style.Navbar';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <WrapperNavbar>
      <Logo>
        <h1>Logo</h1>
      </Logo>
      <ActionNavBar>
        <button id="home">Início</button>
        <button id="buy">Comprar imóvel</button>
      </ActionNavBar>
      <SuportNavBar>
        <button>Fale Conosco</button>
        <img src="./img/headphones.png" alt="" />
      </SuportNavBar>
      <ResponsiveMenu onClick={toggleMenu}>
        <img src="./img/menu.png" alt="" />
      </ResponsiveMenu>
      {showMenu && (
        <WrapperResponsiveMenuIcons>
          <ResponsiveMenuIcons className={showMenu ? 'show' : 'hide'}>
            <button onClick={toggleMenu}>Início</button>
            <button onClick={toggleMenu}>Home</button>
            <button onClick={toggleMenu}>Fale conosco</button>
          </ResponsiveMenuIcons>
        </WrapperResponsiveMenuIcons>
      )}
    </WrapperNavbar>
  );
}
