import { useContext, useEffect, useState } from "react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark} from "@fortawesome/free-solid-svg-icons";
import { CancelButton,UpdateButton,SaveButton} from "../../Buttons/Buttons";
import TextareaAutosize from "react-textarea-autosize";
import "./AddAppointment.scss";
import GlobalContext from "../../../Context/GlobalContext";
import { actions } from "../../../Reducer/ModalReducer";
import useGetApi from "../../../ApiHandler/HandleGet";
import { handleUpdate} from "../../../ApiHandler/HandleUpdate";
import { handlePost } from "../../../ApiHandler/HandlePost";
import Alert from "../AlertModal/Alert";
import { DiscardButton } from "../../Buttons/Buttons";


const AddAppointment = () => {
  const { timeStamp,modalState,modalDispatch,monthView} = useContext(GlobalContext);
  const [appointment,setAppointment]=useState({title:"",description:"",startTime:"",endTime:""})
  const [isDiscard,setDiscard]=useState(false)
  const {handleGetByDate,handleGetByMonth}=useGetApi();


  useEffect(()=>
  { 
    if(modalState.showModal===true)
    {
      setAppointment({...appointment,startTime:timeStamp.startTime,endTime:timeStamp.endTime})
    }

    if(modalState.showModal===false)
    {    
      setAppointment({title:"",description:"",startTime:"",endTime:""})
    }

    if(modalState.updateEvent!=null)
    {
      setAppointment({title:modalState.updateEvent.appointmentTitle,description:modalState.updateEvent.appointmentDescription,startTime:modalState.updateEvent.appointmentStartTime,endTime:modalState.updateEvent.appointmentEndTime})
    }
  },[timeStamp,modalState.updateEvent,modalState.showModal])
  
  const handleAppointmentTitle = (event) => {
    setAppointment({ ...appointment, title: event.target.value });
  };

  const handleAppointmentDescription = (event) => {
    setAppointment({
      ...appointment,
      description: event.target.value,
    });
  };
  const handleAppointmentStartTime  = (event) => {
    setAppointment({
      ...appointment,
      startTime: event.target.value
    });
  };
  const handleAppointmentEndTime  = (event) => {
    setAppointment({
      ...appointment,
      endTime: event.target.value
    });
  };

  


  const handleCloseModal=()=>
  {
    if(modalState.updateEvent==null)
    modalDispatch({type:actions.ADD_EVENT})
    else
    modalDispatch({type:actions.SET_UPDATE_EVENT,payload:null})
          
  }

  const handleCancel=()=>
  {
    if(appointment.title.length>0&&modalState.updateEvent==null)
    {
      setDiscard(true)
    }
    else if((modalState.updateEvent!==null)&&(appointment.title.length>0&&appointment.title.length!==modalState.updateEvent.appointmentTitle.length))
    {
      setDiscard(true)
    }
    else{
     handleCloseModal()
    }
  }

  const handleSubmit=(e)=>
  {
    e.preventDefault();
    if(appointment.title.replace(/\s/g,"")!=="")
    {
      const titleSpaces=appointment.title.replace(/\s+/g, " ").trim()
      const eventSubmitted={
        appointmentTitle:titleSpaces,
        appointmentDescription:appointment.description.replace(/\s+/g, " ").trim(),
        appointmentStartTime: appointment.startTime,
        appointmentEndTime:appointment.endTime
      } 
      console.log(eventSubmitted);
      if(modalState.updateEvent!=null)
      { 
        const event={appointmentId:modalState.updateEvent.appointmentId,eventSubmitted};
        modalDispatch({type:actions.REQUEST_LOADER});
        setTimeout(()=>
        {
          handleUpdate(event,modalDispatch,monthView,handleGetByDate,handleGetByMonth,actions)
          modalDispatch({type:actions.REQUEST_LOADER});
        },1000)
      }

      else{
        modalDispatch({type:actions.REQUEST_LOADER});
        setTimeout(()=>
        {
          handlePost(eventSubmitted,modalDispatch,monthView,handleGetByDate,handleGetByMonth,actions)
          modalDispatch({type:actions.REQUEST_LOADER});
        },1000)
    }
    }
  }

  return (
    <>
      {
     (modalState.updateEvent!=null|| modalState.showModal)&& 
      (
        <div className="create-pop-up-overlay" >
          <form className={`create-pop-up-box ${modalState.showModal&& "anime"}`}  onSubmit={handleSubmit} >

            <div className="create-header">
            <div className="add-appointment">
              Add Appointment
            </div>
              <FontAwesomeIcon icon={faXmark} onClick={handleCancel} className="create-faXmark"  /></div>

            <div className="create-event-content">
              <div className="event">
                <span className="input-label">Title:</span>
                <input type="text" value={appointment.title} className="add-input" spellCheck="false" autoFocus placeholder="Add Title" onChange={handleAppointmentTitle} required/></div>
              <div className="choose-time">
                <span className="input-label">Start Time:</span>
                <input type="datetime-local"  name="Start Time" className="time-sel-style" value={appointment.startTime} onChange={handleAppointmentStartTime} required/>
              </div>
              <div className="choose-time">
                <span className="input-label">End Time:</span>
                <input type="datetime-local" className="time-sel-style" name="End Time" value={appointment.endTime} onChange={handleAppointmentEndTime} required />
              </div>
              <div className=" event">
                <span className="input-label">Description:</span>
                <TextareaAutosize className="input-text-area" maxRows={3} value={appointment.description} placeholder="Add Description" onChange={handleAppointmentDescription} /></div>
            </div>

            <div className="create-popup-btns">
              <span onClick={handleCancel} className="cancel-btn-create"><CancelButton /></span>
              {modalState.updateEvent!=null?<UpdateButton/>:<SaveButton/>}
            </div>

          </form>
        </div>
      )}
      {
        isDiscard&&<Alert  handleAlert={handleCloseModal} setIsAlert={setDiscard} alertMessage={"Do you want to continue discard?"} AlertButton={DiscardButton}/>
      }
    </>
  );
};

export default AddAppointment;

