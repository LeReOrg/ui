import { useQuery } from "react-query";
import axios from "axios";
import config from "../../config";
import { queryClient } from "../index";
const getProductByCategory = (postId) =>{
  const params = postId?.queryKey[1];
  if(params){
    return axios(
      `${config.api}/product/getProductByCategoryId/${postId?.queryKey[1]}`
    ).then((res) => res?.data);
  }else{
    return;
  }
}
  
 
const prefetchProductByCate = (postId) => {
  queryClient.prefetchQuery(
    ["categories", String(postId)],
    getProductByCategory,
    {
      staleTime: 5000,
    }
  );
}
const useProductByCategory = (postId) => {
  return useQuery(["categories", postId], getProductByCategory,{
    staleTime : 2000
  });
};

export { useProductByCategory, getProductByCategory,prefetchProductByCate }
