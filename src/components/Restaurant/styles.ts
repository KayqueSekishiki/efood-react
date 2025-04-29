import styled from "styled-components";
import { colors } from "../../styles";

export const Container = styled.div`
  padding: 1rem;
`;

type Props = {
  backgroundImage: string;
};

export const ImageContainer = styled.div<Props>`
  width: 100%;
  height: 13.5rem;
  background-image: url(${(props) => props.backgroundImage});
  padding: 1rem;
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

export const InfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.white};
  padding: 1rem;
  gap: 1rem;
`;

export const NameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 1.125rem;
  font-weight: 700;
`;

export const RateContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Description = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.375rem;
`;
