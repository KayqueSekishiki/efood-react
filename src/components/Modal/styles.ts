import styled from "styled-components";
import { colors } from "../../styles";

export const Modal = styled.div`
  display: none;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  &.visible {
    display: flex;
  }

  .overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.75);
  }
`;

export const ModalContent = styled.div`
  position: relative;
  display: flex;
  width: 64rem;
  padding: 2rem;
  gap: 1.5rem;
  z-index: 1;
  background-color: ${colors.pureHearted};
  color: ${colors.white};

  img:first-child {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    display: block;
    width: 1rem;
    height: 1rem;
    cursor: pointer;
  }

  img {
    width: 18rem;
    height: 18rem;

    object-fit: cover;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h3 {
      font-size: 1.125rem;
      font-weight: 900;
      line-height: 100%;
    }

    p {
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.375rem;
    }

    button {
      max-width: 40%;
    }
  }
`;
