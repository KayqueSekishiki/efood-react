import { Container } from "./styles";
import Recipe from "../../components/Recipe";
import { restaurantList } from "../../pages/Home";

type Props = {
  image: string;
  name: string;
  description: string;
};

const recipes: Props[] = restaurantList[1].recipes as Props[];

const RecipesList = () => (
  <div className="container">
    <Container>
      {recipes.map((recipe) => (
        <Recipe
          image={recipe.image}
          name={recipe.name}
          description={recipe.description}
        />
      ))}
    </Container>
  </div>
);

export default RecipesList;
