import React from "react";
import styled from "styled-components";

import Layers from "./Layers";
import Face from "./Face";

const Container = styled.div`
  height: 100%;
  transition: all 0.3s ease-out;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  left: ${props =>
    props.second
      ? props.two
        ? "20px"
        : "-500px"
      : props.two
      ? "0px"
      : "50px"};
  top: ${props => (props.second ? "10px" : "0px")};
`;

export default function Toast(props) {
  return (
    <Container two={props.two} second={props.second}>
      <Layers />
      <Face />
    </Container>
  );
}
