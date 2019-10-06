import React from "react";
import styled from "styled-components";

import OrderButton from "./OrderButton";

const Container = styled.div`
  width: 90%;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
export default function Orderbox() {
  return (
    <Container>
      <OrderButton>Toast Now!</OrderButton>
      <p>or</p>
      <OrderButton secondary>Schedule</OrderButton>
    </Container>
  );
}
