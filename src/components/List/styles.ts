import styled from "styled-components";

type Props = {
  list: string;
};

export const Container = styled.div<Props>`
  display: grid;
  grid-template-columns: ${({ list }) =>
    list === "restaurant" ? "1fr 1fr" : "1fr 1fr 1fr"};
  padding: 5rem 0 7.5rem;
  gap: 3rem 5rem;
`;
