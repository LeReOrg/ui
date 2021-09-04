import React, { useState, useEffect } from "react";
import RecipentItems from "../Shipping/RecipentItems";
import PaymentType from "../Shipping/PaymentType";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, Grid } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { customCurrency } from "../../../utils/FunctionUses";
import styles, { theme } from "../../../styles/ShippingStyled";
import { useRecoilValue, useRecoilState } from "recoil";
import {
  cartState,
  cartTotal,
  cartTotalItem,
  userState,
  changeAddressState,
} from "../../../lib/recoil-root";
import { useMakeOrder } from "../../../hooks/useOrder";
import { useRouter } from "next/router";
const PaymentContainer = (props) => {
  const [cart, setCart] = useRecoilState(cartState);
  const user = useRecoilValue(userState);
  const [items, setItems] = useState([]);
  const totalPrice = useRecoilValue(cartTotal);
  const [transportValue, setTransportValue] = useState(0);
  // const totalItem = useRecoilValue(cartTotalItem);
  const [changeAddress, setChangeAddress] = useRecoilState(changeAddressState);
  useEffect(() => {
    if (cart) {
      cart.map((item) => {
        const itemsAdd = {
          productId: item.item.id,
          quantity: item.quantity,
          startDate: item.item.formDate,
          endDate: item.item.toDate,
        };
        setItems((preState) => [...preState, itemsAdd]);
      });
    }
  }, []);

  const useStyled = makeStyles(styles);
  const classes = useStyled();
  const router = useRouter();
  console.log(user);
  const { mutate, isLoading, data } = useMakeOrder();
  useEffect(() => {});
  const paymentAccess = () => {
    const params = {
      orders: items,
      addressId: user.address[0]._id,
      token: user.token,
    };
    mutate(params);
    setCart([]);
    router.push("/paymentSuccess", {
      params: data,
    });
  };
  const totalPayment = parseInt(transportValue) + parseInt(totalPrice);
  const changeAddressItem = () => {
    setChangeAddress(true);
    router.push("/shipping");
  };
  return (
    <div className={classes.main_shipping}>
      <Grid container spacing={2} className={classes.main_shipping__rootLeft}>
        <>
          <Grid item lg={9} md={7} xs={12}>
            <Box className={classes.main_shipping__contentLeft}>
              <RecipentItems cartItem={cart} />
            </Box>
            <hr className={classes.main_shipping__mobileHr} />
            <Box className={classes.main_shipping__contentBottom}>
              <h1 className={classes.main_shipping__contentPaymentTitle}>
                Phương phức giao hàng
              </h1>
              <PaymentType />
            </Box>
          </Grid>
          <Grid item lg={3} md={5} xs={12}>
            <Box className={classes.main_shipping__contentRight}>
              <Box className={classes.main_shipping__contentRightFirstRow}>
                <p>Giao tới</p>
                <div
                  onClick={() => changeAddressItem()}
                  className={classes.main_shipping__contentRightChangeAddress}
                >
                  Thay đổi
                </div>
              </Box>
              <div>
                <div className={classes.main_shipping__contentRightUser}>
                  <p>{user?.address[0]?.fullName}</p>
                  <p>{user?.address[0]?.phoneNumber}</p>
                </div>
                <div className={classes.main_shipping__contentRightUserSub}>
                  {user?.address[0]?.street}, {user?.address[0]?.ward},{" "}
                  {user?.address[0]?.district}, {user?.address[0]?.district}
                </div>
              </div>
            </Box>
            <Box className={classes.main_shipping__contentRight}>
              <div className={classes.main_recipent__summary}>
                <div className={classes.main_recipent__summaryProvisional}>
                  <p>Tạm tính:</p>
                  <p>{customCurrency(totalPayment.toString())}đ</p>
                </div>
                <div className={classes.main_recipent__summaryTransport}>
                  <p>Vận chuyển:</p>
                  <p>{transportValue}đ</p>
                </div>
                <hr />
              </div>
              <div className={classes.main_recipent__finalPayment}>
                <div className={classes.main_recipent__totalPayment}>
                  <div>Tổng cộng</div>
                  <div className={classes.main_recipent__totalPaymentNumber}>
                    <p>{customCurrency(totalPayment.toString())}đ</p>
                  </div>
                </div>
                <div className={classes.main_recipent__rePayment}>
                  <p>
                    Tiền cọc (nếu có) sẽ được hoàn trả sau khi bạn đã trả hàng
                    thành công
                  </p>
                </div>
              </div>
            </Box>
            <Box className={classes.main_shipping__contentRightButton}>
              <ThemeProvider theme={theme}>
                <Button type="submit" onClick={() => paymentAccess()}>
                  Tiến hành thanh toán
                </Button>
              </ThemeProvider>
            </Box>
          </Grid>
        </>
      </Grid>
    </div>
  );
};
export default PaymentContainer;
