import styled from "styled-components";

import backgroundHeader from "../../assets/backgroundHeader.svg";

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${backgroundHeader});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 4rem 0;
  font-weight: 900;

  .container {
    gap: 8.5rem;
  }
`;

export const HeaderBar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  a {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const Title = styled.h1`
  width: 30rem;
  text-align: center;
`;
