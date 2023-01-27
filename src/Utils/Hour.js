const GetHour = (currDate) => {
  const HOURS = []
  for (var i = 0; i < 24; i++) {
    HOURS.push(currDate.startOf('day').add(i, "hours"))
  }
  return HOURS;
}

export default GetHour;