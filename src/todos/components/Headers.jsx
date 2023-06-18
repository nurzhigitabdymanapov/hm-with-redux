import React from "react";
import { Auth } from "./Auth";
import { styled } from "styled-components";

export const Headers = () => {
  return (
    <Container>
      <Auth />
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  justify-content: center;
`