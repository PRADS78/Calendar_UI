import dayjs from "dayjs";

const GetEachDayAppointment = (daysOfCurrMonth, appointments) => {

    const appointmentsSeparated = []
    {
        daysOfCurrMonth.map((row) => (
            row.map((day) => {
                const eachDay = []
                appointments.map((event) => {
                    if (dayjs(event.appointmentStartTime).format("DD-MM-YY") === day.format("DD-MM-YY")) 
                    { eachDay.push(event) }
                })
                if (eachDay.length > 0) {
                    appointmentsSeparated.push({ date: day, events: eachDay, key: day.format("DD") });
                }
            }
            )
        ))
    }
    return appointmentsSeparated;
}

export default GetEachDayAppointment;