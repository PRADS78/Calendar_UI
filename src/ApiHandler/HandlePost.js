import { PostAppointment } from "../Network/AppointmentAPI";

export const handlePost = async (postInput, modalDispatch, monthView, handleGetByDate, handleGetByMonth, actions) => {
  try {
    const postResponse = await PostAppointment(postInput);
    if (postResponse.status == 201) {
      modalDispatch({ type: actions.REQUEST_SUCCESS });
      modalDispatch({ type: actions.ADD_EVENT });
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