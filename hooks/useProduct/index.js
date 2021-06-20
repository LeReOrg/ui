import { useQuery, useMutation } from "react-query";
import axios from "axios";
import config from "../../config";
import { queryClient } from "../index";
import { clone } from "lodash";
import { productAddDetailState } from "../../lib/recoil-root";
import { useRecoilState } from "recoil";
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
  const [productAddDetail, setProductAddDetail] = useRecoilState(
    productAddDetailState
  );
  return useMutation(addProduct, {
    onSuccess: async (data) => {
      setProductAddDetail(data);
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
    refetchIntervalInBackground: false,
    refetchOnWindowFocus: false,
  });
};

export {
  useProductDetails,
  getProductDetails,
  prefetchProductByDetails,
  useAddProduct,
};
