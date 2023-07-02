import axios from "../../../config/axios/axios";
import notification from "@iso/components/Notification";

export const GetAllClientAlerts = (body) => {
    return axios
      .post("/Client/GetAllClientAlerts", body)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        notification("error", err.message);
      });
  };
  