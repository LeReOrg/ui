import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import CartItem from "../utils/CartItem";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Link from "next/link";
import styles from "../styles/CartStyled";
import { useRecoilValue, useRecoilState } from "recoil";
import { cartState, cartTotal } from "../lib/recoil-root";
import { userState } from "../lib/recoil-root";
import Router from "next/router";
import { getLayout } from "../container/MainLayout";

const Cart = (props) => {
  const [cart, setCart] = useRecoilState(cartState);
  const { user } = useRecoilValue(userState);
  // useEffect(() => {
  //   if (nameUser === "" ) {
  //     Router.push("/login");
  //   }
  // }, []);
  const totalPrice = useRecoilValue(cartTotal);
  const useStyled = makeStyles(styles);
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
          fontSize: 16,
          width: "100%",
          "&:hover": {
            background: "red",
          },
        },
      },
    },
  });
  const classes = useStyled();

  const renderItemCart = () =>
    cart.map((item, index) => <CartItem item={item.item} key={index} />);
  return (
    <>
      {user !== "" ? (
        <div className={classes.main_cart}>
          <h1 className={classes.main_cart__title}>Giỏ hàng của bạn</h1>
          {cart.length !== 0 ? (
            <div className={classes.main_cart__content}>
              <Grid container className={classes.root} spacing={2}>
                <Grid item lg={7} xs={12}>
                  <div className={classes.main_cart__info}>
                    <div className={classes.main_cart__infoItem}>
                      {renderItemCart()}
                    </div>
                  </div>
                </Grid>
                <Grid item lg={5} xs={12}>
                  <div className={classes.main_cart__summary}>
                    <div className={classes.main_cart__summaryContent}>
                      <div className={classes.main_cart__provisionalTotal}>
                        <div>Tạm tính</div>
                        <div
                          className={classes.main_cart__provisionalTotalNumber}
                        >
                          {totalPrice.toLocaleString("en-US")}
                        </div>
                      </div>
                      <hr />
                      <div className={classes.main_cart__total}>
                        <div className={classes.main_cart__totalTitle}>
                          Tổng cộng:
                        </div>
                        <div className={classes.main_cart__totalNumber}>
                          {totalPrice.toLocaleString("en-US")}
                        </div>
                      </div>
                      <div className={classes.main_cart__totalButton}>
                        <Link href="/shipping">
                          <a>
                            <ThemeProvider theme={theme}>
                              <Button>Tiến hành thanh toán</Button>
                            </ThemeProvider>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          ) : (
            <p>Hiện tại bạn chưa có mặt hàng nào</p>
          )}
        </div>
      ) : null}
    </>
  );
};
Cart.getLayout = getLayout;

export default Cart;
