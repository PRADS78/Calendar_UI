import dayjs from "dayjs";
import { useContext } from "react";
import GlobalContext from "../../../../Context/GlobalContext";
import { calendarActions } from "../../../../Reducer/CalendarReducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft,faChevronRight} from "@fortawesome/free-solid-svg-icons";
import "./Navigator.scss";

const Navigator = () => {
    const {calendarState,calendarDispatch,monthView}=useContext(GlobalContext);
    const currDate=dayjs(new Date(calendarState.currYearIndex, calendarState.currMonthIndex, calendarState.currDayIndex));

      const handlePrevDay = () => {
        calendarDispatch({type:calendarActions.DECREMENT_DAY,payload:1});
      };

      const handleNextDay = () => {
        calendarDispatch({type:calendarActions.INCREMENT_DAY,payload:1});
      };
      const handlePrevMonth = () => {
        calendarDispatch({type:calendarActions.DECREMENT_MONTH,payload:1});
        calendarDispatch({type:calendarActions.SET_CURR_DAY,payload:currDate.startOf("month").date()})
      };
    
      const handleNextMonth = () => {
        calendarDispatch({type:calendarActions.INCREMENT_MONTH,payload:1});
        calendarDispatch({type:calendarActions.SET_CURR_DAY,payload:currDate.startOf("month").date()})
      };

    return ( 
        <div className="nav-parent">
        <div className="curr-day">
        {monthView?currDate.format("MMMM")+"'s Schedule"
        :((currDate.format("DD-MM-YY")===dayjs().format("DD-MM-YY")?"Today":currDate.format("dddd"))+"'s Schedule")
        }
        </div>

        <div className="current-day-nav">
           {currDate.format("MMMM DD, YYYY")}
           {<div className="navigator">
              <button title={`${monthView?"prev-month":"prev-day"}`} onClick={()=>monthView?handlePrevMonth():handlePrevDay()}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>

              <button title={`${monthView?"next-month":"next-day"}`} onClick={()=>monthView?handleNextMonth():handleNextDay()}>
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
           </div>}
        </div>
     </div>
     );
}
 
export default Navigator;