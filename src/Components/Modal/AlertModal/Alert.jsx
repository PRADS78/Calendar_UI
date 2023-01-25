import React from "react";
import "./Alert.scss"
import { createPortal } from "react-dom";
import { CancelButton } from "../../Buttons/Buttons";

const Alert=({handleAlert,setIsAlert,alertMessage,AlertButton})=> {

  return createPortal(
    <>
        <div className="alert-pop-up-overlay">
          <div className="alert-pop-up-box" >
            <span className="alert-txt">{alertMessage}</span>
            <div className="alert-popup-btns">
              <span  className="alert-cancel-btn" onClick={() => setIsAlert(false)}>
                <CancelButton />
              </span>
              <span onClick={() => {setIsAlert(false);handleAlert()}} >
                <AlertButton />
              </span>
            </div>
          </div>
        </div>
     
    </>,
    document.getElementById('modal')
  );
}

export default Alert;
