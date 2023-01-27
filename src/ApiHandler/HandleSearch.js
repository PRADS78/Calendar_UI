import { SearchAppointment } from "./Network/AppointmentAPI";

export const handleSearch = async (searchInput, searchDispatch, searchActions) => {
  try {
    const searchResponse = await SearchAppointment(searchInput);
    if (searchResponse.status === 200) {
      searchDispatch({
        type: searchActions.SET_SEARCH_RESULT, payload: {
          isTruncated: searchResponse.data.isTruncated,
          appointments: searchResponse.data.appointments,
        }
      });
    }
  }
  catch (error) {
    console.log(`Error: ${error.message}`);
  }
};