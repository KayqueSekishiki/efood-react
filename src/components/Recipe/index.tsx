import {
  Container,
  ImageContainer,
  InfosContainer,
  NameContainer,
  Description,
} from "./styles";

import Button from "../Button";
import { Link } from "react-router-dom";

type Props = {
  image: string;
  name: string;
  description: string;
};

const Recipe = ({ image, name, description }: Props) => (
  <Container>
    <ImageContainer backgroundImage={image}></ImageContainer>
    <InfosContainer>
      <NameContainer>
        <h3>{name}</h3>
      </NameContainer>
      <Description>{description}</Description>
      <Link to={"/perfil"}>
        <Button buttonFor="recipe" text="Adicionar ao carrinho" />
      </Link>
    </InfosContainer>
  </Container>
);

export default Recipe;
