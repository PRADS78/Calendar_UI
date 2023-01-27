import dayjs from "dayjs";
import { calendarActions } from "../Reducer/CalendarReducer";

export function GetMonth(month, year){
  month = Math.floor(month);
  const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
  let currentMonthCount = 0 - firstDayOfTheMonth;
  const daysMatrix = new Array(5).fill([]).map(() => {
      return new Array(7).fill(0).map(() => {
          currentMonthCount++;
          return dayjs(new Date(year, month, currentMonthCount));
      });
  });
  return daysMatrix;
}


export const HandleSelectedDay = (day,calendarDispatch,calendarState,selectedDay,setSelectedDay) => {
  
    if (calendarState.currMonthIndex !== day.month()) {
      calendarDispatch({type:calendarActions.SET_CURR_YEAR,payload:day.year()})
      calendarDispatch({type:calendarActions.SET_CURR_MONTH,payload:day.month()})
    }
    
    if(day===selectedDay)
    {setSelectedDay("")}
    else{ 
      setSelectedDay(day);
      calendarDispatch({type:calendarActions.SET_CURR_DAY,payload:day.date()})}
};



export const GetDayColour = (day,selectedDay,calendarState,date) => {
  const format = "DD-MM-YY";
  const today = dayjs().format(format);
  const receivedDay = day.format(format);
  const fadeDay = dayjs(new Date(date.currYear, date.currMonth));

  if (today === receivedDay) {
    return "curr-day-bg";
  } 
  else if (
    selectedDay&&
    day.date() === calendarState.currDayIndex&&
    day.month() === calendarState.currMonthIndex
  ) {
    return "other-day-bg";
  } 
  else if (fadeDay.month() !== day.month()) {
    return "faded-bg";
  } 
  else {
    return "";
  }
};
