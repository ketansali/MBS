import axios from "../../config/axios/axios";
import notification from "@iso/components/Notification";


export const CreateClient = (data) => {
    debugger
    return axios
      .post("/Client/CreateClient", data)
      .then((res) => {
        debugger
        notification("success", res.data.message);
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