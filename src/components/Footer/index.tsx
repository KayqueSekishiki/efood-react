import logo from "../../assets/logo.svg";
import instagramIcon from "../../assets/instagram.svg";
import facebookIcon from "../../assets/facebook.svg";
import xIcon from "../../assets/x.svg";

import { Container, Links } from "./styles";
import { Link } from "react-router-dom";

const Footer = () => (
  <Container>
    <div className="container">
      <Link to={"/"}>
        <img src={logo} alt="Efood" />
      </Link>
      <Links>
        <li>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <img src={instagramIcon} alt="instagram do efood" />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <img src={facebookIcon} alt="facebook do efood" />
          </a>
        </li>
        <li>
          <a href="https://www.x.com/" target="_blank" rel="noreferrer">
            <img src={xIcon} alt="x do efood" />
          </a>
        </li>
      </Links>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.{" "}
      </p>
    </div>
  </Container>
);

export default Footer;
