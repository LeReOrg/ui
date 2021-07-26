import { useMutation, useQuery } from "react-query";
import axios from "axios";
import config from "../../config";
const getIncomeMonthly = async (params) => {
    console.log(params)
    if (params) {
      const { data } = await axios.get(`${config.api}/users/${params?.queryKey[2].userId}/income-monthly`,{
        headers: { Authorization: `Bearer ${params?.queryKey[2].token}` },
        params : params?.queryKey[1]
      });
      return data;
    }
  };
  const getIncomeList = async (params) => {
    if (params) {
      const { data } = await axios.get(`${config.api}/users/${params.queryKey[2]}/incomes`, {
        params: params?.queryKey[1],
      });
      return data;
    }
  };
  const getIncomeDetail = async (params) => {
    if (params) {
      const { data } = await axios.get(`${config.api}/users/${params}/incomes/${params}`);
      return data;
    }
  };
  const useIncomeMonthly = (params,userId) => {
    return useQuery(["useIncomeMonthly", params,userId], getIncomeMonthly, {
      staleTime: 1000,
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    });
  };
  const useIncomeList = (id) => {
    return useQuery(["useIncomeList", id], getIncomeList, {
      staleTime: 1000,
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    });
  };
  const useIncomeDetail = (id) => {
    return useQuery(["useIncomeDetail", id], getIncomeDetail, {
      staleTime: 1000,
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    });
  };
  
  export {
    useIncomeMonthly,
    getIncomeMonthly,
    useIncomeList,
    useIncomeDetail
  }