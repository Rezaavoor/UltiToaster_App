import React from "react";
import styled from "styled-components";

const Modal = styled.div`
  width: ${props => (props.expanded ? "1000px" : "200px")};
  height: ${props => (props.expanded ? "1000px" : "200px")};
  position: absolute;
  z-index: 2;
  background-color: #ffdf49;
  color: black;
  border-radius: 50%;
  top: -200px;
  right: -200px;
  transition: all 0.5s ease-out;
`;
const Container = styled.div`
  opacity: ${props => (props.expanded ? "1" : "0")};
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 3;
  left: 0;
  top: 0;
  transition: all ${props => (props.expanded ? "1s" : "0.1s")} ease-in;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  pointer-events: ${props => (props.expanded ? "auto" : "none")};
`;
const Link = styled.a`
  font-size: 1.2rem;
  &:link,
  &:visited {
    text-decoration: none;
    color: white;
    background: #707070;
  }
  margin: 5px;
  padding: 4px;
`;
export default function About(props) {
  return (
    <>
      <Modal expanded={props.expanded} />
      <Container expanded={props.expanded}>
        <h2>UltiToaster</h2>
        <p>
          Created By
          <Link href="https://www.rezahosseini.me" target="_blank">
            Reza Hosseini
          </Link>
        </p>
      </Container>
    </>
  );
}
