import axios from "../../../config/axios/axios";
import notification from "@iso/components/Notification";
export const CreateState = (data) => {
  return axios
    .post("/Master/CreateState", data)
    .then((res) => {
      notification("success", res.data.message);
    })
    .catch((err) => {
      notification("error", err.message);
    });
};
export const GetAllState = (body) => {
  return axios
    .post("/Master/GetAllState", body)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      notification("error", err.message);
    });
};
export const DeleteState = async (id) => {
  return axios
    .post(`/Master/DeleteState/${id}`)
    .then((res) => {
      notification("success", res.data.message);
    })
    .catch((err) => {
      notification("error", err.message);
    });
};

export const UpdateState = (data) => {
  return axios
    .post("/Master/UpdateState", data)
    .then((res) => { 
      notification("success", res.data.message);
    })
    .catch((err) => {
      notification("error", err.message);
    });
};

export const GetCountry = (data) => {
  return axios
    .post("/Master/GetCountry", data)
    .then((res) => {
      notification("success", res.data.message);
    })
    .catch((err) => {
      notification("error", err.message);
    });
};