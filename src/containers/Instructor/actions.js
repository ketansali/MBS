import axios from "../../config/axios/axios";
import notification from "@iso/components/Notification";

export const GetAllInstructors = (body) => {
    return axios
        .post("/Instructor/GetAllInstructors", body)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            notification("error", err.message);
        });
};

export const createInstructors = (data) => {
    return axios
        .post("/Instructor/CreateInstructor", data)
        .then((res) => {
            notification("success", res.data.message);
        })
        .catch((err) => {
            notification("error", err.message);
        });
};