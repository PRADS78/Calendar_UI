import dayjs from "dayjs";
import GetUpComingEvents from "./UpcomingEvents"
import AppointmentsLeft from "../Assests/SideBarIcons/SummaryIcons/AppointmentsLeft.svg";
import AppointmentsOver from "../Assests/SideBarIcons/SummaryIcons/AppointmentsOver.svg";
import AverageHour from "../Assests/SideBarIcons/SummaryIcons/AverageHour.svg";
import TotalAppointments from "../Assests/SideBarIcons/SummaryIcons/TotalAppointments.svg";
import TotalHour from "../Assests/SideBarIcons/SummaryIcons/TotalHour.svg"

const GetSummary = (appointments) => {
    const appointmentSummary = [];
    const totalAppointmentsCount = appointments.length
    const remainingCount = GetUpComingEvents(appointments).length;
    const totalHours = appointments.reduce((hour, appointment) => (hour += dayjs(appointment.appointmentEndTime).diff(dayjs(appointment.appointmentStartTime), "m") / 60), 0)
    const avgHour=Math.round(totalHours / totalAppointmentsCount)
   
   
    appointmentSummary.push({ title: "Total Hours", content: totalHours.toFixed(1).toString() + " " + "hrs", icon: TotalHour });
    appointmentSummary.push({ title: "Average Hours", content: isNaN(avgHour)?"0 hrs":avgHour.toString() + " " + "hrs", icon: AverageHour });
    appointmentSummary.push({ title: "Appointments Left", content: remainingCount.toString(), icon: AppointmentsLeft });
    appointmentSummary.push({ title: "Appointments Over", content: totalAppointmentsCount - remainingCount.toString(), icon: AppointmentsOver })
    appointmentSummary.push({ title: "Total Appointments", content: totalAppointmentsCount.toString(), icon: TotalAppointments });
    return appointmentSummary;
}

export default GetSummary;