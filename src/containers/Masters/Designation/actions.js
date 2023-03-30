import axios from "../../../config/axios/axios";
import notification from "@iso/components/Notification";
export const CreateDesignation= (data) => {
  return axios
    .post("/Master/CreateDesignation", data)
    .then((res) => {
      notification("success", res.data.message);
    })
    .catch((err) => {
      notification("error", err.message);
    });
};
export const GetAllDesignation= (body) => {
  return axios
    .post("/Master/GetAllDesignation", body)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      notification("error", err.message);
    });
};
export const DeleteDesignation= async (id) => {
  return axios
    .post(`/Master/DeleteDesignation/${id}`)
    .then((res) => {
      notification("success", res.data.message);
    })
    .catch((err) => {
      notification("error", err.message);
    });
};

export const UpdateDesignation= (data) => {
  return axios
    .post("/Master/UpdateDesignation", data)
    .then((res) => { 
      notification("success", res.data.message);
    })
    .catch((err) => {
      notification("error", err.message);
    });
};
