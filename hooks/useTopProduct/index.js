import { useQuery } from "react-query";
import axios from "axios";
import config from "../../config";

const useMoreProduct = () =>
  useQuery(
    ["topProduct"],
    async () => {
      const { data } = await axios.get(
        `${config.api}/products?isTopProduct=true`
      );
      return data.docs;
    },
    {
      keepPreviousData: true,
      refetchIntervalInBackground: false,
      refetchOnWindowFocus: false,
    }
  );
export { useMoreProduct };
