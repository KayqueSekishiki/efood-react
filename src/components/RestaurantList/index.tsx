import Restaurant from "../Restaurant";
import { Container } from "./styles";

const RestaurantList = () => (
  <div className="container">
    <Container>
      <Restaurant />
      <Restaurant />
      <Restaurant />
      <Restaurant />
      <Restaurant />
      <Restaurant />
    </Container>
  </div>
);

export default RestaurantList;
