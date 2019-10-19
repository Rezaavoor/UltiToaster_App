import React, { useState } from "react";
import InputMoment from "./InputMoment";
import moment from "moment";
import styled from "styled-components";

const Container = styled.div`
  width: 220px;
  height: 50vh;
`;
const InputContainer = styled.div`
  margin: 20px;
`;
const Input = styled.input`
  padding: 10px 0;
  font-size: 14px;
  width: 100%;
  border: none;
  color: #7d7d7d;
  text-align: center;
`;

export default function ScheduleInput() {
  const [theMoment, setTheMoment] = useState(moment());
  return (
    <Container>
      <form>
        <InputContainer>
          <Input type="text" value={theMoment.format("llll")} readOnly />
        </InputContainer>
        <InputMoment
          moment={theMoment}
          onChange={() => console.log("changed")}
          minStep={1}
        />
      </form>
    </Container>
  );
}
