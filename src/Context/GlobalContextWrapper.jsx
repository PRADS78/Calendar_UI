import React, { useReducer, useState} from "react";
import GlobalContext from "./GlobalContext";
import { initialState, modalReducer } from "../Reducer/ModalReducer";
import { calendarInitialState, calendarReducer } from "../Reducer/CalendarReducer";

const GlobalContextWrapper = (props) => {
  const [calendarState,calendarDispatch]=useReducer(calendarReducer,calendarInitialState)
  const [modalState, modalDispatch] = useReducer(modalReducer, initialState);

  const [timeStamp, setTimeStamp] = useState({});
  const [appointments, setAppointments] = useState([]);
  const [monthView, setMonthView] = useState(false);
  const [search, setSearch] = useState(false);

  return (
    <GlobalContext.Provider value={{
        calendarState,calendarDispatch,
        modalState,modalDispatch,
        timeStamp, setTimeStamp,
        appointments, setAppointments,
        monthView,setMonthView,
        search, setSearch
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextWrapper;

