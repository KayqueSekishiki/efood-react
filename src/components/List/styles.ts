import styled from "styled-components";

type Props = {
  listFor: string;
};

export const Container = styled.div<Props>`
  display: grid;
  grid-template-columns: ${({ listFor }) =>
    listFor === "restaurant" ? "1fr 1fr" : "1fr 1fr 1fr"};
  padding: 5rem 0 7.5rem;
  gap: 3rem 5rem;
`;
