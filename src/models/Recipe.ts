class Recipe {
  id: number;
  image: string;
  name: string;
  description: string;
  value: number;

  constructor(
    id: number,
    image: string,
    name: string,
    description: string,
    value: number
  ) {
    this.id = id;
    this.image = image;
    this.name = name;
    this.description = description;
    this.value = value;
  }
}

export default Recipe;
