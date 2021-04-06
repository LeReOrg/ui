import React, { useState, useEffect } from "react";
import ShippingInfo from "../components/Client/Shipping/ShippingInfo";
import RecipentItems from "../components/Client/Shipping/RecipentItems";
import PaymentType from "../components/Client/Shipping/PaymentType";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import { Box } from "@material-ui/core";
import AddAddressMobile from "../components/Client/Shipping/AddAddressMobile";
import styles from "../styles/ShippingStyled";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRecoilValue } from "recoil";
import { cartState, cartTotal } from "../lib/recoil-root";
import { city, ward, district } from "../components/Client/dataEx";

const schema = yup.object().shape({
  fullName: yup.string().required("Full Name is required").min(6).max(100),
  email: yup.string().required("Email is required").min(10).max(100),
  telephoneNumber: yup.number().required("TelephoneNumber is required"),
  city: yup.number().required("City is required").min(0),
  district: yup.number().required("District is required").min(0),
  ward: yup.number().required("Ward is required").min(0),
});
const Shipping = (props) => {
  const [showSubAddress, setshowSubAddress] = useState(false);
  const cart = useRecoilValue(cartState);
  const [districtState, setDistrictState] = useState();
  const [wardState, setWardState] = useState();
  const totalPrice = useRecoilValue(cartTotal);
  const useStyled = makeStyles(styles);
  const classes = useStyled();
  const { register, handleSubmit, watch, setValue, errors } = useForm({
    mode: "all",
    resolver: yupResolver(schema),
  });
  const cityChosen = watch("city");
  const districtChosen = watch("district");
  useEffect(() => {
    if (cityChosen) {
      const districtByCity = district.filter(
        (e) => e.idCity == parseInt(cityChosen)
      );
      setDistrictState(districtByCity);
    }
  }, [cityChosen]);
  useEffect(() => {
    if (districtChosen) {
      const wardByDistrict = ward.filter(
        (e) => e.idDistrict == parseInt(districtChosen)
      );
      setWardState(wardByDistrict);
    }
  }, [districtChosen]);

  // useEffect(() => {
  //   if (cartItem) {
  //     let totalPrices = cartItem.cartItems.reduce(function (accumulator, item) {
  //       return accumulator + item.quantity * item.price;
  //     }, 0);
  //     setTotalPrice(totalPrices);
  //   }
  // }, [cartItem.cartItems]);

  // const payment = (values) => {
  //   values.totalPrice = totalPrice;
  //   setTimeout(() => {
  //     alert(JSON.stringify(values, null, 2));
  //     console.log(values);
  //   }, 1000);
  // };
  const shippingPayment = (data) => {
    console.log(data);
  };
  const showMenuAddressSub = () => {
    setshowSubAddress(true);
  };
  const getValueBack = () => {
    setshowSubAddress(false);
  };
  return (
    <div className={classes.main_shipping}>
      <form onSubmit={handleSubmit(shippingPayment)}>
        <Grid container spacing={3} className={classes.main_shipping__rootLeft}>
          {!showSubAddress ? (
            <>
              <Grid item lg={8} md={7} xs={12}>
                <Box>
                  <Box className={classes.main_shipping__contentLeft}>
                    <h1 className={classes.main_shipping__contentLeftTitle}>
                      Thông tin nhận hàng
                    </h1>
                    <Box className={classes.main_shipping__contentLeftInfo}>
                      <ShippingInfo
                        name={register}
                        showMenuSubAddress={showMenuAddressSub}
                        city={city}
                        ward={wardState}
                        district={districtState}
                      />
                    </Box>
                  </Box>
                  <hr className={classes.main_shipping__mobileHr} />
                  <Box className={classes.main_shipping__contentBottom}>
                    <h1 className={classes.main_shipping__contentPaymentTitle}>
                      Thông tin thanh toán
                    </h1>
                    <PaymentType />
                  </Box>
                </Box>
              </Grid>
              <Grid item lg={4} md={5} xs={12}>
                <Box className={classes.main_shipping__contentRight}>
                  <RecipentItems cartItem={cart} totalPrice={totalPrice} />
                </Box>
              </Grid>
            </>
          ) : (
            <AddAddressMobile getValueBack={getValueBack} />
          )}
        </Grid>
      </form>
    </div>
  );
};

export default Shipping;
