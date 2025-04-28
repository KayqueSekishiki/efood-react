import {
  Container,
  Tags,
  Tag,
  ImageContainer,
  InfosContainer,
  NameContainer,
  RateContainer,
  Description,
  Button,
} from "./styles";

import star from "../../assets/star.svg";
import hiokishushi from "../../assets/restaurants/hioki-sushi.svg";

const Restaurant = () => (
  <Container>
    <ImageContainer backgroundImage={hiokishushi}>
      <Tags>
        <Tag>Destaque do Dia</Tag>
        <Tag>Japonesa</Tag>
      </Tags>
    </ImageContainer>
    <InfosContainer>
      <NameContainer>
        <h3>Hioki Sushi</h3>
        <RateContainer>
          <span>4.9</span>
          <img src={star} alt="classificação" />
        </RateContainer>
      </NameContainer>
      <Description>
        Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
        frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
        rápida, embalagens cuidadosas e qualidade garantid. Experimente o Japão
        sem sair do lar com nosso delivery!
      </Description>
      <Button>Saiba mais</Button>
    </InfosContainer>
  </Container>
);

export default Restaurant;
