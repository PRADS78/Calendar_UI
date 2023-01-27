import SmallCalendar from "./SmallCalendar/SmallCalendar";
import Agenda from "./Agenda/Agenda";
import { CreateButton } from "../Buttons/Buttons";
import "./CalendarList.scss";
import { useContext,useEffect } from "react";
import GlobalContext from "../../Context/GlobalContext";
import { actions } from "../../Reducer/ModalReducer";
import dayjs from "dayjs";
import { useState } from "react";
import { TodayButton } from "../Buttons/Buttons";
import { calendarActions } from "../../Reducer/CalendarReducer";

const CalendarList=()=> {
  const  {modalDispatch,calendarState,setTimeStamp,calendarDispatch}=useContext(GlobalContext)
  const [isCreateOpen,setCreateOpen]=useState(false);
  const CURRENT_DATE = dayjs(new Date(calendarState.currYearIndex, calendarState.currMonthIndex, calendarState.currDayIndex) );
  
  useEffect(() => {
    const currenthour = dayjs();
    const endTime = CURRENT_DATE
      .add(currenthour.hour() + 1, "hours")
      .format("YYYY-MM-DDTHH:mm");
    const startTime = CURRENT_DATE
      .add(currenthour.hour(), "hours")
      .format("YYYY-MM-DDTHH:mm");
    const timeStamp = { startTime, endTime };
    setTimeStamp(timeStamp);
    setCreateOpen(false);
  }, [CURRENT_DATE.date(),isCreateOpen]);

    
  const handleReset = () => {
    calendarDispatch({type:calendarActions.RESET_TODAY,payload:calendarState.currMonthIndex === dayjs().month()? calendarState.currMonthIndex + Math.random(): dayjs().month()})
  };

  return (
    <div className="cal-list-panel">

        <div className="event-btn">
            <div  onClick={handleReset} title="reset-to-today's-date">
                <TodayButton />
            </div>
            <div className="create-event-btn" onClick={()=>{ {setCreateOpen(true); modalDispatch({ type: actions.ADD_EVENT });}}} title="create">          
              <CreateButton/>
            </div>
        </div>    
      <SmallCalendar />
      <Agenda/>
    </div>
  );
}

export default CalendarList;
