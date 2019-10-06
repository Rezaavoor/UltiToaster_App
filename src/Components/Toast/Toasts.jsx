import React from "react";
import styled from "styled-components";

import Toast from "./Toast";
const Container = styled.div`
  height: 250px;
  position: relative;
  top: -30px;
  display: flex;
`;
export default function Toasts() {
  return (
    <Container>
      <Toast />
      <Toast second />
    </Container>
  );
}
