import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles, { theme } from "../styles/PaymentSuccessStyled";
import { Box, Button } from "@material-ui/core";
import { getLayout } from "../container/MainLayout";
import { ThemeProvider } from "@material-ui/core/styles";
import Link from "next/link";
const PaymentSuccess = () => {
  const useStyled = makeStyles(styles);
  const classes = useStyled();
  return (
    <Box className={classes.paymentSuccess_main}>
      <Box className={classes.paymentSuccessImage}></Box>
      <Box className={classes.paymentSuccessThank}>
        Cảm ơn bạn đã đặt tại Le & Re 😍
      </Box>
      <Box className={classes.paymentSuccessOrderId}>Mã đơn hàng: </Box>
      <Link href="/">
        <a>
          <ThemeProvider theme={theme}>
            <Button>Quay lại trang chủ</Button>
          </ThemeProvider>
        </a>
      </Link>
    </Box>
  );
};
PaymentSuccess.getLayout = getLayout;

export default PaymentSuccess;
