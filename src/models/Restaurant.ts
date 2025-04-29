import Recipe from "./Recipe";

class Restaurant {
  id: number;
  image: string;
  highlightDay: boolean;
  tags: string[];
  name: string;
  rate: number;
  description: string;
  recipes: Recipe[];

  constructor(
    id: number,
    image: string,
    highlightDay: boolean,
    tags: string[],
    name: string,
    rate: number,
    description: string,
    recipes: Recipe[]
  ) {
    this.id = id;
    this.image = image;
    this.highlightDay = highlightDay;
    this.tags = tags;
    this.name = name;
    this.rate = rate;
    this.description = description;
    this.recipes = recipes;
  }
}

export default Restaurant;
