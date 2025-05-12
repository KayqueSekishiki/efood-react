import { useContext } from "react";
import { MyGlobalContext } from "../../context";
import Button from "../Button";

import close from "../../assets/icon/close.svg";

import { ModalContent, Modal as ModalStyle } from "./styles";

import { Dishe as Props } from "../../services/api";

export const formatPrices = (price = 0) => {
  return new Intl.NumberFormat(`pt-BR`, {
    style: "currency",
    currency: "BRL",
  }).format(price);
};

const Modal = ({ id, foto, preco, descricao, nome, porcao }: Props) => {
  const { modalIsVisible, setModalIsVisible } = useContext(MyGlobalContext);

  return (
    <ModalStyle className={modalIsVisible ? "visible" : ""}>
      <ModalContent className=".container">
        <img
          src={close}
          alt="Fechar informações Detalhadas"
          onClick={() => {
            setModalIsVisible(false);
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
          />
        </div>
      </ModalContent>
      <div
        className="overlay"
        onClick={() => {
          setModalIsVisible(false);
        }}
      />
    </ModalStyle>
  );
};

export default Modal;
