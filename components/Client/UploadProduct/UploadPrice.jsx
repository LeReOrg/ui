import React, { useState } from "react";
import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import styles from "./UploadProductStyled";
import CustomForm from "../../../utils/CustomForm.js";

const UploadPrice = ({ name, rent_date, percent_discount, discountItems }) => {
  const useStyled = makeStyles(styles);
  const [discountList, setDiscountList] = useState([""]);
  const [listDiscount, setListDiscount] = useState([]);
  const classes = useStyled();
  const renderDisCountItem = () =>
    discountList.map((item , index) => (
      <Box display="flex" key={index}>
        <CustomForm
          inputType="input"
          className={`${classes.inputTagPrice} ${classes.inputTagDateRent}`}
          name={name}
          nameInput="rent_date"
          placeholder="VD: 5"
        />
        <CustomForm
          inputType="input"
          className={classes.inputTagPrice}
          name={name}
          nameInput="percent_discount"
          placeholder="5"
        />
      </Box>
    ));
  const addItemList = () => {
    setDiscountList(["", ...discountList]);
    const item = {
      days: rent_date,
      discount: percent_discount,
    };
    setListDiscount([...listDiscount, item]);
    discountItems(item);
  };
  const renderDiscount = () =>
    listDiscount.map((item, index) => (
      <div key={index} className={classes.itemDiscount}>
        <>
          {item.days} ngày {item.discount}%
        </>
      </div>
    ));
  return (
    <>
      <Grid container spacing={3}>
        <Grid item lg={4} md={4} xs={12}>
          <Box className={classes.rowInfo}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <p className={classes.titleText}>Nhập giá thuê:</p>
              <p className={classes.titleNumberText}>VNĐ/Ngày</p>
            </Box>

            <div className={classes.titleTextInput}>
              <CustomForm
                inputType="input"
                className={classes.inputTagPrice}
                name={name}
                nameInput="price"
                placeholder="Nhập giá thuê sản phẩm"
              />
            </div>
          </Box>
        </Grid>
        <Grid item lg={4} md={4} xs={12}>
          <Box className={classes.rowInfo}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <p className={classes.titleText}>Yêu cầu đặt cọc:</p>
              <p className={classes.titleNumberText}>VNĐ</p>
            </Box>
            <div className={classes.titleTextInput}>
              <CustomForm
                inputType="input"
                className={classes.inputTagPrice}
                name={name}
                nameInput="depositPrice"
                placeholder="Nhập giá cọc sản phẩm"
              />
            </div>
          </Box>
        </Grid>
        <Grid item lg={4} md={4} xs={12}>
          <Box className={classes.rowInfo}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <p className={classes.titleText}>Min days:</p>
              <p className={classes.titleNumberText}>Ngày</p>
            </Box>

            <div className={classes.titleTextInput}>
              <CustomForm
                inputType="number"
                className={classes.inputTagPrice}
                name={name}
                nameInput="shortestHiredDays"
                placeholder="Số ngày tối thiểu"
              />
            </div>
          </Box>
        </Grid>
      </Grid>
      <Box className={classes.discountPrice}>
        <p className={classes.titleText}>Giảm giá thuê:</p>
      </Box>
      <Grid container spacing={2} className={classes.discountContainer}>
        <Grid item lg={5} md={5}>
          <Box>
            <Box display="flex" mb={1}>
              <Grid container>
                <Grid item lg={6} md={6}>
                  <div className={classes.titleSubDiscount}>Tổng ngày thuê</div>
                </Grid>
                <Grid item lg={6} md={6}>
                  <div className={classes.titleSubDiscount}>% Giảm giá</div>
                </Grid>
              </Grid>
            </Box>
            <Box>{renderDisCountItem()}</Box>
          </Box>
        </Grid>
        <Grid
          item
          lg={2}
          md={2}
          style={{ maxWidth: 130, borderRight: "3px solid #111E16" }}
        >
          <Box
            className={classes.addDiscountItem}
            onClick={() => addItemList()}
          >
            Thêm vào
          </Box>
        </Grid>
        <Grid
          item
          lg={5}
          md={5}
          className={classes.uploadMain_InfoItemDetailDes}
        >
          {listDiscount && listDiscount.length > 0 ? (
            renderDiscount()
          ) : (
            <p>Bạn không có giảm giá nào</p>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default UploadPrice;
