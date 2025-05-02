import styled from "styled-components";
import { colors } from "../../styles";

type Props = {
  backgroundImage: string;
};

export const HeroContainer = styled.div<Props>`
  position: relative;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  height: 17.5rem;
  padding: 2rem 0;

  font-size: 2rem;
  color: ${colors.white};

  .container {
    height: 100%;
    align-items: start;
    justify-content: space-between;
  }

  ::before {
    position: absolute;
    content: "";
    inset: 0;
    background-color: rgba(0, 0, 0, 0.25);
    z-index: 0;
  }
`;

export const Tag = styled.span`
  font-weight: 100;
  z-index: 1;
`;

export const Title = styled.span`
  font-weight: 900;
  z-index: 1;
`;
