import React, { useState, useEffect } from "react";
import ShippingInfo from "../components/Client/Shipping/ShippingInfo";
import Button from "@material-ui/core/Button";
import PaymentType from "../components/Client/Shipping/PaymentType";
import { makeStyles } from "@material-ui/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import AddAddressMobile from "../components/Client/Shipping/AddAddressMobile";
import styles from "../styles/ShippingStyled";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRecoilValue, useRecoilState } from "recoil";
import {
  cartState,
  cartTotal,
  listAddressState,
  userState,
} from "../lib/recoil-root";
import { getLayout } from "../container/MainLayout";
import { useRouter } from "next/router";
import { useAddressUser, useGetAddressUser } from "../hooks/useAddress";

const schema = yup.object().shape({
  fullName: yup.string().required("Full Name is required").min(6).max(100),
  telephoneNumber: yup.number().required("TelephoneNumber is required"),
  city: yup.number().required("City is required").min(0),
  district: yup.number().required("District is required").min(0),
  ward: yup.number().required("Ward is required").min(0),
});
const Shipping = () => {
  const [showSubAddress, setshowSubAddress] = useState(false);
  const cart = useRecoilValue(cartState);
  const [proviceName, setProviceName] = useState();
  const [districtName, setDistrictName] = useState();
  const [wardName, setWardName] = useState();
  const [listAddress, setListAddress] = useRecoilState(listAddressState);
  const useStyled = makeStyles(styles);
  const classes = useStyled();
  const { register, handleSubmit, watch, setValue, errors } = useForm();

  const { mutate, isLoading, data } = useAddressUser();
  let province = watch("province");
  let district = watch("district");
  let ward = watch("ward");
  const [user, setUser] = useRecoilState(userState);
  const router = useRouter();
  const { data: addresItem } = useGetAddressUser();
  useEffect(() => {
    if (user == "") router.push("/login");
  }, []);
  useEffect(() => {
    if (addresItem?.docs?.length > 0) {
      setUser((preState) => ({ ...preState, address: addresItem }));
      router.push("/payment");
    }
  }, [addresItem]);
  console.log(user);
  useEffect(() => {
    if (data) {
      router.push("/payment");
    }
  }, [data]);
  const theme = createMuiTheme({
    overrides: {
      MuiButton: {
        text: {
          background: "#2FAF62",
          borderRadius: 4,
          border: 0,
          color: "white",
          height: 48,
          padding: "0 30px",
          fontWeight: "bold",
          width: "100%",
          fontSize: 16,
          maxWidth: 350,
          "&:hover": {
            background: "red",
          },
        },
      },
    },
  });
  useEffect(() => {
    if (listAddress !== "") {
      const cityName = listAddress?.city?.filter(
        (item, index) => item.idProvince == province
      );
      setProviceName(cityName);
      const districtItem = listAddress?.district?.filter(
        (item, index) => item.idDistrict == district
      );
      setDistrictName(districtItem);
      const wardItem = listAddress?.ward?.filter(
        (item, index) => item.idCommune == ward
      );
      setWardName(wardItem);
    }
  }, [province, district, ward]);
  const shippingPayment = (data) => {
    const params = data;
    params.token = user.token;
    params.province = proviceName[0]?.name;
    params.ward = wardName[0]?.name;
    params.district = districtName[0]?.name;
    console.log(params);
    mutate(params);
  };

  return (
    <div className={classes.main_shipping}>
      <form onSubmit={handleSubmit(shippingPayment)}>
        <Box>
          <Box className={classes.main_shipping__contentLeft}>
            <h1 className={classes.main_shipping__contentLeftTitle}>
              Địa chỉ giao hàng
            </h1>
            <Box className={classes.main_shipping__contentLeftInfo}>
              <ShippingInfo
                cityChoose={province}
                districtChoose={district}
                name={register}
              />
              <div className={classes.main_cart__totalButton}>
                <ThemeProvider theme={theme}>
                  <Button type="submit">Giao đến địa chỉ này</Button>
                </ThemeProvider>
              </div>
            </Box>
          </Box>
        </Box>
      </form>
    </div>
  );
};
Shipping.getLayout = getLayout;

export default Shipping;
