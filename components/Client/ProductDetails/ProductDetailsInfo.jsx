import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import { green, purple } from "@material-ui/core/colors";
import { Typography, Box, Button } from "@material-ui/core";
import AddCircleOutlineSharpIcon from "@material-ui/icons/AddCircleOutlineSharp";
import RemoveCircleOutlineSharpIcon from "@material-ui/icons/RemoveCircleOutlineSharp";
import ImageGallery from "react-image-gallery";
import { DateRangePicker } from "rsuite";
import styles from "./ProductDetailsStyled";
import {
  cartState,
  addCart,
  showModalAddProductState,
} from "../../../lib/recoil-root";
import { useRecoilState } from "recoil";

const ProductDetailsInfo = ({ detailsProduct }) => {
  const { combine, allowedMaxDays, beforeToday } = DateRangePicker;
  const {
    name,
    images,
    price,
    _id,
    depositPrice,
    label,
    shortestHiredDays,
    address,
    discounts,
    user,
    requiredLicenses,
    category,
    quantity,
  } = detailsProduct;
  const [showModalAddCart, setShowModalAddCart] = useRecoilState(
    showModalAddProductState
  );
  let arrayImages = [];
  images.map((item, index) => {
    let objectImages = {};
    objectImages.original = item.url;
    objectImages.thumbnail = item.url;
    arrayImages.push(objectImages);
  });
  const [cart, setCart] = useRecoilState(cartState);
  const [totalDays, setTotalDays] = useState();
  const [disabled, setDisabled] = useState(true);
  const [moreThanMinDate, setMoreThanMinDate] = useState(false);
  const [quantityItem, setQuantityItem] = useState(1);
  const [itemAdd, setItemAdd] = useState({
    id: _id,
    productId: _id,
    name: name,
    formDate: "",
    toDate: "",
    price: price,
    quantity: quantityItem,
    image: images[0],
    depositPrice: depositPrice,
    user: user,
    totalDays: totalDays,
  });
  useEffect(() => {
    setItemAdd((preState) => ({
      ...preState,
      quantity: quantityItem,
    }));
  }, [quantityItem]);

  const addToCart = (items) => {
    const newCart = addCart(cart, items);
    setCart(newCart);
    setShowModalAddCart(false);
    setShowModalAddCart(true);
  };
  const renderDiscount = () =>
    discounts.map((item, index) => (
      <div key={index} className={classes.itemDiscount}>
        <>
          {item.days} ngày {item.discount}%
        </>
      </div>
    ));

  const renderRequire = () =>
    requiredLicenses.map((item, index) => (
      <div key={index} className={classes.itemRequired}>
        <>
          {item == 1 && "CMND"}
          {item == 2 && "Căn cước công dân"}
          {item == 3 && "Bằng lái"}
        </>
      </div>
    ));
  const useStyled = makeStyles(styles);
  const classes = useStyled({ lengh: requiredLicenses.length });
  const StyledButton = withStyles((theme) => ({
    root: {
      backgroundColor: "#2FAF62",
      borderRadius: 4,
      border: 0,
      color: theme.palette.getContrastText(purple[500]),
      height: 48,
      boxShadow: "none",
      padding: "9px 16px",
      "&:hover": {
        backgroundColor: "#2FAF62",
      },
    },
    label: {
      textTransform: "initial",
      fontSize: 16,
      lineHeight: "22px",
      fontWeight: "bold",
      fontStyle: "normal",
    },
  }))(Button);

  // Handle Quantity
  const handleIncreaseQuantity = () => {
    let newState = quantityItem + 1;
    if (newState <= quantity) setQuantityItem(newState);
  };
  const handleDecreaseQuantity = () => {
    if (quantityItem > 1) {
      let newState = quantityItem - 1;
      setQuantityItem(newState);
    }
  };
  const getValueDatePiker = (values) => {
    if (values) {
      const fromFormat = `${values[0].getFullYear()}-${
        values[0].getMonth() + 1 > 10
          ? values[0].getMonth() + 1
          : `0${values[0].getMonth() + 1}`
      }-${values[0].getDate()}`;
      const toFormat = `${values[1].getFullYear()}-${
        values[1].getMonth() + 1 > 10
          ? values[1].getMonth() + 1
          : `0${values[1].getMonth() + 1}`
      }-${values[1].getDate()}`;
      const totalDate =
        (values[1].getTime() - values[0].getTime()) / (1000 * 3600 * 24);
      setTotalDays(totalDate);
      setItemAdd((preState) => ({
        ...preState,
        totalDays: totalDate,
      }));
      if (totalDate >= shortestHiredDays) {
        setItemAdd((preState) => ({
          ...preState,
          formDate: fromFormat,
          toDate: toFormat,
        }));
        setMoreThanMinDate(false);
        setDisabled(false);
      } else {
        setMoreThanMinDate(true);
      }
    }
  };
  return (
    <div className={classes.main_list}>
      <Grid container spacing={4}>
        <Grid item lg={6} md={12} xs={12} className={classes.main_list_Left}>
          <ImageGallery
            showNav={false}
            showPlayButton={false}
            autoPlay={false}
            slideDuration={2000}
            items={arrayImages}
            slideOnThumbnailOver={false}
            showFullscreenButton={false}
          />
        </Grid>
        <Grid item lg={6} md={12} xs={12} className={classes.main_list_Right}>
          <Box className={classes.main_list_firstRow}>
            <Box display="flex" alignItems="center">
              {discounts && discounts.length > 0 && renderDiscount()}
            </Box>

            <Typography className={classes.poster_info} align="left">
              Đăng bởi: <b className={classes.poster}>{user.displayName}</b>
            </Typography>
          </Box>
          <Typography className={classes.titleDetailInfo} align="left">
            {name && name}
          </Typography>
          <div className={classes.priceandtypeproduct}>
            <Box className={classes.prices}>
              <Box className={classes.priceRent}>
                <div className={classes.priceRentFirst}>
                  <div className="priceLogo"></div>
                  <p>Giá thuê:</p>
                </div>
                {price?.toLocaleString("en-US")}đ/ngày
              </Box>
              <Box className={classes.priceDeposit}>
                <div className={classes.priceRentFirst}>
                  <div className="depositpriceLogo"></div>
                  <p>Đặt cọc:</p>
                </div>
                {depositPrice?.toLocaleString("en-US")}vnđ
              </Box>
            </Box>
            <Box className={classes.lable}>
              {label && (
                <Box
                  className={classes.lableContent}
                  display="flex"
                  alignItems="center"
                >
                  <p>Nhãn hàng:</p>
                  <span>{label}</span>
                </Box>
              )}

              <Box display="flex" alignItems="center">
                <p>Danh mục:</p>
                <span>{category && category?.name}</span>
              </Box>
            </Box>
          </div>
          <hr />
          <Box className={classes.quantityItemContent}>
            <Box>
              <Typography className={classes.quantity_title} align="left">
                Số lượng:
              </Typography>
              <Box className={classes.quantity_space}>
                <RemoveCircleOutlineSharpIcon
                  className={
                    quantityItem == 1
                      ? classes.button_color_minus_1
                      : classes.button_color_minus
                  }
                  onClick={handleDecreaseQuantity}
                />
                <b className={classes.quantity}>{quantityItem}</b>
                <AddCircleOutlineSharpIcon
                  className={
                    quantityItem == quantity
                      ? classes.button_color_minus_1
                      : classes.button_color_minus
                  }
                  onClick={handleIncreaseQuantity}
                />
              </Box>
            </Box>
            <Box>
              <Typography className={classes.quantity_title} align="right">
                Địa chỉ hàng
              </Typography>
              <Box className={classes.addressProduct}>
                <p>{address && address.street}</p>
                <p>
                  {address && address.ward} ,{address && address.district},
                  {address && address.province}
                </p>
              </Box>
            </Box>
          </Box>
          <Box mb={2} className={classes.quantity_restWebMode}>
            <Typography className={classes.quantity_title}>
              Số lượng còn lại: <span>{quantity}</span>
            </Typography>
          </Box>
          <Box className={classes.timeRentMobileMode}>
            <Box>
              <Box className={classes.hire_time}>
                <p>Min days:</p> <p>{shortestHiredDays} ngày</p>
              </Box>
            </Box>
            <Box className={classes.hire_time}>
              <Box fontWeight="bold">Yêu cầu giấy tờ</Box>
              <Box mt={2}>{renderRequire()}</Box>
            </Box>
            <Box className={classes.quantityRestMobile}>
              <p>Số lượng còn lại:</p> <p>{quantity}</p>
            </Box>

            <Box className={classes.quantityMobile}>
              <Typography className={classes.quantity_title} align="left">
                Số lượng:
              </Typography>
              <Box className={classes.quantity_space}>
                <RemoveCircleOutlineSharpIcon
                  className={
                    quantityItem == 1
                      ? classes.button_color_minus_1
                      : classes.button_color_minus
                  }
                  onClick={handleDecreaseQuantity}
                />
                <b className={classes.quantity}>{quantityItem}</b>
                <AddCircleOutlineSharpIcon
                  className={
                    quantityItem == quantity
                      ? classes.button_color_minus_1
                      : classes.button_color_minus
                  }
                  onClick={handleIncreaseQuantity}
                />
              </Box>
            </Box>
            <Box>
              <Box className={classes.timeCalendarMobileMode}>
                <Box>Thời gian thuê:</Box>
                {totalDays && (
                  <Box className={classes.totalDate}>{totalDays} ngày</Box>
                )}
              </Box>
              <div className={classes.hire_time_space}>
                <Box className={classes.hire_time_width}>
                  <DateRangePicker
                    block
                    format="DD-MM-YYYY"
                    onChange={(value) => getValueDatePiker(value)}
                    placeholder="Chọn ngày thuê"
                    disabledDate={beforeToday()}
                    showOneCalendar={true}
                    showWeekNumbers={false}
                    size="lg"
                    isoWeek
                    ranges={[]}
                  />
                </Box>
              </div>
            </Box>
          </Box>
          <Grid container spacing={1} className={classes.timeRentWebMode}>
            <Grid item lg={5} md={5}>
              <Typography className={classes.hire_time} align="left">
                Thời gian thuê:
              </Typography>
              <Typography className={classes.hire_time_sub} align="left">
                Chọn ngày thuê
              </Typography>
              <div className={classes.hire_time_space}>
                <Box className={classes.hire_time_width}>
                  <DateRangePicker
                    format="DD-MM-YYYY"
                    onChange={(value) => getValueDatePiker(value)}
                    placeholder="Chọn ngày thuê"
                    disabledDate={beforeToday()}
                    showOneCalendar={true}
                    showWeekNumbers={false}
                    size="lg"
                    isoWeek
                    ranges={[]}
                  />
                </Box>
              </div>
            </Grid>
            <Grid item lg={4} md={4}>
              <Typography className={classes.hire_time} align="left">
                Min days: {shortestHiredDays} ngày
              </Typography>
              <Box className={classes.hire_time_sub}>Số ngày thuê</Box>
              {totalDays && (
                <Box className={classes.totalDate}>{totalDays} ngày</Box>
              )}
            </Grid>
            <Grid item lg={3} md={3} className={classes.requireItems}>
              <Typography className={classes.hire_time}>
                Yêu cầu giấy tờ
              </Typography>
              <Box mt={2}>{renderRequire()}</Box>
            </Grid>
          </Grid>
          {moreThanMinDate && (
            <p>Vui lòng chọn số ngày thuê nhiều hơn {shortestHiredDays} ngày</p>
          )}
          <hr />
          <div className={classes.button_cart}>
            <Box>
              <StyledButton
                onClick={() => addToCart(itemAdd)}
                variant="contained"
                color="primary"
                disabled={disabled}
              >
                Thêm Giỏ Hàng
              </StyledButton>
            </Box>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductDetailsInfo;
