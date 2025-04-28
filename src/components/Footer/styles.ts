import styled from "styled-components";
import { cores } from "../../styles";

export const Container = styled.footer`
  height: 18.75rem;
  background-color: ${cores.flowerBed};
  padding: 2.5rem 0;
  font-size: 0.625rem;

  p {
    width: 25rem;
    text-align: center;
  }
`;

export const Links = styled.ul`
  display: flex;
  gap: 0.5rem;
  margin: 2rem 0 5rem 0;
`;
