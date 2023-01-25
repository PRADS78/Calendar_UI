import React, { useContext, useEffect } from "react";
import "./Response.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark} from "@fortawesome/free-solid-svg-icons";
import GlobalContext from "../../../Context/GlobalContext";
import { actions } from "../../../Reducer/ModalReducer";


const Response=()=> {

  const {modalState,modalDispatch} =useContext(GlobalContext);

  useEffect(()=>
  {
    if(modalState.showRequestSuccess)
    {
      setTimeout(()=>
      {
        modalDispatch({type:actions.REQUEST_SUCCESS});
      },2200)
    }
  },[modalState.showRequestSuccess])

  return (
    <>     
      { modalState.errorResponse!=null&& (
          <div className="error-pop-up-overlay" onClick={() => {modalDispatch({type:actions.SET_ERROR_RESPONSE,payload:null});}}>
            <div className="error-pop-up-box" onClick={(e)=>e.stopPropagation()}>
              <div className="error-header">                
                  <div className="error-content-name">
                    <span>
                      <svg className="crossmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle className="crossmark-circle " cx="26" cy="26" r="25" fill="none"/>
                      <path className="cross-line cross-line-right " fill="none" d="M16,16 l20,20" />
                      <path className="cross-line cross-line-left" fill="none" d="M16,36 l20,-20" />
                      </svg>
                    </span>
                  <div>Error</div>
                  </div>     
                <FontAwesomeIcon icon={faXmark} onClick={() =>{ modalDispatch({type:actions.SET_ERROR_RESPONSE,payload:null});}} className="error-faXmark"/>
              </div>
              <div className="error-message">{modalState.errorResponse}</div>
            </div>
          </div>
        )}
        
       { modalState.showRequestSuccess&&(
          <div className="resp-pop-up-overlay" onClick={() => modalDispatch({type:actions.REQUEST_SUCCESS})}>
            <div className="resp-pop-up-box" onClick={(e) => e.stopPropagation()}>
                <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none"/><path className="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>
                <div className="resp-txt">Request Successful !</div>
                <div className="resp-header">
                <FontAwesomeIcon icon={faXmark} onClick={() => modalDispatch({type:actions.REQUEST_SUCCESS})} className="resp-faXmark"/>
                </div>
            </div>
          </div>
        )}
      
    </>
  );
}

export default Response;
