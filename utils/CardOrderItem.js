import React from "react";
import { Box, Grid } from "@material-ui/core";
import HistoryCart from "../assets/imagetest2.png";
import Image from "next/image";
import styles from "../styles/CardOrderItemStyled";
import { MyButton } from "../components/Client/Login/LoginPageStyled";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Link from "next/link";

const CardOrderItem = () => {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <div className={classes.tabInfo}>
      <Grid className={classes.tabInfoItems} container>
        <Grid item lg={4} md={4}>
          <div className={classes.tabInfoStatus}>Chờ xác nhận</div>
        </Grid>
        <Grid item lg={4} md={4}>
          <div className={classes.tabInfoCode}>Mã đơn hàng LERE 010101</div>
        </Grid>
        <Grid item lg={4} md={4}>
          <div className={classes.cancelOrder}>Hủy đơn hàng</div>
        </Grid>
      </Grid>

      <Grid className={classes.tabInfobody} container>
        <Grid item lg={5} md={5}>
          <div className={classes.tabInfo_contentLeft}>
            <div className={classes.tabInfo_contentLeftImage}>
              <Image src={HistoryCart} height={88} width={88} />
            </div>
            <div className={classes.tabInfo_contentLeftInfo}>
              <p>
                Cho thuê lều trại đẹp siêu cấp cách âm cực tốt không còn điều gì
                để chê được nữa hãy thuê mau mau nhé
              </p>
              <p style={{ color: "#888E8A", fontSize: 12, lineHeight: "18px" }}>
                Cung cấp bởi <span>du lịch 24</span>
              </p>
            </div>
          </div>
        </Grid>
        <Grid item lg={3} md={4} className={classes.quantityNumber}>
          <div className={classes.tabInfo_contentRightQuantity}>
            Số lượng: 1
          </div>
        </Grid>
        <Grid item lg={4} md={4}>
          <div className={classes.tabInfo_contentRight}>
            <div className={classes.tabInfo_contentRightTotal}>
              <div className={classes.tabInfo_contentRightAmount}>
                Tổng tiền: 40,000đ
              </div>
              <div className={classes.tabInfo_contentRightpile}>
                Giá thuê: 40.000đ | Đặt cọc 100,000đ
              </div>
              <div className={classes.tabInfo_contentRightpile}>
                Ngày thuê: 24/01/2021 - 28/2/2021 | <span>4 ngày</span>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>

      <Box className={classes.buttonActions}>
        <div className={classes.buttonActions_Content}>
          <div className={classes.buttonActions_ContentStatus}>
            <div className={classes.buttonActions_ContentIcon}></div>
            <p>Đơn hàng của bạn đang chờ xác nhận...</p>
          </div>
          <div>
            <Link href={`/account/customer/view/234214`}>
              <div className={classes.buttonDetail}>Chi tiết đơn hàng</div>
            </Link>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default CardOrderItem;
