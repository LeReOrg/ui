import { useQuery } from "react-query";
import axios from "axios";
import config from "../../config";
import { queryClient } from "../index";
const getProductByCategory = async (postId) => {
  const params = {
    populate: "category",
    sort: "price:asc",
    limit: 12,
  };
  const { data } = await axios.get(
    `${config.api}/categories/${postId?.queryKey[1]}/products`,
    {
      params,
    }
  );
  return data.docs;
};

const prefetchProductByCate = (postId, params) => {
  queryClient.prefetchQuery(
    ["categoriesProduct", String(postId), params],
    getProductByCategory,
    {
      staleTime: 5000,
    }
  );
};
const useProductByCategory = (postId, params) => {
  return useQuery(["categoriesProduct", postId, params], getProductByCategory, {
    staleTime: 5000,
    keepPreviousData: true,
    refetchIntervalInBackground: false,
    refetchOnWindowFocus: false,
  });
};

export { useProductByCategory, getProductByCategory, prefetchProductByCate };
