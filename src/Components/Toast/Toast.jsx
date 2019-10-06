import React from "react";
import styled from "styled-components";

import Layers from "./Layers";
import Face from "./Face";

const Container = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  left: ${props => (props.second ? "40px" : "-30px")};
  top: ${props => (props.second ? "10px" : "0px")};
`;

export default function Toast(props) {
  return (
    <Container second={props.second}>
      <Layers />
      <Face />
    </Container>
  );
}
