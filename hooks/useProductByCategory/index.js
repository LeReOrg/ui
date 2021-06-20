import { useQuery } from "react-query";
import axios from "axios";
import config from "../../config";
import { queryClient } from "../index";
const getProductByCategory = async (postId) => {
  const { data } = await axios(
    `${config.api}/categories/${postId?.queryKey[1]}/products`
  );
  return data.docs;
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
const useProductByCategory = (postId) => {
  return useQuery(["categoriesProduct", postId], getProductByCategory, {
    staleTime: 5000,
    keepPreviousData: true,
    refetchIntervalInBackground: false,
    refetchOnWindowFocus: false,
  });
};

export { useProductByCategory, getProductByCategory, prefetchProductByCate };
