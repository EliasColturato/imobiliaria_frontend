import {
  WrapperNavbar,
  Logo,
  ActionNavBar,
  SuportNavBar,
  ResponsiveMenu,
} from './style.Navbar';

export default function Navbar() {
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
      <ResponsiveMenu>
        <img src="./img/menu.png" alt="" />
      </ResponsiveMenu>
    </WrapperNavbar>
  );
}
