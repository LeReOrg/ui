import React, { useState, useEffect } from "react";
import styles from "./CustomerStyled";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core";
import Image from "next/image";
const OrderDetailItem = ({ orderDetail }) => {
  const useStyles = makeStyles(styles);
  const [valueStatus, setValueStatus] = useState();
  const classes = useStyles();
  useEffect(() => {
    switch (orderDetail?.status) {
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
  }, [orderDetail?.status]);
  let startDateFormat = orderDetail?.startDate?.slice(0, 10);
  let startDay = `${startDateFormat.substr(-2, 2)}/${startDateFormat.substr(
    -5,
    2
  )}/${startDateFormat.substr(0, 4)}`;
  let endDateFormat = orderDetail?.endDate?.slice(0, 10);
  let endDay = `${endDateFormat.substr(-2, 2)}/${endDateFormat.substr(
    -5,
    2
  )}/${endDateFormat.substr(0, 4)}`;
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
            <div className={classes.orderDetailItemValue}>
              #{orderDetail?._id}
            </div>
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
              {orderDetail?.lessee?.displayName}
            </div>
          </Box>
          <Box className={classes.orderDetailItem}>
            <div className={classes.orderDetailItemTitle}>Số điện thoại:</div>
            <div className={classes.orderDetailItemValue}>
              {orderDetail?.lessee?.phoneNumber}
            </div>
          </Box>
          <Box className={classes.orderDetailItem}>
            <div className={classes.orderDetailItemTitle}>
              Địa chỉ nhận hàng:
            </div>
            <div className={classes.orderDetailItemValue}>
              {`${orderDetail?.lesseeAddress?.street},${orderDetail?.lesseeAddress?.ward},${orderDetail?.lesseeAddress?.district},${orderDetail?.lesseeAddress?.province}`}
            </div>
          </Box>
        </Grid>
      </Grid>
      <hr />
      <Box>
        <Grid container className={classes.orderEachItemContainer}>
          <Grid item lg={9} md={9} className={classes.orderEachItem}>
            <Image
              src={orderDetail?.detail?.thumbnail?.url}
              width={88}
              height={88}
            />
            <Box className={classes.orderEachItemText}>
              <p>{orderDetail?.detail?.name}</p>
              <p className={classes.orderEachLessor}>
                Cung cấp bởi <span>{orderDetail?.lessor?.displayName}</span>
              </p>
            </Box>
          </Grid>
          <Grid item lg={1} md={1}>
            <p>{orderDetail?.detail?.quantity} món</p>
          </Grid>
          <Grid item lg={2} md={2}>
            <Box className={classes.orderEachTotal}>
              <div>
                {orderDetail?.detail?.unitPrice.toLocaleString("en-US")}/ngày
              </div>
              <div>
                Cọc {orderDetail?.detail?.unitDeposit.toLocaleString("en-US")}đ
              </div>
              <div>
                {startDay} - {endDay}
              </div>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.sumaryTotalItem}>
        <Box className={classes.sumaryTotalItemFirstRow}>
          <p>Tổng tiền sản phẩm:</p>
          <Box>{Math.round(orderDetail?.amount).toLocaleString("en-US")} đ</Box>
        </Box>
        <Box className={classes.sumaryTotalItemFirstRow}>
          <p>Phí vận chuyển:</p>
          <Box>Miễn phí</Box>
        </Box>
        <Box className={classes.sumaryTotalItemFirstRow}>
          <p>Tổng thanh toán:</p>
          <Box>{Math.round(orderDetail?.amount).toLocaleString("en-US")} đ</Box>
        </Box>
      </Box>
    </div>
  );
};

export default OrderDetailItem;
