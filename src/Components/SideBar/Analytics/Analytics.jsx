import { useContext } from "react";
import GlobalContext from "../../../Context/GlobalContext";
import GetSummary from "../../../Utils/Summary";
import Summary from "./Summary/Summary";
import GetAppointments from "../../../Utils/Appointments";
import dayjs from "dayjs";

const Analytics = () => {
  const { appointments,calendarState,monthView } = useContext(GlobalContext);
  const CURRENT_DATE = dayjs(new Date(calendarState.currYearIndex, calendarState.currMonthIndex, calendarState.currDayIndex) );
  const selectedDateAppointments=GetAppointments(appointments,CURRENT_DATE,monthView);
  const appointmentSummary = GetSummary(selectedDateAppointments);
  return (
      <div className="analytics-component">
        {appointmentSummary.map((stat, index) => (
          <Summary stat={stat} key={index} />
        ))}
      </div>
  );
};

export default Analytics;
