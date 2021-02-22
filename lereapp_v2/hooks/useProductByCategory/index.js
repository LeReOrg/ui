import { useQuery } from "react-query";
import axios from "axios";
import config from "../../config";
import { queryClient } from "../index";
const getProductByCategory =  async (postId) => {
  const params = postId?.queryKey[1];
  if (params) {
    const {data} = await axios(`${config.api}/product/getProductByCategoryId/${postId?.queryKey[1]}/${postId?.queryKey[2]}`)
    return data;
  } else {
    return;
  }
};

const prefetchProductByCate = (postId) => {
  queryClient.prefetchQuery(
    ["categoriesProduct", String(postId)],
    getProductByCategory,
    {
      staleTime: 5000,
    }
  );
};
const useProductByCategory = (postId,page = 0) => {
  return useQuery(["categoriesProduct", postId,page],  getProductByCategory, {
    staleTime: 5000, keepPreviousData: true
  });
};

export {
  useProductByCategory,
  getProductByCategory,
  prefetchProductByCate,
};
