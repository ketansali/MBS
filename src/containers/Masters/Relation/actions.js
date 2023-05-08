import axios from "../../../config/axios/axios";
import notification from "@iso/components/Notification";
export const CreateRelation = (data) => {
  return axios
    .post("/Master/CreateRelation", data)
    .then((res) => {
      notification("success", res.data.message);
    })
    .catch((err) => {
      notification("error", err.message);
    });
};
export const GetAllRelation = (body) => {
  return axios
    .post("/Master/GetAllRelation", body)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      notification("error", err.message);
    });
};
export const DeleteRelation = async (id) => {
  return axios
    .post(`/Master/DeleteRelation/${id}`)
    .then((res) => {
      notification("success", res.data.message);
    })
    .catch((err) => {
      notification("error", err.message);
    });
};

export const UpdateRelation = (data) => {
  return axios
    .post("/Master/UpdateRelation", data)
    .then((res) => { 
      notification("success", res.data.message);
    })
    .catch((err) => {
      notification("error", err.message);
    });
};

export const UpdateCategoryOrders = (data) => {
  return axios
    .post("/Master/UpdateRelationOrders", data)
    .then((res) => { 
      notification("success", res.data.message);
    })
    .catch((err) => {
      notification("error", err.message);
    });
};