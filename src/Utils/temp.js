// import dayjs from "dayjs";

// const Gettemp = (appointments, CURRENT_DATE,monthView=false) => {

   

//     if(!monthView)
//     {
//         const selectedDayAppointments = [];
//         appointments.map((event) => {
//             if (dayjs(event.appointmentStartTime).format("DD-MM-YY") == CURRENT_DATE.format("DD-MM-YY")&&dayjs(event.appointmentEndTime).format("DD-MM-YY") == CURRENT_DATE.format("DD-MM-YY")) {
//                 selectedDayAppointments.push(event)
//             }
//             else if(dayjs(event.appointmentStartTime).format("DD-MM-YY") == CURRENT_DATE.format("DD-MM-YY"))
//             {
//                 selectedDayAppointments.push(event);
//             }
//             else if(dayjs(event.appointmentEndTime).format("DD-MM-YY") == CURRENT_DATE.format("DD-MM-YY"))
//             {
//                 selectedDayAppointments.push(event);
//             }
//         });
//         return selectedDayAppointments;
//         // return {today:selectedDayAppointments,startDate:startDate,endDate:endDate};
//     }
//     else
//     {
//         const monthViewAppointments=[]
//         appointments.map((event) => {
//             monthViewAppointments.push(event)           
//         });
//         return monthViewAppointments ;
//     }
   

// }
// export default Gettemp;

// // import dayjs from "dayjs";

// // const GetAppointmentSummary = (appointments) => {
// //     const eventsLeft=[]
// //     const eventOver=[]
// //     const currTime = dayjs();
// //     appointments.map((event) => {
// //         if (dayjs(event.appointmentStartTime) >= currTime || dayjs(event.appointmentEndTime) >= currTime) {
// //             eventsLeft.push(event);
// //         }
// //         else
// //         {
// //             eventOver.push(event);
// //         }
// //     });
// //     return {eventsLeft:eventsLeft,eventOver:eventOver};
// // }
// // export default GetAppointmentSummary;






// // import dayjs from "dayjs";
// // import UpcomingEvents from "../Utils/UpcomingEvents"
// // import AppointmentsLeft from "../Assests/SideBarIcons/SummaryIcons/AppointmentsLeft.svg";
// // import AppointmentsOver from "../Assests/SideBarIcons/SummaryIcons/AppointmentsOver.svg";
// // import AverageHour from "../Assests/SideBarIcons/SummaryIcons/AverageHour.svg";
// // import TotalAppointments from "../Assests/SideBarIcons/SummaryIcons/TotalAppointments.svg";
// // import TotalHour from "../Assests/SideBarIcons/SummaryIcons/TotalHour.svg"
// // import GetAppointmentSummary from "./AppointmentsLeft";

// // const GetSummary = (appointments) => {
// //     const appointmentSummary = [];
// //     const totalAppointmentsCount = appointments
// //     const separatedAppointments=GetAppointmentSummary(appointments)
// //     const remainingCount = separatedAppointments.eventsLeft;
// //     const totalHours = appointments.reduce((hour, appointment) => (hour += dayjs(appointment.appointmentEndTime).diff(dayjs(appointment.appointmentStartTime), "m") / 60), 0)
// //     const avgHour=Math.round(totalHours / totalAppointmentsCount)
   
   
// //     appointmentSummary.push({ title: "Total Hours", content: totalHours.toFixed(1).toString() + " " + "hrs", icon: TotalHour });
// //     appointmentSummary.push({ title: "Average Hours", content: isNaN(avgHour)?"0 hrs":avgHour.toString() + " " + "hrs", icon: AverageHour });
// //     appointmentSummary.push({ title: "Appointments Left", content: remainingCount.length.toString(), icon: AppointmentsLeft,events:separatedAppointments.eventsLeft });
// //     appointmentSummary.push({ title: "Appointments Over", content: separatedAppointments.eventOver.length.toString(), icon: AppointmentsOver,events:separatedAppointments.eventOver })
// //     appointmentSummary.push({ title: "Total Appointments", content: totalAppointmentsCount.length.toString(), icon: TotalAppointments,events:appointments });
// //     return appointmentSummary;
// // }

// // export default GetSummary;