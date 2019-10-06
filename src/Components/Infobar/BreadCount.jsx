import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const SeekbarContainer = styled.div`
  width: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Seekbar = styled.input`
  appearance: none;
  width: 100%;
  height: 100%;
  background: transparent;
  outline: none;

  //WEBKIT
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: #fee77d;
    border: 1px solid #707070;
    margin-top: -1px;
    box-shadow: 1px 1px 2px rgba(#000, 0.5);
  }

  &::-webkit-slider-runnable-track {
    height: 15px;
    background: #eee;
    border-radius: 3rem;
  }
`;
export default function BreadCount() {
  const [breadCount, setBreadCount] = useState(1);
  return (
    <Container>
      <p>{`How Many Bread? ${breadCount}`}</p>
      <SeekbarContainer>
        1
        <Seekbar
          type='range'
          min='1'
          max='2'
          onChange={e => setBreadCount(e.target.value)}
        />
        2
      </SeekbarContainer>
    </Container>
  );
}
