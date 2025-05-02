import { useContext } from "react";
import { Restaurant, MyGlobalContext } from "../../context";
import { Container } from "./styles";
import Card from "../Card";
import Modal from "../Modal";

type Props = {
  listFor: "restaurant" | "dishe";
  restaurants: Restaurant[];
};

const List = ({ listFor, restaurants }: Props) => {
  const { selectedRestaurant, selectedDish } = useContext(MyGlobalContext);

  return (
    <div className="container">
      <Container list={listFor}>
        {listFor === "restaurant" &&
          restaurants.map((restaurant) => (
            <Card
              listFor={listFor}
              key={restaurant.id}
              id={restaurant.id}
              titulo={restaurant.titulo}
              destacado={restaurant.destacado}
              tipo={restaurant.tipo}
              avaliacao={restaurant.avaliacao}
              descricao={restaurant.descricao}
              capa={restaurant.capa}
              cardapio={restaurant.cardapio}
            />
          ))}

        {listFor === "dishe" &&
          selectedRestaurant?.cardapio.map((dishe) => (
            <Card
              listFor={listFor}
              key={dishe.id}
              id={dishe.id}
              foto={dishe.foto}
              nome={dishe.nome}
              descricao={dishe.descricao}
              porcao={dishe.porcao}
              preco={dishe.preco}
            />
          ))}

        <Modal
          id={selectedDish?.id ?? 0}
          foto={selectedDish?.foto ?? ""}
          nome={selectedDish?.nome ?? ""}
          descricao={selectedDish?.descricao ?? ""}
          preco={selectedDish?.preco ?? 0}
          porcao={selectedDish?.porcao ?? ""}
        />
      </Container>
    </div>
  );
};

export default List;
