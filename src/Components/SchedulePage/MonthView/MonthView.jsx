import dayjs from "dayjs";
import React, {useState, useContext, Fragment } from "react";
import "./MonthView.scss";
import GetMonthViewAppointment from "../../../Utils/MonthViewAppointment";
import GlobalContext from "../../../Context/GlobalContext";
import MonthEvents from "../../Modal/ViewEventModal/ViewAllAppointment";
import { HandleSelectedDay,GetDayColour } from "../../../Utils/Calendar";

const MonthView = () => {
  const {calendarDispatch, calendarState,appointments} =useContext(GlobalContext);
  
  const [showAppointment, setShowAppointment] = useState(false);
  const [eventChoosen, setEvent] = useState("");
  const [selectedDay, setselectedDay] = useState(dayjs());
  const appointmentsSeparated = GetMonthViewAppointment(calendarState.daysOfCurrMonth,appointments);
  const today=dayjs();

  return (
    <div className="big-cal-month">
      <div className="big-cal-days">
        {calendarState.daysOfCurrMonth.map((row, i) => (
          <React.Fragment key={i}>
            {row.map((day, index) =>

             ( i === 0 ? (                
                <button className="each-day" key={index} onClick={()=>HandleSelectedDay(day,calendarDispatch,calendarState,selectedDay,setselectedDay)} >
                  <span className="week-name"> {day.format("ddd")}</span>
                  <span className={`day-num ${GetDayColour(day,selectedDay,calendarState,{currYear:calendarState.currYearIndex,currMonth:calendarState.currMonthIndex})}`}>
                    {day.format("DD") === "1" && day.format("MMM")}
                    {day.format("DD")}
                  </span>
                  {appointmentsSeparated.map(
                    (event) =>
                      event.date.format("DD-MM-YY") == day.format("DD-MM-YY") && 
                      (
                        <Fragment key={event.date}>
                        <div className="calendar-meet"  onClick={() => { setShowAppointment(true);setEvent(event.date);}}>
                          {"Appointments- " + event.events.length}
                        </div>
                        {showAppointment && event.date == eventChoosen && 
                          (
                            <MonthEvents today={today} appointment={event} setShowAppointment={setShowAppointment}/>
                          )}
                        </Fragment>
                      )
                  )}
                </button>
              ) : (
                <button className="each-day" key={index} onClick={()=>HandleSelectedDay(day,calendarDispatch,calendarState,selectedDay,setselectedDay)}>
                  <span className={`day-num ${GetDayColour(day,selectedDay,calendarState,{currYear:calendarState.currYearIndex,currMonth:calendarState.currMonthIndex})}`} >
                    {day.format("DD")}
                  </span>

                  {appointmentsSeparated.map((event) =>
                    event.date.format("DD-MM-YY") == day.format("DD-MM-YY") && 
                    (
                      <Fragment key={event.date}>
                      <div className="calendar-meet" onClick={() => {
                          setShowAppointment(true);
                          setEvent(event.date);
                        }}
                      >
                        {"Appointments - " + event.events.length}
                        
                      </div>
                      {showAppointment && event.date == eventChoosen && 
                        (
                          <MonthEvents today={today} appointment={event} setShowAppointment={setShowAppointment}/>
                        )}
                      </Fragment>
                    )
                  )}
                </button>
              )
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default MonthView;
