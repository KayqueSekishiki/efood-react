import { useContext } from "react";
import { MyGlobalContext } from "../../context";
import { HeroContainer, Tag, Title } from "./styles";
import { capitalize } from "../Card";

const Hero = () => {
  const { selectedRestaurant } = useContext(MyGlobalContext);
  return (
    <HeroContainer backgroundImage={selectedRestaurant?.capa ?? ""}>
      <div className="container">
        <Tag>{capitalize(selectedRestaurant?.tipo ?? "")}</Tag>
        <Title>{selectedRestaurant?.titulo}</Title>
      </div>
    </HeroContainer>
  );
};
export default Hero;
