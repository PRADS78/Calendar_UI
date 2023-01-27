import dayjs from "dayjs";

const GetUpComingEvents = (appointments) => {
    const separatedEvents = [];
    const currTime = dayjs();
    for(var i=0;i<appointments.length;i++)
    {
        if (dayjs(appointments[i].appointmentStartTime) >= currTime || dayjs(appointments[i].appointmentEndTime) >= currTime) {
            separatedEvents.push(appointments[i]);
        }  
    }
    return separatedEvents;
}
export default GetUpComingEvents;