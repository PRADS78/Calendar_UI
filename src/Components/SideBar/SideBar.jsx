import "./SideBar.scss";
import Analytics from "./Analytics/Analytics";
import ViewToggleButton from "./ViewToggleButton/ViewToggleButton";
import AppIcon2 from "../../Assests/SideBarIcons/AppIcon2.svg";

const SideBar = () => {
  return (
    <div className="side-bar-parent">
      
      <div className="app-header">
        <img src={AppIcon2} alt="AppIcon" className="app-icon" />
        <div className="app-title">Scheduler</div>
      </div>
     
      <div className="side-bar-content">
        <div className="scheduler-view">
          <ViewToggleButton />
        </div>
        <div className="analytics">
          <Analytics />
        </div>
      </div>
   
    </div>
  );
};

export default SideBar;
