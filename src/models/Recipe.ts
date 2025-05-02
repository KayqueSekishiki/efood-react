class Recipe {
  id: number;
  image: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  value: number;

  constructor(
    id: number,
    image: string,
    name: string,
    shortDescription: string,
    longDescription: string,
    value: number
  ) {
    this.id = id;
    this.image = image;
    this.name = name;
    this.shortDescription = shortDescription;
    this.longDescription = longDescription;
    this.value = value;
  }
}

export default Recipe;
