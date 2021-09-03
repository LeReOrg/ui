import { useMutation, useQuery } from "react-query";
import axios from "axios";
import config from "../../config";
import { useRecoilState } from "recoil";
import { userState } from "../../lib/recoil-root";
import { clone } from "lodash";

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
    getAddressUser,
    {
      refetchOnWindowFocus: false,
      refetchInterval: false,
      refetchIntervalInBackground: false,
    }
  );
};
const updateAddressUser = async (params) => {
  const { data } = await axios.patch(
    `${config.api}/users/addresses/${params.id}`,
    {
      isDefaultAddress: params.isDefaultAddress,
    },
    {
      headers: { Authorization: `Bearer ${params.token}` },
    }
  );
  return data;
};
const useAddressUser = () => {
  return useMutation(updateAddressUser, {
    onSuccess: async (data) => {
      console.log(data);
    },
    onError: async (error) => {
      console.log(error, "there was an error");
    },
  });
};
const createAddressUser = async (params) => {
  const { data } = await axios.post(`${config.api}/users/addresses`, params, {
    headers: { Authorization: `Bearer ${params.token}` },
  });
  return data;
};
const useCreateAddressUser = () => {
  const [currentUser, setCurrentUser] = useRecoilState(userState);
  return useMutation(createAddressUser, {
    onSuccess: async (data) => {
      let addressItems = clone(currentUser.address);
      addressItems.unshift(data);
      setCurrentUser((preState) => ({ ...preState, address: addressItems }));
    },
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
  useCreateAddressUser,
  createAddressUser,
};
