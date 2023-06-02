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