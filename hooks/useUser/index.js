import { useMutation } from "react-query";
import axios from "axios";
import config from "../../config";
import { useRecoilState } from "recoil";
import { userState } from "../../lib/recoil-root";

const updateUser = async (params) => {
  const dataParams = { isHirer: params.isHirer };
  const { data } = await axios.patch(`${config.api}/users`, dataParams, {
    headers: { Authorization: `Bearer ${params.token}` },
  });
  return data;
};

const useUpdateUser = () => {
  const [currentUser, setCurrentUser] = useRecoilState(userState);

  return useMutation(updateUser, {
    onSuccess: async (data) => {
      setCurrentUser((preState) => ({ ...preState, user: data }));
    },
    onError: async (error) => {
      console.log(error, "there was an error");
    },
  });
};

export { useUpdateUser, updateUser };
