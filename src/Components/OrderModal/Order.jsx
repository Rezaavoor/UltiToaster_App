import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import SmileySvg from "../../assets/Smiley.svg";
import DataContext from "../../Context/DataContext";

const Container = styled.div`
  width: 80%;
  height: 400px;
  position: absolute;
  top: calc(-550px + 100px);
  background: #f9eeb9;
  opacity: 0.9;
  display: flex;
  border-radius: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: ${props => (props.schedule ? "space-around" : "center")};
  transition: all 0.3s ease-out;
`;
const OkButton = styled.div`
  width: ${props => (props.secondary ? "90px" : "210px")};
  height: ${props => (props.secondary ? "33px" : "42px")};

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
  cursor: pointer;
  margin-top: 30px;
`;
const CurrentTime = styled.div`
  width: 100%;
  height: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  font-size: 0.7rem;
  p {
    margin: 0 5px;
  }
`;
const DatePicker = styled.div``;
export default function Order() {
  const [data, setData] = useContext(DataContext);
  const { state, date } = data.order;
  useEffect(() => {
    clickableAreasHandler(Boolean(state));
    if (document.querySelector(".orderModal"))
      document.querySelector(".orderModal").style.transform =
        "translateY(550px)";
  });

  const clickableAreasHandler = limit => {
    const body = document.querySelector("BODY");
    const modal = document.querySelector(".orderModal");
    if (limit) {
      if (state) {
        // console.log("event listeners are limited");
        body.style.pointerEvents = "none";
        modal.style.pointerEvents = "auto";
      }
    } else {
      // console.log("event listeners are unlimited");
      body.style.pointerEvents = "auto";
    }
  };
  const okButtonHandler = () => {
    clickableAreasHandler(false);
    const modal = document.querySelector(".orderModal");
    modal.removeAttribute("className");
    setData({ ...data, order: { state: "", date: date } });
  };

  const Toast = (
    <Container className='orderModal'>
      <h4>Your Bread Will Be Ready In {date || "1"} Min!</h4>
      <img src={SmileySvg} alt='smiley' />
      <OkButton onClick={() => okButtonHandler()} secondary>
        Ok!
      </OkButton>
    </Container>
  );
  const Schedule = (
    <Container schedule className='orderModal'>
      <CurrentTime>
        <p>{`${new Date().getFullYear()}/${new Date().getMonth()}/${new Date().getDate()}`}</p>
        <p>{`${new Date().getHours()}:${new Date().getMinutes()}`}</p>
      </CurrentTime>
      <p style={{ alignSelf: "flex-start" }}>Pick a date:</p>
      <OkButton onClick={() => okButtonHandler()}>Toast Now!</OkButton>
    </Container>
  );
  return state ? state === "toast" ? Toast : Schedule : <></>;
}
