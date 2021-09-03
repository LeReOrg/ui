import React, { useState, useEffect } from "react";
import ShippingInfo from "../Shipping/ShippingInfo";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import styles, { theme } from "../../../styles/ShippingStyled";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import {
  changeAddressState,
  listAddressState,
  userState,
} from "../../../lib/recoil-root";
import { useRouter } from "next/router";
import {
  useCreateAddressUser,
  useGetAddressUser,
} from "../../../hooks/useAddress";
import AddressItem from "../../../utils/AddressItem";
import { arraymove } from "../../../utils/FunctionUses";
import { isEmpty } from "lodash";
const ShippingContainer = () => {
  const [proviceName, setProviceName] = useState();
  const [districtName, setDistrictName] = useState();
  const [wardName, setWardName] = useState();
  const [openAddProduct, setOpenAddProduct] = useState(false);
  const [listAddress, setListAddress] = useRecoilState(listAddressState);
  const useStyled = makeStyles(styles);
  const classes = useStyled();
  const { register, handleSubmit, watch, errors } = useForm();
  const { mutate, isLoading, data } = useCreateAddressUser();
  let province = watch("province");
  let district = watch("district");
  let ward = watch("ward");
  const [user, setUser] = useRecoilState(userState);
  const router = useRouter();
  const { data: addresItem } = useGetAddressUser();
  let filterAddress = [];
  const [changeAddress, setChangeAddress] = useRecoilState(changeAddressState);
  useEffect(() => {
    if (user === "") router.push("/login");
  }, []);
  useEffect(() => {
    if (user !== "") {
      addresItem?.docs?.map((item, index) => {
        if (item.isDefaultAddress) {
          filterAddress.push(item);
          arraymove(filterAddress, index, 0);
        } else {
          filterAddress.push(item);
        }
      });
      setUser((preState) => ({ ...preState, address: filterAddress }));
      if (addresItem?.docs?.length > 0 && !changeAddress) {
        router.push("/payment");
        setOpenAddProduct(false);
      }
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
    params.isDefaultAddress = true;
    mutate(params);
    router.push("/payment");
  };
  console.log(user);
  console.log(addresItem);
  const renderAddressItem = () => {
    if (!changeAddress) {
      return addresItem?.docs?.map((item, index) => (
        <AddressItem item={item} key={index} />
      ));
    } else {
      return user.address.map((item, index) => (
        <AddressItem item={item} key={index} />
      ));
    }
  };

  return (
    <div className={classes.main_shipping}>
      <Box>
        <h1>Địa chỉ giao hàng</h1>
        {addresItem?.docs?.length > 0 && (
          <p>Chọn địa chỉ giao hàng bên dưới:</p>
        )}
      </Box>
      <Box className={classes.addressItems}>
        {addresItem?.docs?.length > 0 && renderAddressItem()}
      </Box>

      {addresItem?.docs?.length > 0 && (
        <p className={classes.main_shipping_subTitle}>
          Bạn muốn giao hàng đến địa chỉ khác?
          <span
            className={classes.main_shipping_add_address}
            onClick={() => setOpenAddProduct(true)}
          >
            Thêm địa chỉ giao hàng mới
          </span>
        </p>
      )}
      {addresItem?.docs?.length === 0 && (
        <span
          className={classes.main_shipping_add_address}
          onClick={() => setOpenAddProduct(true)}
        >
          Thêm địa chỉ giao hàng mới
        </span>
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
export default ShippingContainer;
