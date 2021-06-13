import { useQuery } from "react-query";
import axios from "axios";

const apiUrl = "https://sheltered-anchorage-60344.herokuapp.com";
const apiEndpointDistrict = apiUrl + "/district/?idProvince=";
const apiEndpointCommune = apiUrl + "/commune/?idDistrict=";

const getWard = async (params) => {
  if (params?.queryKey[1]) {
    const { data: communeList } = await axios.get(
      apiEndpointCommune + params.queryKey[1]
    );
    return communeList;
  }
};
const useWard = (district) => {
  return useQuery(["district", String(district)], getWard, {
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: false,
  });
};

const getDistrict = async (params) => {
  if (params?.queryKey[1]) {
    const { data: districtList } = await axios.get(
      apiEndpointDistrict + params.queryKey[1]
    );
    return districtList;
  }
};
const useDistrict = (city) => {
  return useQuery(["district", String(city)], getDistrict, {
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: false,
  });
};
const useCity = () => {
  return useQuery("city", getCity, {
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: false,
  });
};
const getCity = async () => {
  const { data } = await axios.get(`${apiUrl}/province`);
  return data;
};

export { useCity, getCity, useDistrict, getDistrict, useWard, getWard };
