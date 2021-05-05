import { useQuery } from "react-query";
import axios from "axios";
import config from "../../config";
import { queryClient } from "../index";
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

const prefetchProductByDetails = (postId) => {
  queryClient.prefetchQuery(["product", String(postId)], getProductByCategory, {
    staleTime: 5000,
  });
};
const useProductDetails = (postId) => {
  return useQuery(["product", postId], getProductDetails, {
    staleTime: 2000,
  });
};

export { useProductDetails, getProductDetails, prefetchProductByDetails };
