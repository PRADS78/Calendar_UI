import dayjs from "dayjs";
import React, { useContext, useEffect, useState,Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronLeft,faChevronRight} from "@fortawesome/free-solid-svg-icons";
import "./SmallCalendar.scss";
import GlobalContext from "../../../Context/GlobalContext";
import { calendarActions } from "../../../Reducer/CalendarReducer";
import GetMonth from "../../../Utils/Month";

const SmallCalendar = () => {
  const {calendarDispatch,calendarState} = useContext(GlobalContext);
  const [selectedDay, setselectedDay] = useState(dayjs());
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

  const handleSelectedDay = (day) => {
      if (calendarState.currMonthIndex !== day.month()) {
        calendarDispatch({type:calendarActions.SET_CURR_YEAR,payload:day.year()})
        calendarDispatch({type:calendarActions.SET_CURR_MONTH,payload:day.month()})
      }
      
      if(day===selectedDay)
      {setselectedDay("")}
      else{ 
        setselectedDay(day);
        calendarDispatch({type:calendarActions.SET_CURR_DAY,payload:day.date()})}
  };

  const getDayClass = (day) => {
    const format = "DD-MM-YY";
    const today = dayjs().format(format);
    const receivedDay = day.format(format);
    const fadeDay = dayjs(new Date(currYear, currMonth));

    if (today === receivedDay) {
      return "curr-day-bg";
    } 
    else if (
      selectedDay&&
      day.date() === calendarState.currDayIndex&&
      day.month() === calendarState.currMonthIndex
    ) {
      return "other-day-bg";
    } 
    else if (fadeDay.month() !== day.month()) {
      return "faded-bg";
    } 
    else {
      return "";
    }
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
                  className={`days ${getDayClass(day)}`}
                  onClick={() => {
                    handleSelectedDay(day);
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
