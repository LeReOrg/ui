import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { withStyles } from "@material-ui/core/styles";
import { green, purple } from "@material-ui/core/colors";
import { Typography, Box, Button } from "@material-ui/core";
import AddCircleOutlineSharpIcon from "@material-ui/icons/AddCircleOutlineSharp";
import RemoveCircleOutlineSharpIcon from "@material-ui/icons/RemoveCircleOutlineSharp";
import ImageGallery from "react-image-gallery";
import { DateRangePicker } from "rsuite";
import styles from "./ProductDetailsStyled";
import { isMobileDevice } from "../../../utils/FunctionUses";
import { cartState, addCart } from "../../../lib/recoil-root";
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
  let arrayImages = [];
  images.map((item, index) => {
    let objectImages = {};
    objectImages.original = item.url;
    objectImages.thumbnail = item.url;
    arrayImages.push(objectImages);
  });
  const [quantityItem, setQuantityItem] = useState(1);
  const [itemAdd, setItemAdd] = useState({
    id: _id,
    name: name,
    formDate: "",
    toDate: "",
    price: price,
    quantityIncrease: 0,
    image: images[0],
    depositPrice: depositPrice,
  });
  useEffect(() => {
    let background = document.getElementById("container-fluid");
    background.classList.add("customerPage");
    return () => {
      background.classList.remove("customerPage");
    };
  }, []);
  useEffect(() => {
    setItemAdd((preState) => ({
      ...preState,
      quantityIncrease: quantityItem,
    }));
  }, [quantityItem]);
  const [cart, setCart] = useRecoilState(cartState);
  const [totalDays, setTotalDays] = useState();

  const addToCart = (items) => {
    const newCart = addCart(cart, items);
    setCart(newCart);
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
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
      padding: "9px 16px",
      "&:hover": {
        backgroundColor: green[700],
      },
    },
    label: {
      textTransform: "capitalize",
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
    const totoDate =
      (values[1].getTime() - values[0].getTime()) / (1000 * 3600 * 24);
    setTotalDays(totoDate);
    setItemAdd((preState) => ({
      ...preState,
      formDate: values[0],
      toDate: values[1],
    }));
  };
  return (
    <div className={classes.main_list}>
      <Grid container spacing={8}>
        <Grid item lg={6} md={6} xs={12} className={classes.main_list_Left}>
          <ImageGallery
            showNav={false}
            showPlayButton={false}
            autoPlay={true}
            slideDuration={2000}
            items={arrayImages}
            slideOnThumbnailOver={false}
            showFullscreenButton={false}
          />
        </Grid>
        <Grid item lg={6} md={6} xs={12} className={classes.main_list_Right}>
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
          <Box className={classes.prices}>
            <Box display="flex" alignItems="center">
              <div className="priceLogo"></div>
              <p>Giá thuê:</p>
              {price?.toLocaleString("en-US")}đ/ngày
            </Box>
            <Box display="flex" alignItems="center">
              <div className="depositpriceLogo"></div>
              <p>Đặt cọc:</p>
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
          <hr style={{ borderTop: "1px solid #C3C7C5" }} />
          <div className="quantity_web">
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
            <Box mb={2}>
              <Typography className={classes.quantity_title}>
                Số lượng còn lại: <span>{quantity}</span>
              </Typography>
            </Box>
          </div>
          <div className="quantity_mobile">
            <Grid container>
              <Grid item lg={6} md={6} xs={6}>
                <Typography className={classes.quantity_title} align="left">
                  Số lượng:
                </Typography>
              </Grid>
              <Grid item lg={6} md={6} xs={6}>
                <div className={classes.quantity_space} align="right">
                  <RemoveCircleOutlineSharpIcon
                    className={classes.button_color_minus}
                    onClick={handleDecreaseQuantity}
                  />
                  <b className={classes.quantity}>{quantityItem}</b>
                  <AddCircleOutlineSharpIcon
                    className={classes.button_color_plus}
                    onClick={handleIncreaseQuantity}
                  />
                </div>
              </Grid>
              <div className={classes.button_cart}>
                <Box>
                  <StyledButton
                    onClick={() => addToCart(itemAdd)}
                    variant="contained"
                    color="primary"
                  >
                    Chọn vào giỏ hàng
                  </StyledButton>
                </Box>
              </div>
            </Grid>
          </div>
          <Grid container>
            <Grid item lg={5}>
              <Typography className={classes.hire_time} align="left">
                Thời gian thuê:
              </Typography>
              <Typography className={classes.hire_time_sub} align="left">
                Chọn ngày
              </Typography>
              <div className={classes.hire_time_space}>
                <Box className={classes.hire_time_width}>
                  <DateRangePicker
                    onChange={(value) => getValueDatePiker(value)}
                    placeholder="Chọn ngày"
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
            <Grid item lg={4}>
              <Typography className={classes.hire_time} align="left">
                Min days: {shortestHiredDays} ngày
              </Typography>
              <Box className={classes.hire_time_sub}>Số ngày thuê</Box>
              {totalDays && (
                <Box className={classes.totalDate}>{totalDays} ngày</Box>
              )}
            </Grid>
            <Grid item lg={3} className={classes.requireItems}>
              <Typography className={classes.hire_time}>
                Yêu cầu giấy tờ
              </Typography>
              <Box mt={2}>{renderRequire()}</Box>
            </Grid>
          </Grid>
          <hr style={{ borderTop: "1px solid #C3C7C5" }} />
          <div className={classes.button_cart}>
            <Box>
              <StyledButton
                onClick={() => addToCart(itemAdd)}
                variant="contained"
                color="primary"
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
