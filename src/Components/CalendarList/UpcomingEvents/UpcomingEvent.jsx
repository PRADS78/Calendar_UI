import { useContext,useEffect,useState } from "react";
import GlobalContext from "../../../Context/GlobalContext";
import AppointmentDetails from "../../AppointmentCard/AppointmentDetails";
import "./UpcomingEvent.scss";
import GetUpcomingEvents from "../../../Utils/UpcomingEvents";
import { actions } from "../../../Reducer/ModalReducer";
import NoSchedule from "../../../Assests/Icons/NoSchedule.svg";
import dayjs from "dayjs";
import GetAppointments from "../../../Utils/Appointments";


const UpcomingEvents = () => {
  const { modalDispatch, appointments,calendarState,monthView} = useContext(GlobalContext);
  const CURRENT_DATE = dayjs(new Date(calendarState.currYearIndex, calendarState.currMonthIndex, calendarState.currDayIndex) );
  const selectedDateAppointments=GetAppointments(appointments,CURRENT_DATE,monthView); 
  // const [upcomingEvents,setUpcomingEvents]=useState(GetUpcomingEvents(selectedDateAppointments));
  let upcomingEvents=GetUpcomingEvents(selectedDateAppointments);
  const [viewAll, setViewAll] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // upcomingEvents=GetUpcomingEvents(selectedDateAppointments);
      // setUpcomingEvents(GetUpcomingEvents(selectedDateAppointments));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="upcoming-event-container">
        <div className="upcoming-header">
          <div className="header-name" title="upcoming-appointments">
            Schedule
          </div>
          <div className="view-all-option" onClick={() => setViewAll(!viewAll)} title={`${viewAll?"Close":"View-all Appointments"}`}>
            {upcomingEvents.length > 2 ? (viewAll ? "Close" : "View-all") : " "}
          </div>
        </div>
        </div>
      <div className="upcoming-events">
        {
        upcomingEvents.length>0?
        (viewAll
          ? upcomingEvents.map((event, index) => {
              return (
                <div key={index} title={`${event.appointmentTitle}`} className="upcoming-each-event" onClick={() => modalDispatch({ type: actions.SET_VIEW_EVENT, payload: event,})}>
                  <AppointmentDetails event={event} />
                </div>
              );
            })
          : upcomingEvents.slice(0, 2).map((event, index) => {
            return (
              <div key={index} title={`${event.appointmentTitle}`}  className="upcoming-each-event" onClick={() => modalDispatch({ type: actions.SET_VIEW_EVENT, payload: event,})}>
                <AppointmentDetails event={event} />
              </div>
            );
          }))
          :<div className="no-schedule" >
            <div title="Nothing to show !!!">Nothing to show !!!</div>
            <img src={NoSchedule} alt="NoSchedule" title="Nothing to show !!!" />
            </div> 
        }
      </div>
    
    </>
  );
};

export default UpcomingEvents;
