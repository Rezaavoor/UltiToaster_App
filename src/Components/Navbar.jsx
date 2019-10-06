import React from "react";
import styled from "styled-components";

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
  return (
    <Container>
      <Logo src={LogoSvg} />
      <div style={{ fontWeight: 1000 }}>| | |</div>
    </Container>
  );
}
