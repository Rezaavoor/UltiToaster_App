import React, { useState } from "react";
import styled from "styled-components";
import About from "../Components/About";

import LogoSvg from "../assets/UltiToasterLogo.svg";

const Container = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
`;
const Logo = styled.img`
  width: 171px;
  height: 100px;
`;
const Toggle = styled.div`
  font-weight: 1000;
  position: relative;
  z-index: 3;
  cursor: pointer;
  font-size: ${props => (props.expanded ? "1.6rem" : "1rem")};
`;

export default function Navbar() {
  const [isAboutModalExpanded, setIsAboutModalExpanded] = useState(false);
  return (
    <Container>
      <About expanded={isAboutModalExpanded} />
      <Logo src={LogoSvg} />
      <Toggle
        expanded={isAboutModalExpanded}
        onClick={() => setIsAboutModalExpanded(!isAboutModalExpanded)}
      >
        {isAboutModalExpanded ? "X" : "| | |"}
      </Toggle>
    </Container>
  );
}
