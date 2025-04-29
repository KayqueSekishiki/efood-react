import styled from "styled-components";
import { colors } from "../../styles";

type Props = {
  backgroundImage: string;
};

export const Container = styled.div`
  padding: 0.5rem;
  background-color: ${colors.pureHearted};
`;

export const ImageContainer = styled.div<Props>`
  width: 100%;
  height: 10.5rem;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  backgroud-repeat: no-repeat;
  padding: 1rem;
`;

export const InfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.pureHearted};
  color: ${colors.flowerBed};
  padding: 0.5rem;
  gap: 0.5rem;
`;

export const NameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 1.125rem;
  font-weight: 700;
`;

export const Description = styled.p`
  height: 5.5rem;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.375rem;
`;
