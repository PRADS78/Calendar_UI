import dayjs from "dayjs";

const GetMonthViewAppointment = (daysOfCurrMonth, appointments) => {

    const appointmentsSeparated = []
    {
        daysOfCurrMonth.map((row) => (
            row.map((day) => {
                const eachDay = []
                appointments.map((event) => {
                    if (dayjs(event.appointmentStartTime).format("DD-MM-YY") === day.format("DD-MM-YY")) 
                    { eachDay.push(event) }
                    else if((dayjs(event.appointmentStartTime).format("DD-MM-YY") === day.format("DD-MM-YY")))
                    {
                        eachDay.push(event) 
                    }
                })
                if (eachDay.length > 0) {
                    appointmentsSeparated.push({ date: day, events: eachDay });
                }
            }
            )
        ))
    }
    return appointmentsSeparated;
}

export default GetMonthViewAppointment;