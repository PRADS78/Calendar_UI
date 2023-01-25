import React from "react";
import { createPortal } from "react-dom";
import AddAppointment from "../Modal/AddAppointmentModal/AddAppointment";
import Response from "../Modal/ResponseModal/Response";
import RequestLoader from "../Modal/Loader/RequestLoader";
import ViewEvent from "../Modal/ViewEventModal/ViewEvent";


const Modal = () => {
  return  createPortal(
    <>
      <AddAppointment/>
      <Response/>
      <RequestLoader/>
      <ViewEvent/>
    </>,
    document.getElementById("modal")
  );
};

export default Modal;
