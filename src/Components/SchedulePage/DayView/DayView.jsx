import dayjs from "dayjs";
import React, { useContext, useEffect, useState,useRef } from "react";
import GlobalContext from "../../../Context/GlobalContext";
import GetHour from "../../../Utils/Hour";
import "./DayView.scss";
import Appointment from "../../AppointmentCard/Appointment";
import { actions } from "../../../Reducer/ModalReducer";
import GetCurrTimeStyle from "../../../Utils/CurrTimeStyle";
import GetTimeLineEvents from "../../../Utils/TimeLineSeparator";
import GetAppointments from "../../../Utils/Appointments";

const DayView = () => {

  const {appointments,setTimeStamp,modalDispatch,calendarState,} = useContext(GlobalContext);
  const [scroll, setScroll] = useState(false);
  const scrollRef = useRef();

  const CURRENT_DATE = dayjs(new Date(calendarState.currYearIndex, calendarState.currMonthIndex, calendarState.currDayIndex) );
  const selectedDateAppointments=GetAppointments(appointments,CURRENT_DATE);
  console.log(selectedDateAppointments);
  const timeLineData=GetTimeLineEvents(selectedDateAppointments,CURRENT_DATE);
  const currTimeStyle=GetCurrTimeStyle();
  const today=dayjs();
  const arrayOfTime = GetHour();

  const handleCreateModal = (hour) => {
    const currDate = CURRENT_DATE;
    const endTime = currDate
      .add(hour.hour() + 1, "hours")
      .format("YYYY-MM-DDTHH:mm");
    const startTime = currDate
      .add(hour.hour(), "hours")
      .format("YYYY-MM-DDTHH:mm");
    const timeStamp = { startTime, endTime };
    setTimeStamp(timeStamp);
    modalDispatch({ type: actions.ADD_EVENT });
  };

  const handleScroll = () => {
    const scrolledFromTop = scrollRef.current.scrollTop;
    setScroll(scrolledFromTop > 12);
  };


  return (
    <>
      <div className={`day-view-parent ${scroll && "header-border"}`}>
        <div className="time-view" onScroll={handleScroll} ref={scrollRef}>
          <div>
            {arrayOfTime.map((hour, index) => (
              <div className="time-container" key={index}>
                <div className="time-stamp">{hour.format("h a")}</div>
                <div className="dotted-lines"></div>
                <div className="dotted-lines"></div>
                <div className="dotted-lines"></div>
              </div>
            ))}
              <div className="add-time-container">
                <div className="add-time-stamp">12 am</div>
              </div>
          </div>

          <div className="timeline-container" >
            {today.format("DD-MM-YY")===CURRENT_DATE.format("DD-MM-YY")&&<div className="curr-time" style={currTimeStyle}></div>}
            {arrayOfTime.map((hour, index) => (<div className={`timeline ${hour.format("H")=="23"&&"add-container-bottom"}`} key={index} onClick={() => handleCreateModal(hour)}></div>))}
            <div>
              {timeLineData?.map((event, index) => (
                <div key={index} onClick={() => {modalDispatch({type:actions.SET_VIEW_EVENT,payload:event.appointment})}}className="day-view-appointment-card">
                  <Appointment event={event} />
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default DayView;
