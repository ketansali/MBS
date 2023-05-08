import axios from "../../../config/axios/axios";
import notification from "@iso/components/Notification";
export const CreateCountry = (data) => {
  return axios
    .post("/Master/CreateCountry", data)
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
export const GetAllCountry = (body) => {
  return axios
    .post("/Master/GetAllCountry", body)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      notification("error", err.message);
    });
};
export const DeleteCountry = async (id) => {
  return axios
    .post(`/Master/DeleteCountry/${id}`)
    .then((res) => {
      notification("success", res.data.message);
    })
    .catch((err) => {
      notification("error", err.message);
    });
};

export const UpdateCountry = (data) => {
  return axios
    .post("/Master/UpdateCountry", data)
    .then((res) => { 
      notification("success", res.data.message);
    })
    .catch((err) => {
      notification("error", err.message);
    });
};

export const GetCountry = (name) => {
    return axios
      .post(`/Master/GetCountry?name=${name}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        notification("error", err.message);
      });
};

export const GetCountryByState = (id,name) => {
  return axios
    .post(`/Master/GetState?countryId=${id}&name=${name}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      notification("error", err.message);
    });
};
export const GetStateByCity = (id,name) => {
  return axios
    .post(`/Master/GetCity?stateId=${id}&name=${name}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      notification("error", err.message);
    });
};
