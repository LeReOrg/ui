import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import CartItem from "../utils/CartItem";
import Grid from "@material-ui/core/Grid";
import { testItem } from "../components/Client/dataEx";
import Button from "@material-ui/core/Button";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { connect } from "react-redux";
import Link from "next/link";

const Cart = (props) => {
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
      [theme.breakpoints.down("sm")]: {
        border: "none",
      },
    },
    main_cart__content: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    main_cart__infoItem: {},
    main_cart__summaryContent: {
      margin: "24px 24px",
      [theme.breakpoints.down("sm")]: {
        margin: 0,
      },
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
      marginBottom: 30,
    },
    main_cart__provisionalTotalNumber: {
      fontWeight: "bold",
      fontSize: 16,
    },
    main_cart__totalTitle: {
      fontWeight: "bold",
      fontSize: 20,
    },
    main_cart__totalNumber: {
      fontWeight: "bold",
      fontSize: 20,
      color: "#2FAF62",
    },
    main_cart__totalButton: {
      width: "50%",
      margin: "0 auto",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },
  }));
  const theme = createMuiTheme({
    overrides: {
      // Style sheet name ⚛️
      MuiButton: {
        // Name of the rule
        text: {
          // Some CSS
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
  const [totalPrice, setTotalPrice] = useState(0);
  const classes = useStyled();
   
  useEffect(() => {
    if (props.cartItem) {
      let totalPriceTest = props.cartItem.cartItems.reduce(function (
        accumulator,
        item
      ) {
        return accumulator + item.quantity * item.price;
      },
      0);
      setTotalPrice(totalPriceTest);
    }
  }, [props.cartItem.cartItems]);
  const renderItemCart = () =>
    props.cartItem.cartItems.map((item, index) => (
      <CartItem item={item} key={index} />
    ));

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
                  <div className={classes.main_cart__provisionalTotalNumber}>
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
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    cartItem: state.carts,
  };
};
export default connect(mapStateToProps)(Cart);
