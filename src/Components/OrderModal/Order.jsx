import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import SmileySvg from "../../assets/Smiley.svg";
import DataContext from "../../Context/DataContext";
import ScheduleInput from "./Schedule/ScheduleInput";
import moment from "moment";

const Container = styled.div`
  width: 90%;
  height: 70vh;
  position: absolute;
  top: calc(-70vh + 100px);
  background: #fff5c9;
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
export default function Order() {
  const [data, setData] = useContext(DataContext);
  const { state, date } = data.order;
  useEffect(() => {
    clickableAreasHandler(Boolean(state));
    if (document.querySelector(".orderModal"))
      document.querySelector(".orderModal").style.transform =
        "translateY(70vh)";
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
    setData({
      ...data,
      order: {
        state: state === "schedule" ? "toast" : "",
        date: state === "schedule" ? date : moment().format("MM/DD H:m")
      }
    });
  };
  const momentDate = moment(date);
  const fromNow = [
    moment().year(),
    momentDate.month(),
    momentDate.date(),
    momentDate.hours(),
    momentDate.minutes() + 2
  ];
  const Toast = (
    <Container className="orderModal">
      <h4>Your bread will be ready {moment(fromNow).fromNow() || "1"}!</h4>
      <img src={SmileySvg} alt="smiley" />
      <OkButton onClick={() => okButtonHandler()}>Ok!</OkButton>
    </Container>
  );
  const Schedule = (
    <Container schedule className="orderModal">
      <ScheduleInput />
      <OkButton onClick={() => okButtonHandler()}>Schedule!</OkButton>
    </Container>
  );
  return state ? state === "toast" ? Toast : Schedule : <></>;
}
