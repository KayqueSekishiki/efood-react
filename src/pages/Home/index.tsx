import Header from "../../components/Header";
import RestaurantList from "../../components/RestaurantList";

import hiokiSushi from "../../assets/restaurants/hioki-sushi.svg";
import laDolceVita from "../../assets/restaurants/la-dolce-vita-trattoria.svg";
import Restaurant from "../../models/Restaurant";

export const restaurantList: Restaurant[] = [
  {
    id: 1,
    image: hiokiSushi,
    highlightDay: true,
    tags: ["Japonesa"],
    name: "Hioki Sushi",
    rate: 4.9,
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!",
    recipes: [
      {
        id: 1,
        name: "Sushi",
        description: "O Melhor sushi do Brasil",
        value: 80,
      },
    ],
  },
  {
    id: 2,
    image: laDolceVita,
    highlightDay: false,
    tags: ["Italiana"],
    name: "La Dolce Vita Trattoria",
    rate: 4.6,
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    recipes: [
      {
        id: 1,
        name: "Pizza Marguerita",
        description:
          "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        value: 90,
      },
    ],
  },
  {
    id: 3,
    image: laDolceVita,
    highlightDay: false,
    tags: ["Italiana"],
    name: "La Dolce Vita Trattoria",
    rate: 4.6,
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    recipes: [
      {
        id: 1,
        name: "Pizza Marguerita",
        description:
          "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        value: 90,
      },
    ],
  },
  {
    id: 4,
    image: laDolceVita,
    highlightDay: false,
    tags: ["Italiana"],
    name: "La Dolce Vita Trattoria",
    rate: 4.6,
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    recipes: [
      {
        id: 1,
        name: "Pizza Marguerita",
        description:
          "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        value: 90,
      },
    ],
  },
  {
    id: 5,
    image: laDolceVita,
    highlightDay: false,
    tags: ["Italiana"],
    name: "La Dolce Vita Trattoria",
    rate: 4.6,
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    recipes: [
      {
        id: 1,
        name: "Pizza Marguerita",
        description:
          "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        value: 90,
      },
    ],
  },
  {
    id: 6,
    image: laDolceVita,
    highlightDay: false,
    tags: ["Italiana"],
    name: "La Dolce Vita Trattoria",
    rate: 4.6,
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    recipes: [
      {
        id: 1,
        name: "Pizza Marguerita",
        description:
          "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
        value: 90,
      },
    ],
  },
];

const Home = () => (
  <>
    <Header headerFor="home" />
    <RestaurantList restaurant={restaurantList} />
  </>
);

export default Home;

// this.recipes = recipes;
