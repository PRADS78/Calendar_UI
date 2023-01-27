// import dayjs from "dayjs";

// export const GetAppointments = (appointments, CURRENT_DATE,monthView=false) => {
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
