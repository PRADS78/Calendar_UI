import { UpdateAppointment } from "./Network/AppointmentAPI";

export const handleUpdate = async (updateInput, modalDispatch, monthView, handleGetByDate, handleGetByMonth, actions) => {

  try {
    const updateResponse = await UpdateAppointment(updateInput.appointmentId, updateInput.eventSubmitted)
    if (updateResponse.status == 204) {
      modalDispatch({ type: actions.REQUEST_SUCCESS });
      modalDispatch({ type: actions.SET_UPDATE_EVENT });
      monthView ? handleGetByMonth() : handleGetByDate();
    }
  }
  catch (error) {
    if (error.response) {
      if(error.response.data.status===(409||400||404))
      {
      modalDispatch({
        type: actions.SET_ERROR_RESPONSE,
        payload: error.response.data.errorMessage,
      });
    }
    }
    else
      console.log(`Error: ${error.message}`);
  }

};