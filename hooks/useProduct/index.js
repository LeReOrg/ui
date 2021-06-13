import { useQuery, useMutation } from "react-query";
import axios from "axios";
import config from "../../config";
import { queryClient } from "../index";
import { clone } from "lodash";
const getProductDetails = (postId) => {
  const params = postId?.queryKey[1];
  if (params) {
    return axios(`${config.api}/products/${postId?.queryKey[1]}`).then(
      (res) => res?.data
    );
  } else {
    return;
  }
};
const addProduct = async (params) => {
  const token = clone(params.token);
  delete params.token;
  console.log(params);
  const { data } = await axios.post(`${config.api}/products`, params, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};
const useAddProduct = () => {
  return useMutation(addProduct, {
    onSuccess: async (data) => {
      return data;
    },
    onError: async (error) => {
      return error;
    },
  });
};
const prefetchProductByDetails = (postId) => {
  queryClient.prefetchQuery(["product", String(postId)], getProductDetails, {
    staleTime: 5000,
  });
};
const useProductDetails = (postId) => {
  return useQuery(["product", postId], getProductDetails, {
    staleTime: 2000,
  });
};

export {
  useProductDetails,
  getProductDetails,
  prefetchProductByDetails,
  useAddProduct,
};
