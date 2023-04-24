import { useState } from 'react';

import {
  CloseMenu,
  WrapperNavbar,
  Logo,
  ActionNavBar,
  SuportNavBar,
  ResponsiveMenu,
  ResponsiveMenuIcons,
  WrapperResponsiveMenuIcons,
} from './style.Navbar';
import MenuItens from './menuItens';

export default function Navbar() {
  const compraImg = './img/home.png';
  const alugarImg = './img/home.png';
  const anunciaImg = './img/share-2.png';
  const investirImg = './img/coin-stack.png';
  const suporteImg = './img/users.png';

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
        <ResponsiveMenuIcons className={showMenu ? 'show' : 'hide'}>
          <CloseMenu>
            <h1>Opções</h1>
            <img src="./img/close_x.png" alt="" onClick={toggleMenu} />
          </CloseMenu>
          <WrapperResponsiveMenuIcons>
            <MenuItens text="Comprar" img_url={compraImg} />
            <MenuItens text="Alugar" img_url={alugarImg} />
            <MenuItens text="Investir" img_url={investirImg} />
            <MenuItens text="Anunciar" img_url={anunciaImg} />
            <MenuItens text="Suporte" img_url={suporteImg} />
            {/* <button onClick={toggleMenu}>Início</button> */}
            {/* <button onClick={toggleMenu}>Home</button>
            <button onClick={toggleMenu}>Fale conosco</button> */}
          </WrapperResponsiveMenuIcons>
        </ResponsiveMenuIcons>
      )}
    </WrapperNavbar>
  );
}
