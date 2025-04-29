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

type Props = {
  image: string;
  highlightDay: boolean;
  tags: string[];
  name: string;
  rate: number;
  description: string;
};

const Restaurant = ({
  image,
  highlightDay,
  tags,
  name,
  rate,
  description,
}: Props) => (
  <Container>
    <ImageContainer backgroundImage={image}>
      <Tags>
        {highlightDay && <Tag>Destaque do Dia</Tag>}
        {tags.map((tag) => (
          <Tag>{tag}</Tag>
        ))}
      </Tags>
    </ImageContainer>
    <InfosContainer>
      <NameContainer>
        <h3>{name}</h3>
        <RateContainer>
          <span>{rate}</span>
          <img src={star} alt="classificação" />
        </RateContainer>
      </NameContainer>
      <Description>{description}</Description>
      <Button>Saiba mais</Button>
    </InfosContainer>
  </Container>
);

export default Restaurant;
