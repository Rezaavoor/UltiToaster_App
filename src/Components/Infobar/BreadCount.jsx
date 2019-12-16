import React, { useContext } from "react";
import styled from "styled-components";

import DataContext from "../../Context/DataContext";

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
  const [data, setData] = useContext(DataContext);
  return (
    <Container>
      <p>{`How Many Bread? ${data.breadCount ? 2 : 1}`}</p>
      <SeekbarContainer>
        1
        <Seekbar
          type='range'
          min='0'
          max='1'
          value={data.breadCount}
          onChange={e =>
            setData({
              ...data,
              breadCount: parseInt(e.target.value)
            })
          }
        />
        2
      </SeekbarContainer>
    </Container>
  );
}
