import Restaurant from "../../models/Restaurant";
import Recipe from "../../models/Recipe";
import { Container } from "./styles";
import Card from "../Card";
import Modal from "../Modal";

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
              shortDescription={recipe.shortDescription}
              longDescription={recipe.longDescription}
            />
          ))}
        {recipes && (
          <Modal
            id={recipes[0].id ?? 0}
            image={recipes[0].image}
            name={recipes[0].name}
            longDescription={recipes[0].longDescription}
            value={recipes[0].value}
          />
        )}
      </Container>
    </div>
  );
};

export default List;
