import React, { useContext } from "react";
import cx from "classnames";
import range from "lodash/range";
import chunk from "lodash/chunk";
import styled from "styled-components";
import moment from "moment";
import DataContext from "../../../Context/DataContext";

const Day = ({ i, w, d, className, ...props }) => {
  const TheTd = styled.td`
    color: #666666;
    user-select: none;
    &:hover {
      background: #fce15f;
      color: #fff;
    }
  `;
  const prevMonth = w === 0 && i > 7;
  const nextMonth = w >= 4 && i <= 14;
  const cls = cx({
    "prev-month": prevMonth,
    "next-month": nextMonth,
    "current-day": !prevMonth && !nextMonth && i === d
  });

  return (
    <TheTd className={cls} {...props}>
      {i}
    </TheTd>
  );
};

export default function Calendar(props) {
  const Container = styled.div`
    display: inline-block;
  `;
  const ToolBar = styled.div`
    line-height: 30px;
    color: #7d7d7d;
    text-align: center;
    margin-bottom: 13px;

    .prev-month {
      float: left;
    }

    .next-month {
      float: right;
    }

    .current-date {
      color: #7d7d7d;
    }
  `;
  const ToolBarButton = styled.button`
    position: relative;
    width: 30px;
    height: 30px;
    line-height: 30px;
    color: #7d7d7d;
    border: 1px solid #fce15f;
    border-radius: 50%;
    background: #fce15f;
    font-size: 20px;
    padding: 0;
    text-align: center;
    outline: 0;
    z-index: 5;
    cursor: pointer;
  `;
  const ToolBarSpan = styled.span`
    color: #fce15f;
    font-weight: bold;
  `;
  const DateTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    table-layout: fixed;
    td {
      padding: 8px 0;
      text-align: center;
      cursor: pointer;
      border: 1px solid #fbefb2;
      color: #7d7d7d;
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      font-size: 12px;
    }
  `;
  const [data, setData] = useContext(DataContext);

  const selectDate = (i, w) => {
    const prevMonth = w === 0 && i > 7;
    const nextMonth = w >= 4 && i <= 14;
    const m = props.moment;

    if (prevMonth) m.subtract(1, "month");
    if (nextMonth) m.add(1, "month");

    m.date(i);

    props.onChange(m);
    setData({
      ...data,
      order: {
        state: data.order.state,
        date: moment(data.order.date)
          .set({ D: i })
          .format("MM/DD H:m")
      }
    });
  };

  const prevMonth = e => {
    e.preventDefault();
    props.onChange(props.moment.subtract(1, "month"));
    setData({
      ...data,
      order: {
        state: data.order.state,
        date: moment(data.order.date)
          .subtract(1, "M")
          .format("MM/DD H:m")
      }
    });
  };

  const nextMonth = e => {
    e.preventDefault();
    props.onChange(props.moment.add(1, "month"));
    setData({
      ...data,
      order: {
        state: data.order.state,
        date: moment(data.order.date)
          .add(1, "M")
          .format("MM/DD H:m")
      }
    });
  };
  //inside render
  const m = props.moment;
  const d = m.date();
  const d1 = m
    .clone()
    .subtract(1, "month")
    .endOf("month")
    .date();
  const d2 = m
    .clone()
    .date(1)
    .day();
  const d3 = m
    .clone()
    .endOf("month")
    .date();
  const days = [].concat(
    range(d1 - d2 + 1, d1 + 1),
    range(1, d3 + 1),
    range(1, 42 - d3 - d2 + 1)
  );
  const weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  //
  return (
    <Container className={cx("m-calendar", props.className)}>
      <ToolBar className="toolbar">
        <ToolBarButton
          type="button"
          className="prev-month"
          onClick={e => prevMonth(e)}
        >
          <i className={props.prevMonthIcon} />
        </ToolBarButton>
        <ToolBarSpan className="current-date">
          {m.format("MMMM YYYY")}
        </ToolBarSpan>
        <ToolBarButton
          type="button"
          className="next-month"
          onClick={e => nextMonth(e)}
        >
          <i className={props.nextMonthIcon} />
        </ToolBarButton>
      </ToolBar>

      <DateTable>
        <thead>
          <tr>
            {weeks.map((w, i) => (
              <td key={i}>{w}</td>
            ))}
          </tr>
        </thead>

        <tbody>
          {chunk(days, 7).map((row, w) => (
            <tr key={w}>
              {row.map(i => (
                <Day
                  key={i}
                  i={i}
                  d={d}
                  w={w}
                  onClick={() => selectDate(i, w)}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </DateTable>
    </Container>
  );
}
