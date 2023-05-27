import axios from "../../../config/axios/axios";
import notification from "@iso/components/Notification";
export const CreateContract = (data) => {
  return axios
    .post("/Master/CreateContract", data)
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
export const DeleteContract = async (id) => {
  return axios
    .post(`/Master/DeleteContract/${id}`)
    .then((res) => {
      notification("success", res.data.message);
    })
    .catch((err) => {
      notification("error", err.message);
    });
};

export const UpdateContract = (data) => {
  return axios
    .post("/Master/UpdateContract", data)
    .then((res) => {
      notification("success", res.data.message);
    })
    .catch((err) => {
      notification("error", err.message);
    });
};

export const GetContractInfoById = (id) => {
  return axios
    .post(`/Master/GetContract/${id}`)
    .then((res) => {
      notification("success", res.data.message);
    })
    .catch((err) => {
      notification("error", err.message);
    });
};
