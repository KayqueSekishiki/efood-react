import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";

import { Container, HeaderBar, Title } from "./styles";

const Header = () => (
  <Container>
    <div className="container">
      <HeaderBar>
        <p>Restaurantes</p>
        <Link to={"/"}>
          <img src={logo} alt="Efood" />
        </Link>
        <p>
          <span>0</span> - produto(s) no carrinho
        </p>
      </HeaderBar>

      <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
    </div>
  </Container>
);

export default Header;
