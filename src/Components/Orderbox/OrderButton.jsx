import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: ${props => (props.secondary ? "90px" : "310px")};
  height: ${props => (props.secondary ? "33px" : "52px")};

  background: ${props =>
    props.secondary
      ? "linear-gradient(to right, #FFF5C9, #FEEC9D)"
      : "linear-gradient(to right, #ffdf49, #fee77d)"};

  box-shadow: 0px 3px ${props => (props.secondary ? 24 : 12)}px #00000026;
  font-size: 1rem;
  border-radius: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function OrderButton(props) {
  return <Container secondary={props.secondary}>{props.children}</Container>;
}
