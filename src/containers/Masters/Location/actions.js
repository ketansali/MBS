import axios from "../../../config/axios/axios";
import notification from "@iso/components/Notification";

export const GetAllLocation = (body) => {
  return axios
    .post("/Master/GetAllLocation", body)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      notification("error", err.message);
    });
};

export const CreateLocation = (data) => {
  return axios
    .post("/Master/CreateLocation", data)
    .then((res) => {
      notification("success", res.data.message);
    })
    .catch((err) => {
      notification("error", err.message);
    });
};

export const DeleteLocation = async (id) => {
  return axios
    .post(`/Master/DeleteLocation/${id}`)
    .then((res) => {
      notification("success", res.data.message);
    })
    .catch((err) => {
      notification("error", err.message);
    });
};

export const UpdateLocation = (data) => {
  return axios
    .post("/Master/UpdateLocation", data)
    .then((res) => {
      notification("success", res.data.message);
    })
    .catch((err) => {
      notification("error", err.message);
    });
};

export const GetLocationById = async (id) => {
  return axios
    .get(`/Master/GetLocation/${id}`)
    .then((res) => {
      // notification("success", res.data.message);
      return res
    })
    .catch((err) => {
      notification("error", err.message);
    });
};