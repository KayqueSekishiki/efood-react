import { useContext } from "react";
import { MyGlobalContext } from "../../context";

import Header from "../../components/Header";
import Hero from "../../components/Hero";
import List from "../../components/List";

const Perfil = () => {
  const { restaurants } = useContext(MyGlobalContext);
  return (
    <>
      <Header headerFor="perfil" />
      <Hero />
      <List listFor="dishe" restaurants={restaurants} />
    </>
  );
};

export default Perfil;
