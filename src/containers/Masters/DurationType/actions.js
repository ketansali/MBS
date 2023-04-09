import axios from "../../../config/axios/axios";
import notification from "@iso/components/Notification";
export const CreateDurationType= (data) => {
  return axios
    .post("/Master/CreateDurationType", data)
    .then((res) => {
      notification("success", res.data.message);
    })
    .catch((err) => {
      notification("error", err.message);
    });
};
export const GetAllDurationType= (body) => {
  return axios
    .post("/Master/GetAllDurationType", body)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      notification("error", err.message);
    });
};
export const DeleteDurationType= async (id) => {
  return axios
    .post(`/Master/DeleteDurationType/${id}`)
    .then((res) => {
      notification("success", res.data.message);
    })
    .catch((err) => {
      notification("error", err.message);
    });
};

export const UpdateDurationType= (data) => {
  return axios
    .post("/Master/UpdateDurationType", data)
    .then((res) => { 
      notification("success", res.data.message);
    })
    .catch((err) => {
      notification("error", err.message);
    });
};
