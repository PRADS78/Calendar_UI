import React, { useEffect } from "react";
import SchedulePage from "../SchedulePage/SchedulePage";
import CalendarList from "../CalendarList/CalendarList";
import Modal from "./Modal";
import SideBar from "../SideBar/SideBar";
import "./Scheduler.scss";
import { useContext } from "react";
import GlobalContext from "../../Context/GlobalContext";
import { actions } from "../../Reducer/ModalReducer";
import useGetApi from "../../ApiHandler/HandleGet";


const Scheduler = () => {
  const { modalDispatch, calendarState,monthView} = useContext(GlobalContext);
  const {handleGetByDate,handleGetByMonth}=useGetApi();

  //get by date
  useEffect(() => {
    if (!monthView) {
      modalDispatch({ type: actions.REQUEST_LOADER });
      setTimeout(() => {
        handleGetByDate();
        modalDispatch({ type: actions.REQUEST_LOADER });
      }, 800);
    }
  }, [calendarState.currDayIndex,monthView == false,]);

  
  //get by month
  useEffect(() => {
    if (monthView == true) {
      modalDispatch({ type: actions.REQUEST_LOADER });
      setTimeout(() => {
        handleGetByMonth();
        modalDispatch({ type: actions.REQUEST_LOADER });
      }, 1000);
    }
  }, [monthView == true, calendarState.currMonthIndex]);

  return (
    <>
      <SideBar />
      <SchedulePage />
      <CalendarList />
      <Modal />
    </>
  );
};

export default Scheduler;
