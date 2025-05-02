import Header from "../../components/Header";
import Hero from "../../components/Hero";
import List from "../../components/List";
import { restaurantList } from "../Home";

const Perfil = () => (
  <>
    <Header headerFor="perfil" />
    <Hero />
    <List listFor="recipe" restaurants={restaurantList} />
  </>
);

export default Perfil;
