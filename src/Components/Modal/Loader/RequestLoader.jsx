import { useContext } from "react";
import GlobalContext from "../../../Context/GlobalContext";
import "./RequestLoader.scss";

const RequestLoader = () => {
  const { modalState } = useContext(GlobalContext);
  return (
    <>
      {modalState.isLoading && (
        <div className="loader-overlay">
          <div className="loader-container">
            <div className="lds-ripple">
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RequestLoader;
