import dayjs from "dayjs";

const GetHour = () => {
  const HOURS = []
  for (var i = 0; i < 24; i++) {
    HOURS.push(dayjs().startOf('day').add(i, "hours"))
  }
  return HOURS;
}

export default GetHour;