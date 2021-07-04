import { useMutation, useQuery } from "react-query";
import axios from "axios";
import config from "../../config";
import { useRecoilState } from "recoil";
import { userState } from "../../lib/recoil-root";

const updateAddressUser = async (params) => {
  const { data } = await axios.post(`${config.api}/users/addresses`, params, {
    headers: { Authorization: `Bearer ${params.token}` },
  });
  return data;
};
const getAddressUser = async (params) => {
  const { data } = await axios.get(`${config.api}/users/addresses`, {
    headers: { Authorization: `Bearer ${params.queryKey[1]}` },
  });
  return data;
};

const useGetAddressUser = () => {
  const [currentUser, setCurrentUser] = useRecoilState(userState);
  return useQuery(
    ["categoryDetail", String(currentUser.token)],
    getAddressUser
  );
};

const useAddressUser = () => {
  return useMutation(updateAddressUser, {
    onSuccess: async (data) => {
      //   setCurrentUser((preState) => ({ ...preState, user: data }));
    },
    onError: async (error) => {
      console.log(error, "there was an error");
    },
  });
};

export { useAddressUser, updateAddressUser, useGetAddressUser, getAddressUser };
