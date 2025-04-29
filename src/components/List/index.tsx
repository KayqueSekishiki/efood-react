import Restaurant from "../../models/Restaurant";
import Recipe from "../../models/Recipe";
import RestaurantComponent from "../Restaurant";
import { Container } from "./styles";

import RecipeCard from "../Recipe";
import { restaurantList } from "../../pages/Home";

type Props = {
  listFor: "restaurant" | "recipe";
  restaurants?: Restaurant[];
  recipes?: Recipe[];
};

const List = ({
  listFor,
  restaurants,
  recipes = restaurantList[1].recipes as Recipe[],
}: Props) => (
  <div className="container">
    <Container listFor={listFor}>
      {listFor === "restaurant" &&
        (restaurants ?? []).map((r) => (
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

      {listFor === "recipe" &&
        (recipes ?? []).map((recipe) => (
          <RecipeCard
            key={recipe.id}
            image={recipe.image}
            name={recipe.name}
            description={recipe.description}
          />
        ))}
    </Container>
  </div>
);

export default List;
