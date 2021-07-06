import { useMutation, useQuery } from "react-query";
import axios from "axios";
import config from "../../config";

const makeOrder = async (params) => {
  const { data } = await axios.post(`${config.api}/orders`, params, {
    headers: { Authorization: `Bearer ${params.token}` },
  });
  return data;
};
const useMakeOrder = () => {
  return useMutation(makeOrder, {
    onSuccess: async (data) => {
      //   setCurrentUser((preState) => ({ ...preState, user: data }));
    },
    onError: async (error) => {
      console.log(error, "there was an error");
    },
  });
};
const getOrderLessor = async (params) => {
  if (params) {
    const { data } = await axios.get(`${config.api}/orders`, {
      params: params?.queryKey[1],
    });
    return data;
  }
};
const useOrderLessor = (id) => {
  return useQuery(["orderLessor", id], getOrderLessor, {
    staleTime: 1000,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: false,
  });
};

export { useMakeOrder, useOrderLessor, getOrderLessor };
