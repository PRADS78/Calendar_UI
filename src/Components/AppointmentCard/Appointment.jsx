import React from "react";
import "./Appointment.scss";
import dayjs from "dayjs";

const Appointment = ({ event }) => {
  const { appointmentEndTime, appointmentStartTime, appointmentTitle } = event.appointment;
 
  return (
    <div className={`appointment-content ${event.appointmentCardStyle.height<30&&"card-hover-style"}`} style={event.appointmentCardStyle}>
      <div className="appointment-timestamp" style={event.appointmentContentStyle}>
        {event &&
          dayjs(appointmentStartTime).format("hh:mm a") +
            " - " + 
            dayjs(appointmentEndTime).format("hh:mm a")}
      </div>
      <div className="appointment-title" style={event.appointmentContentStyle}>
        {appointmentTitle}
      </div>
    </div>
  );
};

export default Appointment;
