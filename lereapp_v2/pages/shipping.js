import React, { useState, useEffect } from "react";
import ShippingInfo from "../components/Client/Shipping/ShippingInfo";
import RecipentItems from "../components/Client/Shipping/RecipentItems";
import PaymentType from "../components/Client/Shipping/PaymentType";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import { Box } from "@material-ui/core";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { object, string, number } from "yup";
import AddAddressMobile from "../components/Client/Shipping/AddAddressMobile";
import styles from "../styles/ShippingStyled";

const Shipping = () => {
  // const [showSubAddress, setshowSubAddress] = useState(false);
  // const [totalPrice, setTotalPrice] = useState(0);

  // const useStyled = makeStyles(styles);
  // const classes = useStyled();
  // useEffect(() => {
  //   if (cartItem) {
  //     let totalPrices = cartItem.cartItems.reduce(function (accumulator, item) {
  //       return accumulator + item.quantity * item.price;
  //     }, 0);
  //     setTotalPrice(totalPrices);
  //   }
  // }, [cartItem.cartItems]);
  // const initialValues = {
  //   fullName: "",
  //   email: "",
  //   telephoneNumber: "",
  //   city: -1,
  //   district: -1,
  //   ward: -1,
  //   address: "",
  //   cartItem: cartItem.cartItems,
  // };
  // const payment = (values) => {
  //   values.totalPrice = totalPrice;
  //   setTimeout(() => {
  //     alert(JSON.stringify(values, null, 2));
  //     console.log(values);
  //   }, 1000);
  // };
  // const showMenuAddressSub = () => {
  //   setshowSubAddress(true);
  // };
  // const getValueBack = () => {
  //   setshowSubAddress(false);
  // };
  // return (
  //   <div className={classes.main_shipping}>
  //     <Formik
  //       initialValues={initialValues}
  //       onSubmit={(values) => payment(values)}
  //       validationSchema={object({
  //         fullName: string().required("Full Name is required").min(6).max(100),
  //         email: string().required("Email is required").min(10).max(100),
  //         telephoneNumber: number().required("TelephoneNumber is required"),
  //         city: number().required("City is required").min(0),
  //         district: number().required("District is required").min(0),
  //         ward: number().required("Ward is required").min(0),
  //       })}
  //     >
  //       {({ values, errors, touched, handleChange }) => (
  //         <Form>
  //           <Grid
  //             container
  //             spacing={3}
  //             className={classes.main_shipping__rootLeft}
  //           >
  //             {!showSubAddress ? (
  //               <>
  //                 <Grid item lg={8} md={7} xs={12}>
  //                   <Box>
  //                     <Box className={classes.main_shipping__contentLeft}>
  //                       <h1 className={classes.main_shipping__contentLeftTitle}>
  //                         Thông tin nhận hàng
  //                       </h1>
  //                       <Box className={classes.main_shipping__contentLeftInfo}>
  //                         <ShippingInfo
  //                           showMenuSubAddress={showMenuAddressSub}
  //                           values={values}
  //                           errors={errors}
  //                           handleChange={handleChange}
  //                         />
  //                       </Box>
  //                     </Box>
  //                     <hr className={classes.main_shipping__mobileHr} />
  //                     <Box className={classes.main_shipping__contentBottom}>
  //                       <h1
  //                         className={classes.main_shipping__contentPaymentTitle}
  //                       >
  //                         Thông tin thanh toán
  //                       </h1>
  //                       <PaymentType />
  //                     </Box>
  //                   </Box>
  //                 </Grid>
  //                 <Grid item lg={4} md={5} xs={12}>
  //                   <Box className={classes.main_shipping__contentRight}>
  //                     <RecipentItems
  //                       values={values}
  //                       cartItem={cartItem}
  //                       totalPrice={totalPrice}
  //                     />
  //                   </Box>
  //                 </Grid>
  //               </>
  //             ) : (
  //               <AddAddressMobile
  //                 getValueBack={getValueBack}
  //                 values={values}
  //                 errors={errors}
  //                 handleChange={handleChange}
  //               />
  //             )}
  //           </Grid>
  //         </Form>
  //       )}
  //     </Formik>
  //   </div>
  // );
  <h1>careItem</h1>
};

export default Shipping;
