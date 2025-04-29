import { Link } from "react-router-dom";

import Restaurant from "../../models/Restaurant";
import Recipe from "../../models/Recipe";

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
import { restaurantList } from "../../pages/Home";

type Props = {
  listFor: "restaurant" | "recipe";
  restaurants?: Restaurant[];
  recipes?: Recipe[];
};

const Card = ({
  listFor,
  restaurants,
  recipes = restaurantList[1].recipes as Recipe[],
}: Props) => {
  listFor === "restaurant" &&
    restaurants?.map((restaurant) => (
      <Container key={restaurant.id} listFor={listFor}>
        <ImageContainer listFor="restaurant" backgroundImage={restaurant.image}>
          <Tags>
            {restaurant.highlightDay && <Tag>Destaque do Dia</Tag>}
            {restaurant.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </Tags>
        </ImageContainer>
        <InfosContainer listFor="restaurant">
          <NameContainer>
            <h3>{restaurant.name}</h3>
            <RateContainer>
              <span>{restaurant.rate}</span>
              <img src={star} alt="classificação" />
            </RateContainer>
          </NameContainer>
          <Description listFor="restaurant">
            {restaurant.description}
          </Description>
          <Link to={"/perfil"}>
            <Button buttonFor="restaurant" text="Saiba mais" />
          </Link>
        </InfosContainer>
      </Container>
    ));

  listFor === "recipe" &&
    recipes.map((recipe) => (
      <Container listFor="recipe" key={recipe.id}>
        <ImageContainer
          listFor="recipe"
          backgroundImage={recipe.image}
        ></ImageContainer>
        <InfosContainer listFor="recipe">
          <NameContainer>
            <h3>{recipe.name}</h3>
          </NameContainer>
          <Description listFor="recipe">{recipe.description}</Description>
          <Link to={"/perfil"}>
            <Button buttonFor="recipe" text="Adicionar ao carrinho" />
          </Link>
        </InfosContainer>
      </Container>
    ));
};

export default Card;
