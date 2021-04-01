import React, { useEffect } from "react";
import { Box } from "@material-ui/core";
import styles from "./CustomerStyled";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import CustomerHistory from "./CustomerHistory";
import { MyButton } from "../Login/LoginPageStyled";
import CustomerInfo from "./CustomerInfo";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CustomerMobile from "./CustomerMobile";
import { useRouter } from 'next/router'

const CustomerPage = () => {
  const useStyles = makeStyles(styles);
  const router = useRouter()
  const classes = useStyles();
  const [historyCart, setHistoryCart] = React.useState(true);
  const matches = useMediaQuery("(max-width:768px)");
  useEffect(() => {
    let background = document.getElementById("container-fluid");
    if (!matches) {
      background.classList.add("customerPage");
    } else {
      background.classList.remove("customerPage");
    }
  }, [matches]);
  return (
    <div className={classes.main_customerProfile}>
      {!matches ? (
        <Grid container spacing={4}>
          <Grid
            item
            lg={2}
            md={3}
            className={classes.main_customerProfileContent}
          >
            <Box component="div" className={classes.customerInfo}>
              <p className={classes.customerInfo_title}>{router?.query.name}</p>
              <hr
                style={{
                  background: "rgba(0, 0, 0, 0.09)",
                  height: 1,
                  width: "100%",
                  marginTop: 24,
                  marginBottom: 24,
                }}
              />
              <Box component="div" display="flex" alignItems="center" mb={4}>
                <div className={classes.customerInfo_imageHistory}></div>
                <div
                  className={classes.customerInfo_textHistoryActive}
                  onClick={() => {
                    setHistoryCart(true);
                  }}
                >
                  Lịch sử đơn hàng
                </div>
              </Box>
              <Box component="div" display="flex" alignItems="center">
                <div className={classes.customerInfo_imageCustomerDetail}></div>
                <div
                  className={classes.customerInfo_textCustomerDetailInActive}
                  onClick={() => {
                    setHistoryCart(false);
                  }}
                >
                  Thông tin tài khoản
                </div>
              </Box>
            </Box>
            <Box component="div" className={classes.customerInfoButton}>
              <MyButton>Đăng ký cho thuê</MyButton>
            </Box>
          </Grid>
          <Grid item lg={10} md={9}>
            <Box className={classes.customerProcessInfo}>
              {historyCart ? (
                <CustomerHistory isMobile={false} />
              ) : (
                <CustomerInfo />
              )}
            </Box>
          </Grid>
        </Grid>
      ) : (
        <CustomerMobile />
      )}
    </div>
  );
};

export default CustomerPage;
