import styled from "styled-components";

type Props = {
  list: string;
};

export const Container = styled.div<Props>`
  display: grid;
  grid-template-columns: ${({ list }) =>
    list === "restaurant" ? "1fr 1fr" : "1fr 1fr 1fr"};
  padding: ${({ list }) => (list === "restaurant" ? "5rem" : "3.5rem")} 0 7.5rem;
  gap: ${({ list }) => (list === "restaurant" ? "3rem 5rem" : "2rem")};
`;
