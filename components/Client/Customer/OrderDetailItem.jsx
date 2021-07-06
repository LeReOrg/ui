import React, { useState, useEffect } from "react";
import styles from "./CustomerStyled";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core";

const OrderDetailItem = ({ orderDetail }) => {
  const {
    // amount,
    // deposit,
    status,
    // startDate,
    // hiredDays,
    // endDate,
    _id,
    lesseeAddress,
    // detail,
    lessee,
  } = orderDetail;
  const useStyles = makeStyles(styles);
  const [valueStatus, setValueStatus] = useState();

  const classes = useStyles();
  useEffect(() => {
    switch (status) {
      case "PENDING CONFIRM":
        setValueStatus("Chờ xác nhận");
        break;
      case "AWAITING PICKUP":
        setValueStatus("Chờ lấy hàng");
        break;
      case "DELIVERING":
        setValueStatus("Đang giao hàng");
        break;
      case "DELIVERED":
        setValueStatus("Đã giao hàng");
        break;
      case "AWAITING RETURN PICKUP":
        setValueStatus("Chờ xác nhận");
        break;
      case "RETURNING":
        setValueStatus("Chờ xác nhận");
        break;
      case "RETURNED":
        setValueStatus("Chờ xác nhận");
        break;
      case "CANCELLED":
        setValueStatus("Chờ xác nhận");
        break;
      default:
        break;
    }
  }, [status]);
  return (
    <div className={classes.orderDetailContainer}>
      <Box className={classes.orderDetailStatus} textAlign="right">
        Trạng thái: <span>{valueStatus}</span>
      </Box>
      <Grid container className={classes.firstBox}>
        <Grid item lg={6} md={6}>
          <Box className={classes.orderDetailTitle}>Thông tin đơn hàng</Box>
          <Box className={classes.orderDetailItem}>
            <div className={classes.orderDetailItemTitle}>Mã đơn hàng:</div>
            <div className={classes.orderDetailItemValue}>#{_id}</div>
          </Box>
          <Box className={classes.orderDetailItem}>
            <div className={classes.orderDetailItemTitle}>
              Thời gian đặt hàng:
            </div>
            <div className={classes.orderDetailItemValue}></div>
          </Box>
          <Box className={classes.orderDetailItem}>
            <div className={classes.orderDetailItemTitle}>
              Hình thức thanh toán:
            </div>
            <div className={classes.orderDetailItemValue}>COD</div>
          </Box>
        </Grid>
        <Grid item lg={6} md={6}>
          <Box className={classes.orderDetailTitle}>Thông tin người nhận</Box>
          <Box className={classes.orderDetailItem}>
            <div className={classes.orderDetailItemTitle}>Người nhận:</div>
            <div className={classes.orderDetailItemValue}>
              {lessee.displayName}
            </div>
          </Box>
          <Box className={classes.orderDetailItem}>
            <div className={classes.orderDetailItemTitle}>Số điện thoại:</div>
            <div className={classes.orderDetailItemValue}>
              {lessee.phoneNumber}
            </div>
          </Box>
          <Box className={classes.orderDetailItem}>
            <div className={classes.orderDetailItemTitle}>
              Địa chỉ nhận hàng:
            </div>
            <div className={classes.orderDetailItemValue}>
              {`${lesseeAddress.street},${lesseeAddress.ward},${lesseeAddress.district},${lesseeAddress.province}`}
            </div>
          </Box>
        </Grid>
      </Grid>
      <hr />
    </div>
  );
};

export default OrderDetailItem;
