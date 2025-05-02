import { useContext } from "react";
import { MyGlobalContext } from "../../context";
import Button from "../Button";

import close from "../../assets/icon/close.svg";

import { ModalContent, Modal as ModalStyle } from "./styles";

type Props = {
  id: number;
  image: string;
  name: string;
  longDescription: string;
  value: number;
};

const Modal = ({ id, image, name, longDescription, value }: Props) => {
  const { modalIsVisible, setModalIsVisible } = useContext(MyGlobalContext);

  return (
    <>
      <ModalStyle className={modalIsVisible ? "visible" : ""}>
        <ModalContent className=".container">
          <img
            src={close}
            alt="Fechar informações Detalhadas"
            onClick={() => {
              setModalIsVisible(false);
            }}
          />
          <img src={image} alt={`Imagem da ${name}`} />
          <div>
            <h3>{name}</h3>
            <p>{longDescription}</p>
            <p>Serve: 2 a 3 pessoas</p>
            <Button
              buttonFor="modal"
              text={`Adicionar ao carrinho - R$ ${value}`}
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
    </>
  );
};

export default Modal;
