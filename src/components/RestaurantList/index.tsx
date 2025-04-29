import Restaurant from "../../models/Restaurant";
import RestaurantComponent from "../Restaurant";
import { Container } from "./styles";

export type Props = {
  restaurant: Restaurant[];
};

const RestaurantList = ({ restaurant }: Props) => (
  <div className="container">
    <Container>
      {restaurant.map((r) => (
        <RestaurantComponent
          key={r.id}
          image={r.image}
          highlightDay={r.highlightDay}
          tags={r.tags}
          name={r.name}
          rate={r.rate}
          description={r.description}
        />
      ))}
    </Container>
  </div>
);

export default RestaurantList;
