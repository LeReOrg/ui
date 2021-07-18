import React, { useState, useEffect } from "react";
import ShippingInfo from "../components/Client/Shipping/ShippingInfo";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import AddAddressMobile from "../components/Client/Shipping/AddAddressMobile";
import styles, { theme } from "../styles/ShippingStyled";
import { useForm } from "react-hook-form";
import { useRecoilValue, useRecoilState } from "recoil";
import {
  cartState,
  changeAddressState,
  listAddressState,
  userState,
} from "../lib/recoil-root";
import { getLayout } from "../container/MainLayout";
import { useRouter } from "next/router";
import { useAddressUser, useGetAddressUser } from "../hooks/useAddress";
import AddressItem from "../utils/AddressItem";

const Shipping = () => {
  const cart = useRecoilValue(cartState);
  const [proviceName, setProviceName] = useState();
  const [districtName, setDistrictName] = useState();
  const [wardName, setWardName] = useState();
  const [openAddProduct, setOpenAddProduct] = useState(false);
  const [listAddress, setListAddress] = useRecoilState(listAddressState);
  const useStyled = makeStyles(styles);
  const classes = useStyled();
  const { register, handleSubmit, watch, setValue, errors } = useForm();
  console.log(listAddress);
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
  console.log(user);
  const changeAddress = useRecoilValue(changeAddressState);
  useEffect(() => {
    if (addresItem?.docs?.length > 0 && !changeAddress) {
      setUser((preState) => ({ ...preState, address: addresItem }));
      router.push("/payment");
      setOpenAddProduct(false);
    }
  }, [addresItem]);
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
    mutate(params);
  };

  const renderAddressItem = () =>
    user?.address?.docs?.map((item, index) => (
      <AddressItem item={item} key={index} />
    ));
  console.log(openAddProduct);
  return (
    <div className={classes.main_shipping}>
      <Box>
        <h1>Địa chỉ giao hàng</h1>
        <p>Chọn địa chỉ giao hàng bên dưới:</p>
      </Box>
      <Box display="flex">
        {addresItem?.docs?.length > 0 && renderAddressItem()}
      </Box>

      {addresItem?.docs?.length > 0 && (
        <p>
          Bạn muốn giao hàng đến địa chỉ khác?
          <span
            className={classes.main_shipping_add_address}
            onClick={() => setOpenAddProduct(true)}
          >
            Thêm địa chỉ giao hàng mới
          </span>
        </p>
      )}
      {openAddProduct && (
        <form
          onSubmit={handleSubmit(shippingPayment)}
          style={{ background: "rgb(247, 247, 247)" }}
        >
          <Box>
            <Box className={classes.main_shipping__contentLeft}>
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
      )}
    </div>
  );
};
Shipping.getLayout = getLayout;

export default Shipping;
