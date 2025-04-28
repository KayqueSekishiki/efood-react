import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";

import { Container, HeaderBar, Title } from "./styles";

type Props = {
  headerFor: "home" | "perfil";
};

const Header = ({ headerFor }: Props) => (
  <Container>
    <div className="container">
      {headerFor === "home" ? (
        <>
          <Link to={"/"}>
            <img src={logo} alt="Efood" />
          </Link>
          <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
        </>
      ) : (
        <HeaderBar>
          <p>Restaurantes</p>
          <Link to={"/"}>
            <img src={logo} alt="Efood" />
          </Link>
          <p>
            <span>0</span> - produto(s) no carrinho
          </p>
        </HeaderBar>
      )}
    </div>
  </Container>
);

export default Header;
