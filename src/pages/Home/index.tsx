import { useContext, useEffect } from "react";
import { MyGlobalContext } from "../../context";
import Header from "../../components/Header";
import List from "../../components/List";

const Home = () => {
  const { restaurants, setRestaurants } = useContext(MyGlobalContext);

  useEffect(() => {
    fetch("https://fake-api-tau.vercel.app/api/efood/restaurantes").then(
      (res) => res.json().then((res) => setRestaurants(res))
    );
  }, [setRestaurants]);

  return (
    <>
      <Header headerFor="home" />
      <List listFor="restaurant" restaurants={restaurants} />
    </>
  );
};
export default Home;
