import { useDispatch, useSelector } from "react-redux";
import Button from "../Button";

import close from "../../assets/icon/close.svg";

import { ModalContent, Modal as ModalStyle } from "./styles";

import { Dish, Dish as Props } from "../../services/api";
import { RootReducer } from "../../store";
import { add, open } from "../../store/reducers/cart";

import { close as closeDetailsModal } from "../../store/reducers/detailsModal";

export const formatPrices = (price = 0) => {
  return new Intl.NumberFormat(`pt-BR`, {
    style: "currency",
    currency: "BRL",
  }).format(price);
};

const Modal = ({ id, foto, preco, descricao, nome, porcao }: Props) => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state: RootReducer) => state.detailsModal);

  const openCart = () => {
    dispatch(open());
  };

  const addItem = (id: Dish) => {
    dispatch(add(id));
  };

  const closeModal = () => {
    dispatch(closeDetailsModal());
  };

  return (
    <ModalStyle className={isOpen ? "visible" : ""}>
      <ModalContent className=".container">
        <img
          src={close}
          alt="Fechar informações Detalhadas"
          onClick={() => {
            closeModal();
          }}
        />
        <img src={foto} alt={`Imagem da ${nome}`} />
        <div>
          <h3>{nome}</h3>
          <p>{descricao}</p>
          <p>Serve: {porcao}</p>
          <Button
            buttonFor="modal"
            text={`Adicionar ao carrinho - ${formatPrices(preco)}`}
            onClick={() => {
              addItem({ id, foto, preco, descricao, nome, porcao });
              closeModal();
              openCart();
            }}
          />
        </div>
      </ModalContent>
      <div
        className="overlay"
        onClick={() => {
          closeModal();
        }}
      />
    </ModalStyle>
  );
};

export default Modal;
