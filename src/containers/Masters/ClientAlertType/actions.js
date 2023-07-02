
import axios from "../../../config/axios/axios";
import notification from "@iso/components/Notification";
export const GetAllClientAlertType = (body) => {
    return axios
      .post("/Master/GetAllAlertType", body)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        notification("error", err.message);
      });
  };