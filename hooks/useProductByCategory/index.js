import { useQuery } from "react-query";
import axios from "axios";
import config from "../../config";
import { queryClient } from "../index";
const getProductByCategory = async (postId) => {
  const { data } = await axios.get(
    `${config.api}/categories/${postId?.queryKey[1]}/products`,
    {
      params: postId?.queryKey[2],
    }
  );
  return data;
};

const prefetchProductByCate = (postId, params) => {
  queryClient.fetchQuery(
    ["categoriesProduct", String(postId), params],
    getProductByCategory,
    { staleTime: 1000 }
  );
};
const useProductByCategory = (postId, params) => {
  return useQuery(["categoriesProduct", postId, params], getProductByCategory, {
    staleTime: 1000,
    keepPreviousData: true,
    refetchIntervalInBackground: false,
    refetchOnWindowFocus: false,
  });
};

export { useProductByCategory, getProductByCategory, prefetchProductByCate };
