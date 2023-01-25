import dayjs from "dayjs";

const GetUpcomingEvents = (appointments) => {
    const separatedEvents = [];
    const currTime = dayjs();
    appointments.map((event) => {
        if (dayjs(event.appointmentStartTime) >= currTime || dayjs(event.appointmentEndTime) >= currTime) {
            separatedEvents.push(event);
        }
    });
    return separatedEvents;
}
export default GetUpcomingEvents;