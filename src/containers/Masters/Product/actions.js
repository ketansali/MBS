import axios from "../../../config/axios/axios";
import notification from "@iso/components/Notification";
export const CreateProductCategory = (data) => {
  return axios
    .post("/Master/CreateProductCategory", data)
    .then((res) => {
      notification("success", res.data.message);
    })
    .catch((err) => {
      notification("error", err.message);
    });
};
export const GetAllProductCategory = (body) => {
  return axios
    .post("/Master/GetAllProductCategory", body)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      notification("error", err.message);
    });
};
export const DeleteProductCategory = async (id) => {
  return axios
    .post(`/Master/DeleteProductCategory/${id}`)
    .then((res) => {
      notification("success", res.data.message);
    })
    .catch((err) => {
      notification("error", err.message);
    });
};

export const UpdateProductCategory = (data) => {
  return axios
    .post("/Master/UpdateProductCategory", data)
    .then((res) => { 
      notification("success", res.data.message);
    })
    .catch((err) => {
      notification("error", err.message);
    });
};

export const UpdateCategoryOrders = (data) => {
  return axios
    .post("/Master/UpdateCategoryOrders", data)
    .then((res) => { 
      notification("success", res.data.message);
    })
    .catch((err) => {
      notification("error", err.message);
    });
};