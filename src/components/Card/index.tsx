import { Link } from "react-router-dom";

import {
  Container,
  Tags,
  Tag,
  ImageContainer,
  InfosContainer,
  NameContainer,
  RateContainer,
  Description,
} from "./styles";

import star from "../../assets/star.svg";
import Button from "../Button";
import Recipe from "../../models/Recipe";

type Props = {
  listFor: "restaurant" | "recipe";
  id: number;
  image: string;
  highlightDay?: boolean;
  tags?: string[];
  name: string;
  rate?: number;
  description: string;
  recipes?: Recipe[];
};

const Card = ({
  listFor,
  id,
  image,
  highlightDay,
  tags,
  name,
  rate,
  description,
  recipes,
}: Props) => {
  if (listFor === "restaurant") {
    return (
      <Container key={id} listFor={listFor}>
        <ImageContainer listFor="restaurant" backgroundImage={image}>
          <Tags>
            {highlightDay && <Tag>Destaque do Dia</Tag>}
            {tags?.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </Tags>
        </ImageContainer>
        <InfosContainer listFor="restaurant">
          <NameContainer>
            <h3>{name}</h3>
            <RateContainer>
              <span>{rate}</span>
              <img src={star} alt="classificação" />
            </RateContainer>
          </NameContainer>
          <Description listFor="restaurant">{description}</Description>
          <Link to={"/perfil"}>
            <Button buttonFor="restaurant" text="Saiba mais" />
          </Link>
        </InfosContainer>
      </Container>
    );
  }

  if (listFor === "recipe") {
    return (
      <>
        {
          <Container listFor="recipe" key={id}>
            <ImageContainer
              listFor="recipe"
              backgroundImage={image}
            ></ImageContainer>
            <InfosContainer listFor="recipe">
              <NameContainer>
                <h3>{name}</h3>
              </NameContainer>
              <Description listFor="recipe">{description}</Description>
              <Link to={"/perfil"}>
                <Button buttonFor="recipe" text="Adicionar ao carrinho" />
              </Link>
            </InfosContainer>
          </Container>
        }
      </>
    );
  }
  return null;
};
export default Card;
