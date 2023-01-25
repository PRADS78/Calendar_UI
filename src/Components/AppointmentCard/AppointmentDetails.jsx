import dayjs from "dayjs";
import "./AppointmentDetails.scss";

const AppointmentDetails = ({ event }) => {
  return (
    <>
      <div className="appointment-details-card-container">
        <div className="appointment-row-1">
            <div className="appointment-title">{event.appointmentTitle}</div>
            <div className="appointment-timestamp">
              {(dayjs(event.appointmentStartTime).format("hh:mm a") +
                " - " +
                dayjs(event.appointmentEndTime).format("hh:mm a"))}
            </div>
        </div>

        <div className="appointment-row-2">
            <div className="appointment-desc">
              {event.appointmentDescription ? event.appointmentDescription: "No Description Added.."}
            </div>
            <div className="appointment-timestamp">
              {dayjs(event.appointmentStartTime).format("DD-MM-YY") != dayjs(event.appointmentEndTime).format("DD-MM-YY")
                  ? (dayjs(event.appointmentStartTime).format("DD-MM-YY") +" to " +dayjs(event.appointmentEndTime).format("DD-MM-YY"))
                    : dayjs(event.appointmentStartTime).format("DD-MM-YY")}
            </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentDetails;
