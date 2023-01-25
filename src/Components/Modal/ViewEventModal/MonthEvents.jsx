import { useContext} from "react";
import React from "react";
import { CloseButton } from "../../Buttons/Buttons";
import "./MonthEvents.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import GlobalContext from "../../../Context/GlobalContext";
import { actions } from "../../../Reducer/ModalReducer";
import MonthViewSchedule from "../../../Assests/ModalIcons/MonthViewSchedule.svg"
import AppointmentDetails from "../../AppointmentCard/AppointmentDetails";


import { createPortal } from "react-dom";

const MonthEvent = ({today,appointment,setShowAppointment}) => {
  const {modalDispatch } = useContext(GlobalContext);
  return createPortal(
    <>
        <div className="month-view-pop-up-overlay" onClick={()=>{setShowAppointment(false)}}>
          <div className="month-view-pop-up-box" onClick={(e) => {e.stopPropagation();}}>
            <div className="month-view-event-content">
              <div className="month-view-event-head">
              <div className="month-view-event-title">
                <img src={MonthViewSchedule} alt="MonthViewSchedule" />
                {appointment?.date.format("dddd DD, YYYY")}
              </div>
              {appointment?.date.date()>=today.date()&&<FontAwesomeIcon title="create-event" icon={faPlus} className="month-view-create-btn" onClick={()=>{modalDispatch({type:actions.ADD_EVENT})}}/>}
              
              </div>



              <div className="month-view-event-body">  
                {appointment?.events.map((event, index) => (
                  <div className="month-view-appointment" key={event.appointmentId} onClick={() => modalDispatch({ type: actions.SET_VIEW_EVENT, payload: event,})}>
                  <AppointmentDetails event={event}/>
                  </div>
                ))}

              </div>
            </div>

            <div className="month-view-event-popup-btn">
              <span onClick={()=>
              setShowAppointment(false)}>
                <CloseButton />
              </span>
            </div>
          </div>
        </div>
      
    </>,
    document.getElementById('modal')
  );
};

export default MonthEvent;
