import React, { useContext } from "react";
import DataContext from "../../Context/DataContext";
import styled from "styled-components";

import Toast from "./Toast";
const Container = styled.div`
  height: 250px;
  position: relative;
  top: -10px;
  display: flex;
`;
export default function Toasts() {
  return (
    <Container>
      <Toast two={useContext(DataContext)[0].breadCount} />
      <Toast two={useContext(DataContext)[0].breadCount} second />
    </Container>
  );
}
