import { useContext } from "react";
import { Menu, MyGlobalContext } from "../../context";
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

type RestaurantCardProps = {
  listFor: "restaurant";
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  cardapio: Menu[];
};

type DishesCardProps = {
  listFor: "dishe";
  id: number;
  foto: string;
  nome: string;
  descricao: string;
  porcao: string;
  preco: number;
};

type Props = RestaurantCardProps | DishesCardProps;

export const capitalize = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

const Card = (props: Props) => {
  const { listFor } = props;
  const {
    setModalIsVisible,
    setSelectedRestaurant,
    selectedRestaurant,
    setSelectedDish,
  } = useContext(MyGlobalContext);

  const formatNameForUrl = (name: string) => {
    return name.trim().replace(/\s+/g, "-").toLowerCase();
  };

  const getDescription = (description: string) => {
    if (description.length > 133) {
      return description.slice(0, 130) + "...";
    }
    return description;
  };

  if (listFor === "restaurant") {
    const {
      id,
      titulo,
      capa,
      destacado,
      tipo,
      avaliacao,
      descricao,
      cardapio,
    } = props as RestaurantCardProps;

    return (
      <Container key={formatNameForUrl(titulo)} listFor={listFor}>
        <ImageContainer
          style={{ backgroundImage: `url(${capa})` }}
          listFor="restaurant"
        >
          <Tags>
            {destacado && <Tag>Destaque do Dia</Tag>}
            <Tag>{capitalize(tipo)}</Tag>
          </Tags>
        </ImageContainer>
        <InfosContainer listFor="restaurant">
          <NameContainer>
            <h3>{titulo}</h3>
            <RateContainer>
              <span>{avaliacao}</span>
              <img src={star} alt="classificação" />
            </RateContainer>
          </NameContainer>
          <Description listFor="restaurant">{descricao}</Description>
          <Link
            to={`/perfil/${formatNameForUrl(titulo)}`}
            onClick={() => {
              setSelectedRestaurant({
                id,
                titulo,
                destacado,
                descricao,
                tipo,
                avaliacao,
                capa,
                cardapio,
              });
            }}
          >
            <Button buttonFor="restaurant" text="Saiba mais" />
          </Link>
        </InfosContainer>
      </Container>
    );
  }

  if (listFor === "dishe") {
    const { id, foto, nome, descricao, porcao, preco } =
      props as DishesCardProps;

    return (
      <>
        {
          <Container listFor="dishe" key={formatNameForUrl(nome)}>
            <ImageContainer
              style={{ backgroundImage: `url(${foto})` }}
              listFor="dishe"
            />
            <InfosContainer listFor="dishe">
              <NameContainer>
                <h3>{nome}</h3>
              </NameContainer>
              <Description listFor="dishe">
                {getDescription(descricao)}
              </Description>
              <Link
                to={`/perfil/${formatNameForUrl(
                  selectedRestaurant?.titulo ?? ""
                )}/${formatNameForUrl(nome)}`}
                onClick={() => {
                  setSelectedDish({ id, foto, nome, descricao, porcao, preco });
                  setModalIsVisible(true);
                }}
              >
                <Button buttonFor="dishe" text="Mais detalhes" />
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
