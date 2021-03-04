import axios from "axios";
import config from "../config";
let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
  };
const signUp = async (data) => {
  const response = await axios.post(`${config.api}/user/signup`, data,axiosConfig);
  return response;
};
const logInEmailAndPassword = async (data) => {
  const response = await axios.post(`${config.api}/user/login`, data,axiosConfig);
};

export { signUp, logInEmailAndPassword };
