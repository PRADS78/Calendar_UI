import { clientRequest } from "./clientRequest";

export const GetByDate = (data) => {
    const getResponse=clientRequest.get("",{params:data}).then(response=>response);
    return getResponse
};

export const GetByMonth = (data) => {
    const getResponse=clientRequest.get("",{params:data}).then(response=>response);
    return getResponse
};

export const SearchAppointment=(data)=>{
    const getResponse=clientRequest.get("",{params:data}).then(response=>response);
    return getResponse
}

export const PostAppointment = (data) => {
    const postResponse=clientRequest.post("",data).then(response=>response);
    return postResponse
};

export const DeleteAppointment = (id) => {
    const deleteResponse=clientRequest.delete( `${id}`).then(response=>response);
    return deleteResponse
};


export const UpdateAppointment = (id, data) => {
    const putResponse=clientRequest.put(`${id}`,data).then(response=>response);
    return putResponse
};

