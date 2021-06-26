import { useQuery } from "react-query";
import axios from "axios";
import config from "../../config";

const getCategories = () =>
  axios.get(`${config.api}/categories`).then((res) => res.data);

const useCategories = () => {
  return useQuery("categories", getCategories, {
    refetchIntervalInBackground: false,
    refetchOnWindowFocus: false,
  });
};

const getDetailCategory = async (categoryId) => {
  const { data } = await axios.get(
    `${config.api}/categories/${categoryId.queryKey[1]}`
  );
  return data;
};

const useDetailCategory = (categoryId) => {
  return useQuery(["categoryDetail", String(categoryId)], getDetailCategory);
};

export { useCategories, getCategories, getDetailCategory, useDetailCategory };
