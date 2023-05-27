import axios from "../../../config/axios/axios";
import notification from "@iso/components/Notification";
export const CreateCity = (data) => {
  return axios
    .post("/Master/CreateCity", data)
    .then((res) => {
      notification("success", res.data.message);
    })
    .catch((err) => {
      notification("error", err.message);
    });
};
export const GetAllCity = (body) => {
  return axios
    .post("/Master/GetAllCity", body)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      notification("error", err.message);
    });
};
export const DeleteCity = async (id) => {
  return axios
    .post(`/Master/DeleteCity/${id}`)
    .then((res) => {
      notification("success", res.data.message);
    })
    .catch((err) => {
      notification("error", err.message);
    });
};

export const UpdateCity = (data) => {
  return axios
    .post("/Master/UpdateCity", data)
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