import React from "react";
import styled from "styled-components";

import Timer from "./Timer";
import BreadCount from "./BreadCount";

const Container = styled.div`
  height: 150px;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export default function Infobar() {
  return (
    <Container>
      <Timer />
      <BreadCount />
    </Container>
  );
}
