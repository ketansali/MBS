import axios from "../../../config/axios/axios";
import notification from "@iso/components/Notification";
export const CreateCurrency= (data) => {
  return axios
    .post("/Master/CreateCurrency", data)
    .then((res) => {
      if(res.data.isSuccess){
        notification("success", res.data.message);
    }else{
        notification("error", res.data.message);
    }
    })
    .catch((err) => {
      notification("error", err.message);
    });
};
export const GetAllCurrency= (body) => {
  return axios
    .post("/Master/GetAllCurrency", body)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      notification("error", err.message);
    });
};
export const DeleteCurrency= async (id) => {
  return axios
    .post(`/Master/DeleteCurrency/${id}`)
    .then((res) => {
      notification("success", res.data.message);
    })
    .catch((err) => {
      notification("error", err.message);
    });
};

export const UpdateCurrency= (data) => {
  return axios
    .post("/Master/UpdateCurrency", data)
    .then((res) => { 
      notification("success", res.data.message);
    })
    .catch((err) => {
      notification("error", err.message);
    });
};
