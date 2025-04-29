import { HeroContainer, Tag, Title } from "./styles";

import laDolceVita from "../../assets/restaurants/la-dolce-vita-trattoria.svg";

const Hero = () => (
  <HeroContainer backgroundImage={laDolceVita}>
    <div className="container">
      <Tag>Italiana</Tag>
      <Title>La Dulce Vita Trattoria</Title>
    </div>
  </HeroContainer>
);

export default Hero;
