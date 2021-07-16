import React, { useState, useEffect } from "react";
import RecipentItems from "../components/Client/Shipping/RecipentItems";
import PaymentType from "../components/Client/Shipping/PaymentType";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import { Box } from "@material-ui/core";
import { customCurrency } from "../utils/FunctionUses";
import AddAddressMobile from "../components/Client/Shipping/AddAddressMobile";
import styles from "../styles/ShippingStyled";
import { useRecoilValue } from "recoil";
import {
  cartState,
  cartTotal,
  cartTotalItem,
  userState,
} from "../lib/recoil-root";
import { getLayout } from "../container/MainLayout";
import { useMakeOrder } from "../hooks/useOrder";
const Payment = (props) => {
  const cart = useRecoilValue(cartState);
  const user = useRecoilValue(userState);
  const [items, setItems] = useState([]);
  const totalPrice = useRecoilValue(cartTotal);
  const [transportValue, setTransportValue] = useState(0);
  const totalItem = useRecoilValue(cartTotalItem);
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
  console.log(user);

  const useStyled = makeStyles(styles);
  const classes = useStyled();

  const { mutate, isLoading } = useMakeOrder();
  const paymentAccess = () => {
    const params = {
      orders: items,
      addressId: user.address.docs[0]._id,
      token: user.token,
    };
    mutate(params);
    // alert("Bạn đã than toán thành công");
  };
  const totalPayment = parseInt(transportValue) + parseInt(totalPrice);

  return (
    <div className={classes.main_shipping}>
      <Grid container spacing={3} className={classes.main_shipping__rootLeft}>
        <>
          <Grid item lg={8} md={7} xs={12}>
            <Box className={classes.main_shipping__contentLeft}>
              <RecipentItems cartItem={cart} />
            </Box>
            <hr className={classes.main_shipping__mobileHr} />
            <Box className={classes.main_shipping__contentBottom}>
              <h1 className={classes.main_shipping__contentPaymentTitle}>
                Thông tin thanh toán
              </h1>
              <PaymentType />
            </Box>
          </Grid>
          <Grid item lg={4} md={5} xs={12}>
            <Box className={classes.main_shipping__contentRight}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <p>Giao tới</p>
                <div>Thay đổi</div>
              </Box>
              <div>
                <div>
                  {user.address?.docs[0]?.fullName} |
                  {user.address?.docs[0]?.phoneNumber}
                </div>
                <div>
                  {user.address?.docs[0]?.street}, {user.address?.docs[0]?.ward}
                  , {user.address?.docs[0]?.district},
                  {user.address?.docs[0]?.district}
                </div>
              </div>
            </Box>
            <Box className={classes.main_shipping__contentRight}>
              <div className={classes.main_recipent__summary}>
                <div className={classes.main_recipent__summaryProvisional}>
                  <p>Tạm tính:</p>
                  {/* <p>{customCurrency(totalPrice)}đ</p> */}
                </div>
                <div className={classes.main_recipent__summaryTransport}>
                  <p>Vận chuyển:</p>
                  <p>{transportValue} d</p>
                </div>
                <hr />
              </div>
              <div className={classes.main_recipent__finalPayment}>
                <p className={classes.main_recipent__totalNumber}>
                  {totalItem} sản phẩm
                </p>
                <div className={classes.main_recipent__totalPayment}>
                  <div>Tổng tiền</div>
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
                <div className={classes.main_recipent__paymentButton}>
                  <button onClick={() => paymentAccess()}>
                    Tiến hành thanh toán
                  </button>
                </div>
              </div>
            </Box>
          </Grid>
        </>
      </Grid>
    </div>
  );
};
Payment.getLayout = getLayout;
export default Payment;
