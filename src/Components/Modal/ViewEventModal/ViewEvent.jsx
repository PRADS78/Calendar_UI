import { useContext, useState } from "react";
import React from "react";
import EllipsisButton from "../../Buttons/Ellipsis/EllipsisButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark,faFileLines,faClock,} from "@fortawesome/free-solid-svg-icons";
import { faCalendarCheck } from "@fortawesome/free-regular-svg-icons";
import { CloseButton } from "../../Buttons/Buttons";
import "./ViewEvent.scss";
import GlobalContext from "../../../Context/GlobalContext";
import dayjs from "dayjs";
import { actions } from "../../../Reducer/ModalReducer";
import { handleDeleteEvent } from "../../../ApiHandler/HandleDelete";
import useGetApi from "../../../ApiHandler/HandleGet";
import { DeleteButton } from "../../Buttons/Buttons";
import Alert from "../AlertModal/Alert";

const ViewEvent = () => {
  const {modalState,modalDispatch,monthView}=useContext(GlobalContext);
  const {handleGetByDate,handleGetByMonth}=useGetApi();
  const [isDelete,setDelete]=useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleDelete=()=>
  {
    modalDispatch({type:actions.REQUEST_LOADER});
    handleClose();
    setTimeout(()=>
    {
      handleDeleteEvent(modalState.viewEvent.appointmentId,modalDispatch,monthView,handleGetByDate,handleGetByMonth,actions)
      modalDispatch({type:actions.REQUEST_LOADER});
    },1000)
    
  }

  const handleEdit=()=>
  {
    handleClose()
    modalDispatch({type:actions.SET_UPDATE_EVENT,payload:modalState.viewEvent}); 
  }

  const handleClose=()=>
  {
    modalDispatch({type:actions.SET_VIEW_EVENT,payload:null})
  }

  
  return (
    <>
      {modalState.viewEvent != null &&(
        <div className="view-pop-up-overlay" onClick={handleClose}>
          <div className="view-pop-up-box" onClick={(e) => {e.stopPropagation()
          isOpen&&setIsOpen(false);
           }}>
            <div className="view-event-header">
              <div className="appointment">
                Appointment
              </div>
              <div className="view-header-icons">
              <span className="view-header-ellipsis">
                <EllipsisButton isOpen={isOpen} setIsOpen={setIsOpen} handleEdit={handleEdit} setDelete={setDelete} isDelete={isDelete}/>
              </span>
              <FontAwesomeIcon  icon={faXmark} size={"lg"} onClick={handleClose} className=" view-faXmark-btn"/>
              </div>
            </div>

            <div className="view-event-body">
              <div className="view-event-content">
                <div className="view-txt-common-style view-title">
                  <FontAwesomeIcon icon={faCalendarCheck} className="view-content-icon"/>
                  <div className="view-event-text view-event-title">
                  {modalState.viewEvent != null && modalState.viewEvent.appointmentTitle.charAt(0).toUpperCase()+modalState.viewEvent.appointmentTitle.slice(1)}
                  </div>
                </div>

                <div className="view-txt-common-style view-time">
                  <FontAwesomeIcon icon={faClock} className="view-content-icon"/>
                  <div className="view-event-text">
                    {
                      <div className="time-1">
                        <span className="txt">Start at:</span>{" "}
                        {dayjs(modalState.viewEvent.appointmentStartTime).format("DD-MM-YYYY, hh:mm a")}
                      </div>
                    }
                    {
                      <div className="time-2">
                        <span className="txt">Ends at:</span>
                        {dayjs(modalState.viewEvent.appointmentEndTime).format("DD-MM-YYYY, hh:mm a")}
                      </div>
                    }
                  </div>
                </div>

                <div className="view-txt-common-style view-desc">
                  <FontAwesomeIcon icon={faFileLines} className="view-content-icon"/>
                  <pre className="view-event-text description">
                   {modalState.viewEvent != null&&modalState.viewEvent.appointmentDescription?modalState.viewEvent.appointmentDescription.charAt(0).toUpperCase()+modalState.viewEvent.appointmentDescription.slice(1): "No Description Added"}
                  </pre>
                </div>
              </div>
            </div>

            <div className="view-event-popup-btns">
              <span onClick={handleClose}>
                <CloseButton />
              </span>
            </div>
          </div>
        </div>
      )}
      {isDelete&&<Alert handleAlert={handleDelete} setIsAlert={setDelete} alertMessage={"Do you want to continue Delete?"} AlertButton={DeleteButton}/>}
    </>
  );
};

export default ViewEvent;
