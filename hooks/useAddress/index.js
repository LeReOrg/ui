import { useMutation, useQuery } from "react-query";
import axios from "axios";
import config from "../../config";
import { useRecoilState } from "recoil";
import { userState } from "../../lib/recoil-root";

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
const updateAddressUser = async (params) => {
  const { data } = await axios.patch(`${config.api}/users/addresses`, params, {
    headers: { Authorization: `Bearer ${params.token}` },
  });
  return data;
};
const useAddressUser = () => {
  return useMutation(updateAddressUser, {
    onSuccess: async (data) => {},
    onError: async (error) => {
      console.log(error, "there was an error");
    },
  });
};
const deleteAddressUser = async (params) => {
  console.log(params);
  const { data } = await axios.delete(
    `${config.api}/users/addresses/${params.id}`,
    {
      headers: { Authorization: `Bearer ${params.token}` },
    }
  );
  return data;
};
const useDeleteAddressUser = () => {
  return useMutation(deleteAddressUser, {
    onSuccess: async (data) => {},
    onError: async (error) => {
      console.log(error, "there was an error");
    },
  });
};
export {
  useAddressUser,
  updateAddressUser,
  useGetAddressUser,
  getAddressUser,
  useDeleteAddressUser,
  deleteAddressUser,
};
