import axios from "../../config/axios/axios";
import notification from "@iso/components/Notification";

export const CreateClient = (data) => {
  
  return axios
    .post("/Client/CreateClient", data)
    .then((res) => {
      if (res.data.isSuccess) {
        notification("success", res.data.message);
      } else {
        notification("error", res.data.message);
      }
    })
    .catch((err) => {
      notification("error", err.message);
    });
};
export const GetAllClients = (body) => {
  return axios
    .post("/Client/GetAllClients", body)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      notification("error", err.message);
    });
};

export const GetAllContract = (body) => {
  return axios
    .post("/Master/GetAllContracts", body)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      notification("error", err.message);
    });
};

export const DeleteClient = async (id) => {
  return axios
    .post(`/Client/DeleteClient/${id}`)
    .then((res) => {
      notification("success", res.data.message);
    })
    .catch((err) => {
      notification("error", err.message);
    });
};
