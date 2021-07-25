import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CartItem from "../utils/CartItem";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Link from "next/link";
import styles from "../styles/CartStyled";
import { useRecoilValue, useRecoilState } from "recoil";
import { cartState, cartTotal } from "../lib/recoil-root";
import { userState } from "../lib/recoil-root";
import { getLayout } from "../container/MainLayout";
import { theme } from "../styles/ShippingStyled";
const Cart = (props) => {
  const [cart, setCart] = useRecoilState(cartState);
  const { user } = useRecoilValue(userState);
  const totalPrice = useRecoilValue(cartTotal);
  const useStyled = makeStyles(styles);
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
                <Grid item lg={9} xs={12}>
                  <div className={classes.main_cart__info}>
                    <div className={classes.main_cart__infoItem}>
                      {renderItemCart()}
                    </div>
                  </div>
                </Grid>
                <Grid item lg={3} xs={12}>
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
                              <Button>Thuê sẩn phẩm</Button>
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
