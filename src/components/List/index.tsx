import Restaurant from "../../models/Restaurant";
import Recipe from "../../models/Recipe";
import { Container } from "./styles";
import Card from "../Card";

type Props = {
  listFor: "restaurant" | "recipe";
  restaurants?: Restaurant[];
  recipes?: Recipe[];
};

const List = ({
  listFor,
  restaurants,
  recipes = restaurants && restaurants[1].recipes,
}: Props) => {
  return (
    <div className="container">
      <Container list={listFor}>
        {listFor === "restaurant" &&
          (restaurants ?? []).map((restaurant) => (
            <Card
              key={restaurant.id}
              listFor={listFor}
              id={restaurant.id}
              image={restaurant.image}
              highlightDay={restaurant.highlightDay}
              tags={restaurant.tags}
              name={restaurant.name}
              rate={restaurant.rate}
              description={restaurant.description}
            />
          ))}

        {listFor === "recipe" &&
          (recipes ?? []).map((recipe) => (
            <Card
              key={recipe.id}
              listFor={listFor}
              id={recipe.id}
              image={recipe.image}
              name={recipe.name}
              description={recipe.description}
            />
          ))}
      </Container>
    </div>
  );
};

export default List;
