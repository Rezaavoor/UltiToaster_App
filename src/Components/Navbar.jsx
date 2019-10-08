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

export default function Navbar() {
  const [isAboutModalExpanded, setIsAboutModalExpanded] = useState(false);
  return (
    <Container>
      <About expanded={isAboutModalExpanded} />
      <Logo src={LogoSvg} />
      <div
        style={{
          fontWeight: 1000,
          position: "relative",
          zIndex: 3,
          cursor: "pointer",
          fontSize: isAboutModalExpanded ? "1.6rem" : "1rem"
        }}
        onClick={() => setIsAboutModalExpanded(!isAboutModalExpanded)}
      >
        {isAboutModalExpanded ? "X" : "| | |"}
      </div>
    </Container>
  );
}
