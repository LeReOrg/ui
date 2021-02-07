import { useInfiniteQuery } from "react-query";
import axios from "axios";
import config from "../../config";

const useMoreProduct = () =>
  useInfiniteQuery(
    "topProduct",
    async ({ pageParam = 0 }) => {
      const {data} = await axios.get(`${config.api}/product/getTopProduct/${pageParam}`);
      return data;
    },
    {
      getNextPageParam: (lastPage) => lastPage.numPage -1 ?? false,
    }
  );
export { useMoreProduct };
