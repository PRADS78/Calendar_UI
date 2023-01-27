import axios from "axios";


export const clientRequest=axios.create();

clientRequest.defaults.baseURL="http://localhost:5169/v1/api/appointments";

clientRequest.defaults.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  };
