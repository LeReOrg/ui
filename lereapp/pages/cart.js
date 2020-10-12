import React from "react";
import { makeStyles } from "@material-ui/styles";
import CartItem from "../utils/CartItem";
import Grid from "@material-ui/core/Grid";

const Cart = () => {
  const useStyled = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    main_cart__title: {
      marginBottom: 16,
      fontStyle: "normal",
      fontSize: 24,
      [theme.breakpoints.down("xs")]: {
        fontSize: 16,
      },
    },
    main_cart: {
      width: "90%",
      margin: "32px auto 0 auto",
      [theme.breakpoints.down("xs")]: {
        margin: "16px auto 0 auto",
        width: "95%",
      },
    },
    main_cart__info: {
      borderRadius: 8,
      border: "1px solid rgba(0, 0, 0, 0.15)",
      [theme.breakpoints.down("xs")]: {
        margin: 0,
        border: "none",
      },
    },
    main_cart__summary: {
      borderRadius: 8,
      border: "1px solid rgba(0, 0, 0, 0.15)",
    },
    main_cart__content: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    main_cart__infoItem: {},
    main_cart__summaryContent: {
      margin: "24px 24px",
    },
    main_cart__provisionalTotal: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    main_cart__total: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  }));
  const classes = useStyled();
  const testItem = [
    {
      id: "1",
      name: "testa",
      cungcap: "dulichaa",
      price: "100000",
      coc: "10000",
      songay: 1,
      soluong: 1,
      image: "https://9mobi.vn/cf/images/2015/03/nkk/hinh-dep-1.jpg",
    },
    {
      id: "2",
      name: "testb",
      cungcap: "dulichaa",
      price: "100000",
      coc: "10000",
      songay: 1,
      soluong: 2,
      image: "https://i.9mobi.vn/cf/images/2015/03/nkk/hinh-dep-3.jpg",
    },
    {
      id: "2",
      name: "testb",
      cungcap: "dulichaa",
      price: "100000",
      coc: "10000",
      songay: 1,
      soluong: 2,
      image: "https://i.9mobi.vn/cf/images/2015/03/nkk/hinh-dep-3.jpg",
    },
    {
      id: "2",
      name: "testb",
      cungcap: "dulichaa",
      price: "100000",
      coc: "10000",
      songay: 1,
      soluong: 2,
      image: "https://i.9mobi.vn/cf/images/2015/03/nkk/hinh-dep-3.jpg",
    },
    {
      id: "2",
      name: "testb",
      cungcap: "dulichaa",
      price: "100000",
      coc: "10000",
      songay: 1,
      soluong: 2,
      image: "https://i.9mobi.vn/cf/images/2015/03/nkk/hinh-dep-3.jpg",
    },
    {
      id: "2",
      name: "testb",
      cungcap: "dulichaa",
      price: "100000",
      coc: "10000",
      songay: 1,
      soluong: 2,
      image: "https://i.9mobi.vn/cf/images/2015/03/nkk/hinh-dep-3.jpg",
    },
    {
      id: "2",
      name: "testb",
      cungcap: "dulichaa",
      price: "100000",
      coc: "10000",
      songay: 1,
      soluong: 2,
      image: "https://i.9mobi.vn/cf/images/2015/03/nkk/hinh-dep-3.jpg",
    },
    {
      id: "2",
      name: "testb",
      cungcap: "dulichaa",
      price: "100000",
      coc: "10000",
      songay: 1,
      soluong: 2,
      image: "https://i.9mobi.vn/cf/images/2015/03/nkk/hinh-dep-3.jpg",
    },
    {
      id: "2",
      name: "testb",
      cungcap: "dulichaa",
      price: "100000",
      coc: "10000",
      songay: 1,
      soluong: 2,
      image: "https://i.9mobi.vn/cf/images/2015/03/nkk/hinh-dep-3.jpg",
    },
    {
      id: "2",
      name: "testb",
      cungcap: "dulichaa",
      price: "100000",
      coc: "10000",
      songay: 1,
      soluong: 2,
      image: "https://i.9mobi.vn/cf/images/2015/03/nkk/hinh-dep-3.jpg",
    },
    {
      id: "2",
      name: "testb",
      cungcap: "dulichaa",
      price: "100000",
      coc: "10000",
      songay: 1,
      soluong: 2,
      image: "https://i.9mobi.vn/cf/images/2015/03/nkk/hinh-dep-3.jpg",
    },
    {
      id: "2",
      name: "testb",
      cungcap: "dulichaa",
      price: "100000",
      coc: "10000",
      songay: 1,
      soluong: 2,
      image: "https://i.9mobi.vn/cf/images/2015/03/nkk/hinh-dep-3.jpg",
    },
    {
      id: "2",
      name: "testb",
      cungcap: "dulichaa",
      price: "100000",
      coc: "10000",
      songay: 1,
      soluong: 2,
      image: "https://i.9mobi.vn/cf/images/2015/03/nkk/hinh-dep-3.jpg",
    },
    {
      id: "2",
      name: "testb",
      cungcap: "dulichaa",
      price: "100000",
      coc: "10000",
      songay: 1,
      soluong: 2,
      image: "https://i.9mobi.vn/cf/images/2015/03/nkk/hinh-dep-3.jpg",
    },
    {
      id: "2",
      name: "testb",
      cungcap: "dulichaa",
      price: "100000",
      coc: "10000",
      songay: 1,
      soluong: 2,
      image: "https://i.9mobi.vn/cf/images/2015/03/nkk/hinh-dep-3.jpg",
    },
    {
      id: "2",
      name: "testb",
      cungcap: "dulichaa",
      price: "100000",
      coc: "10000",
      songay: 1,
      soluong: 2,
      image: "https://i.9mobi.vn/cf/images/2015/03/nkk/hinh-dep-3.jpg",
    },
    {
      id: "2",
      name: "testb",
      cungcap: "dulichaa",
      price: "100000",
      coc: "10000",
      songay: 1,
      soluong: 2,
      image: "https://i.9mobi.vn/cf/images/2015/03/nkk/hinh-dep-3.jpg",
    },
  ];
  const totalPrice = 190000;
  const renderItemCart = () =>
    testItem.map((item, index) => <CartItem item={item} key={index} />);

  return (
    <div className={classes.main_cart}>
      <h1 className={classes.main_cart__title}>Giỏ hàng của bạn</h1>
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
                  <div>{totalPrice}</div>
                </div>
                <hr />
                <div className={classes.main_cart__total}>
                  <div>Tổng cộng:</div>
                  <div>{totalPrice}</div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Cart;
