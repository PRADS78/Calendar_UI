import { DeleteAppointment } from "../Network/AppointmentAPI";


export const handleDeleteEvent = async (deleteInput, modalDispatch, monthView, handleGetByDate, handleGetByMonth, actions) => {
  try {
    const deleteResponse = await DeleteAppointment(deleteInput);
    if (deleteResponse.status == 204) {
      modalDispatch({ type: actions.REQUEST_SUCCESS });
      monthView ? handleGetByMonth() : handleGetByDate();
    }
  }
  catch (error) {
    if (error.response) {
      modalDispatch({
        type: actions.SET_ERROR_RESPONSE,
        payload: error.response.data.errorMessage,
      });
    }
    else
      console.log(`Error: ${error.message}`);
  }
};