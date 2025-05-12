import styled from "styled-components";
import { colors } from "../../styles";
import { Button } from "../Button/styles";

import dump from "../../assets/icon/dump.svg";

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`;

export const Sidebar = styled.aside`
  max-width: 22.5rem;
  width: 100%;
  background-color: ${colors.pureHearted};
  z-index: 1;
  padding: 2.5rem 1rem;

  ${Button} {
    max-width: 100%;
    width: 100%;
  }
`;

export const Prices = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  font-size: 0.875rem;
  color: ${colors.flowerBed};
  margin: 2.5rem 0 1rem;

  span {
    display: block;
    font-size: 0.75rem;
  }
`;

export const CartItem = styled.li`
  position: relative;
  display: flex;
  padding: 0.5rem;
  background-color: ${colors.flowerBed};
  gap: 1.25rem;
  margin-bottom: 1rem;

  img {
    width: 5rem;
    height: 5rem;
    object-fit: cover;
  }

  h3 {
    font-weight: 900;
    font-size: 1.125rem;
    margin-bottom: 1rem;
  }

  span {
    display: block;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.375rem;
  }

  button {
    background-image: url(${dump});
    width: 1rem;
    height: 1rem;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 0.5rem;
    right: 0.5rem;
    cursor: pointer;
  }
`;
