import cx from "classnames";
import React, { useContext } from "react";
import InputSlider from "react-input-slider";
import styled from "styled-components";
import DataContext from "../../../Context/DataContext";
import moment from "moment";

export default function Time(props) {
  const Container = styled.div`
    color: #fff;
    padding-top: 50px;
  `;
  const ShowTimeContainer = styled.div`
    text-align: center;
  `;
  const SlidersContainer = styled.div`
    padding: 0 10px;
  `;
  const TimeSpan = styled.span`
    width: 65px;
    height: 65px;
    display: inline-block;
    font-size: 38px;
    line-height: 65px;
    background-color: #fce15f;
    border-radius: 3px;
    text-align: center;
  `;
  const SeparaterSpan = styled.div`
    display: inline-block;
    font-size: 32px;
    font-weight: bold;
    color: #fce15f;
    width: 32px;
    height: 65px;
    line-height: 65px;
    text-align: center;
  `;
  const TimeTextContainer = styled.div`
    position: relative;
    left: -10px;
    font-size: 15px;
    color: #7d7d7d;
    margin-top: 7px;
    margin-bottom: 10px;
  `;

  const [data, setData] = useContext(DataContext);

  const changeHours = pos => {
    const m = props.moment;
    m.hours(pos.x);
    props.onChange(m);
    setData({
      ...data,
      order: {
        state: data.order.state,
        date: moment(data.order.date)
          .set({ h: pos.x })
          .format("MM/DD H:m")
      }
    });
  };

  const changeMinutes = pos => {
    const m = props.moment;
    m.minutes(pos.x);
    props.onChange(m);
    setData({
      ...data,
      order: {
        state: data.order.state,
        date: moment(data.order.date)
          .set({ m: pos.x })
          .format("MM/DD H:m")
      }
    });
  };

  const m = props.moment;
  return (
    <Container className={cx("m-time", props.className)}>
      <ShowTimeContainer className="showtime">
        <TimeSpan className="time">{m.format("HH")}</TimeSpan>
        <SeparaterSpan className="separater">:</SeparaterSpan>
        <TimeSpan className="time">{m.format("mm")}</TimeSpan>
      </ShowTimeContainer>

      <SlidersContainer className="sliders">
        <TimeTextContainer className="time-text">Hours:</TimeTextContainer>
        <InputSlider
          styles={{
            track: {
              backgroundColor: "#7d7d7d",
              border: "none",
              height: "2px"
            },
            active: {
              backgroundColor: "#fce15f",
              border: "none",
              height: "2px"
            },

            thumb: {
              width: 20,
              height: 20,
              opacity: 1,
              boxShadow: "none",
              border: "2px solid #fce15f"
            }
          }}
          xmin={0}
          xmax={23}
          xstep={1}
          x={moment(data.order.date).hours()}
          onChange={e => changeHours(e)}
        />
        <TimeTextContainer className="time-text">Minutes:</TimeTextContainer>
        <InputSlider
          styles={{
            track: {
              backgroundColor: "#7d7d7d",
              border: "none",
              height: "2px"
            },
            active: {
              backgroundColor: "#fce15f",
              border: "none",
              height: "2px"
            },

            thumb: {
              width: 20,
              height: 20,
              opacity: 1,
              boxShadow: "none",
              border: "2px solid #fce15f"
            }
          }}
          xmin={0}
          xmax={59}
          xstep={1}
          x={moment(data.order.date).minutes()}
          onChange={e => changeMinutes(e)}
        />
      </SlidersContainer>
    </Container>
  );
}
