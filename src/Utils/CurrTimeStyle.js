import dayjs from "dayjs";

const GetCurrTimeStyle = () => {
    const currTime = dayjs()
    const HEIGHT = 81
    const startTime = currTime.hour() * 60;
    const startTimeMinutes = currTime.minute();
    const currTimeTopStyle = { top: (startTime / 60) * HEIGHT + (startTimeMinutes / 60) * HEIGHT, };
    return currTimeTopStyle;
}

export default GetCurrTimeStyle;