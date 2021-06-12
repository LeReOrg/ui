import { useMutation, useQuery } from "react-query";
import axios from "axios";
import config from "../../config";
import { useRecoilState } from "recoil";
import { userState } from "../../lib/recoil-root";

const saveLoginByFireBase = async (params) => {
  const { data } = await axios.post(
    `${config.api}/authentication/firebase`,
    params
  );
  return data;
};

const signUp = async (params) => {
  try {
    const { data } = await axios.post(
      `${config.api}/authentication/register`,
      params
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
const useLoginByFireBase = () => {
  const [currentUser, setcurrentUser] = useRecoilState(userState);
  return useMutation(saveLoginByFireBase, {
    onSuccess: (data) => {
      setcurrentUser(data);
    },
    onError: () => {
      alert("there was an error");
    },
  });
};
const logInEmailAndPassword = async (params) => {
  try {
    const { data } = await axios.post(
      `${config.api}/authentication/login`,
      params
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
export {
  saveLoginByFireBase,
  useLoginByFireBase,
  signUp,
  logInEmailAndPassword,
};
