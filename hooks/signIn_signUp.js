import axios from "axios";
import config from "../config";
let axiosConfig = {
    headers: {
        'Content-Type': 'application/json',
      
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
