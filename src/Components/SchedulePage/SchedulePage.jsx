import DayView from "./DayView/DayView";
import MonthView from "./MonthView/MonthView";
import SearchResult from "./SearchResult/SearchResult";
import NavBar from "./NavBar/NavBar";
import "./SchedulePage.scss";
import { useContext, createContext } from "react";
import GlobalContext from "../../Context/GlobalContext";
import { useReducer } from "react";
import { searchInitialState, searchReducer } from "../../Reducer/SearchReducer";

export const SchedulePageContext=createContext("");

const SchedulePage = () => {
  const {monthView,search}=useContext(GlobalContext)
  const [searchState,searchDispatch]=useReducer(searchReducer,searchInitialState);

  return (
    <SchedulePageContext.Provider value={{searchState,searchDispatch}}>

      <div className="schedule-page-parent">
        <NavBar/>
        {(!search&&monthView)?<MonthView />
        :(!search&&<DayView />)}
        
        {search&&<SearchResult/>}
      </div>

    </SchedulePageContext.Provider>
   
  );
};

export default SchedulePage;