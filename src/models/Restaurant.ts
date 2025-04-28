class Restaurant {
  id: number;
  image: string;
  tags: string[];
  name: string;
  rate: number;
  description: string;
  recipes: object[];

  constructor(
    id: number,
    image: string,
    tags: string[],
    name: string,
    rate: number,
    description: string,
    recipes: object[]
  ) {
    this.id = id;
    this.image = image;
    this.tags = tags;
    this.name = name;
    this.rate = rate;
    this.description = description;
    this.recipes = recipes;
  }
}

export default Restaurant;
