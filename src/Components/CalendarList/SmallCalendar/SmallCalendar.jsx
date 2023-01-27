import dayjs from "dayjs";
import React, { useContext, useEffect, useState,Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronLeft,faChevronRight} from "@fortawesome/free-solid-svg-icons";
import "./SmallCalendar.scss";
import GlobalContext from "../../../Context/GlobalContext";
import {GetDayColour, GetMonth,HandleSelectedDay} from "../../../Utils/Calendar";

const SmallCalendar = () => {
  const {calendarDispatch,calendarState} = useContext(GlobalContext);
  const [selectedDay, setSelectedDay] = useState(dayjs());
  const [currYear, setCurrYear] = useState(dayjs().year());
  const [currMonth, setCurrMonth] = useState(dayjs().month());  
  const [daysOfCurrMonth, setDaysOfCurrMonth] = useState(GetMonth());

  useEffect(() => {
    setDaysOfCurrMonth(GetMonth(currMonth, currYear));
  }, [currMonth, currYear]);

  useEffect(() => {
    setCurrMonth(calendarState.currMonthIndex);
    setCurrYear(calendarState.currYearIndex);
  }, [calendarState.currMonthIndex,calendarState.currYearIndex]);

  const handlePrevMonth = () => {
    setCurrMonth(currMonth - 1);
  };

  const handleNextMonth = () => {
    setCurrMonth(currMonth + 1);
  };

  return (
    <div className="calendar">
      <header className="cal-header">
          <div className="month-year">
            <span title="currMonth-currYear">
              {dayjs(new Date(currYear,currMonth))
                .format(" MMMM YYYY")
                .toString()}
            </span>
          </div>

          <div className="month-nav-btns">
          <button title="prev-month" onClick={handlePrevMonth}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          <button title="next-month" onClick={handleNextMonth}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
          </div>
      </header>

      <div className="cal-month">
      <div className="cal-week-days">
          {calendarState.daysOfCurrMonth[0].map((day, index) => (
            <span key={index} className="week-days" title={`${day.format("dddd")}`}>
              {day.format("ddd")}
            </span>
          ))}
        </div>
        <div className="cal-days">
          {daysOfCurrMonth.map((row, index) => (
            <Fragment key={index}>
              {row.map((day, index) => (
                <button
                  className={`days ${GetDayColour(day,selectedDay,calendarState,{currYear:currYear,currMonth:currMonth})}`}
                  onClick={() => {
                    HandleSelectedDay(day,calendarDispatch,calendarState,selectedDay,setSelectedDay);
                  }}
                  key={index}
                  title={`${day.format("DD-MM-YYYY")}`}
                >
                  <span>{day.format("D")}</span>
                </button>
              ))}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SmallCalendar;
