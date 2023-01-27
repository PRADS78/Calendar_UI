import { useContext } from "react";
import dayjs from "dayjs";
import GlobalContext from "../Context/GlobalContext";
import { GetByDate, GetByMonth } from "./Network/AppointmentAPI";

const useGetApi = () => {
  const { calendarState, setAppointments } = useContext(GlobalContext)

  const handleGetByDate = async () => {
    const getByDateInput =
    {
      offSet: 0, fetchCount: -1,
      startDate: dayjs(new Date(calendarState.currYearIndex, calendarState.currMonthIndex, calendarState.currDayIndex)).format("YYYY-MM-DD"),
      endDate: dayjs(new Date(calendarState.currYearIndex, calendarState.currMonthIndex, calendarState.currDayIndex)).format("YYYY-MM-DD")
    }
    try {
      const getByDateresponse = await GetByDate(getByDateInput);
      if (getByDateresponse.status === 200) {
        setAppointments(getByDateresponse.data.appointments);
      }
    }
    catch (error) { console.log(`Error: ${error.message}`); }
  };

  const handleGetByMonth = async () => {
    const getByMonthInput = {
      offSet: 0,
      fetchCount: -1,
      startDate: dayjs(
        new Date(
          calendarState.currYearIndex,
          calendarState.currMonthIndex,
          calendarState.currDayIndex
        )
      )
        .startOf("month")
        .format("YYYY-MM-DD"),
      endDate: dayjs(
        new Date(
          calendarState.currYearIndex,
          calendarState.currMonthIndex,
          calendarState.currDayIndex
        )
      )
        .endOf("month")
        .format("YYYY-MM-DD"),
    };
    try {
      const getByMonthResponse = await GetByMonth(getByMonthInput);
      if (getByMonthResponse.status === 200) {
        setAppointments(getByMonthResponse.data.appointments);
      }
    }
    catch (error) { console.log(`Error: ${error.message}`); }
  };

  return { handleGetByDate, handleGetByMonth };
}

export default useGetApi;