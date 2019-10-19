import cx from "classnames";
import React, { useState } from "react";
import styled from "styled-components";
import Calendar from "./Calendar";
import Time from "./Time";

export default function InputMoment(props) {
  const Container = styled.div`
    width: 220px;
    border-radius: 3px;
  `;
  const OptionsContainer = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 4px;
  `;
  const TabsContainer = styled.div`
    margin-bottom: 11px;
  `;
  const DateTimeButton = styled.div`
    display: inline-block;
    background-color: #ffffff;
    outline: 0;
    cursor: pointer;
    line-height: 1;

    &:before {
      margin-right: 6px;
    }
    width: 50%;
    color: #fce15f;
    text-align: center;
    font-size: 16px;
    padding: 7px;
    border: 1px solid #fce15f;
    border-radius: 3px;

    &:first-child {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    &:last-child {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }

    &.is-active {
      color: #ffffff;
      background-color: #fce15f;
    }
  `;
  const Tab = styled.div`
    display: none;
    height: 310px;

    &.is-active {
      display: block;
    }
  `;

  InputMoment.defaultProps = {
    prevMonthIcon: "ion-ios-arrow-left",
    nextMonthIcon: "ion-ios-arrow-right",
    minStep: 1,
    hourStep: 1
  };
  const [tab, setTab] = useState(0);

  const handleClickTab = (e, tab) => {
    e.preventDefault();
    setTab(tab);
  };

  const { moment: m, className } = props;
  const cls = cx("m-input-moment", className);
  return (
    <Container className={cls} {...props}>
      <OptionsContainer className="options">
        <DateTimeButton
          type="button"
          className={cx("ion-calendar im-btn", { "is-active": tab === 0 })}
          onClick={e => handleClickTab(e, 0)}
        >
          Date
        </DateTimeButton>
        <DateTimeButton
          type="button"
          className={cx("ion-clock im-btn", { "is-active": tab === 1 })}
          onClick={e => handleClickTab(e, 1)}
        >
          Time
        </DateTimeButton>
      </OptionsContainer>

      <TabsContainer className="tabs">
        <Tab className={cx("tab", { "is-active": tab === 0 })}>
          <Calendar
            className={cx("tab", { "is-active": tab === 0 })}
            moment={m}
            onChange={props.onChange}
            prevMonthIcon={props.prevMonthIcon}
            nextMonthIcon={props.nextMonthIcon}
          />
        </Tab>
        <Tab className={cx("tab", { "is-active": tab === 1 })}>
          <Time
            className={cx("tab", { "is-active": tab === 1 })}
            moment={m}
            minStep={props.minStep}
            hourStep={props.hourStep}
            onChange={props.onChange}
          />
        </Tab>
      </TabsContainer>
    </Container>
  );
}
