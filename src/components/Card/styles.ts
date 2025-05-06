import styled from "styled-components";
import { colors } from "../../styles";

type Props = {
  listFor: string;
};

export const Container = styled.div<Omit<Props, "backgroundImage">>`
   padding? ${(props) => (props.listFor === "restaurant" ? "1rem" : "0.5rem")}

${(props) =>
  props.listFor === "dishe" &&
  `
  background-color: ${colors.pureHearted};
`}
`;

export const ImageContainer = styled.div<Props>`
  min-width: 21rem;
  width: 100%;
  height: ${(props) =>
    props.listFor === "restaurant" ? "13.5rem" : "10.5rem"};
  background-size: cover;
  backgroud-repeat: no-repeat;
  padding: 1rem;

  ${(props) =>
    props.listFor === "dishe" &&
    `
    border-width: 0.5rem 0.5rem 0 0.5rem;
    border-style: solid;
    border-color: ${colors.pureHearted};
  `}
`;

export const Tags = styled.div`
  max-height: 7%;
  display: flex;
  align-items: start;
  justify-content: flex-end;
  gap: 0.5rem;
`;
export const Tag = styled.span`
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.375rem 0.25rem;
  background-color: ${colors.pureHearted};
  color: ${colors.flowerBed};
`;

export const InfosContainer = styled.div<Omit<Props, "backgroundImage">>`
  display: flex;
  flex-direction: column;
  background-color: ${(props) =>
    props.listFor === "restaurant" ? colors.white : colors.pureHearted};
  padding: ${(props) => (props.listFor === "restaurant" ? "1rem" : "0.5rem")};
  gap: ${(props) => (props.listFor === "restaurant" ? "1rem" : "0.5rem")};
  border: 0 solid #e66767;
  border-width: 0 1px 1px 1px;

  ${(props) =>
    props.listFor === "dishe" &&
    `
    color: ${colors.flowerBed};
  `}
`;

export const NameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 2.5rem;
  font-size: 1.125rem;
  font-weight: 700;
`;

export const RateContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Description = styled.p<Omit<Props, "backgroundImage">>`
  width: ${(props) => props.listFor === "dishe" && "90%"};
  height: ${(props) => (props.listFor === "restaurant" ? "7rem" : "5.5rem")};
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.375rem;
`;
