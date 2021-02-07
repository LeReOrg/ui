import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { withStyles } from "@material-ui/core/styles";
import { green, purple } from "@material-ui/core/colors";
import { Typography, Box, Button } from "@material-ui/core";
import AddCircleOutlineSharpIcon from "@material-ui/icons/AddCircleOutlineSharp";
import RemoveCircleOutlineSharpIcon from "@material-ui/icons/RemoveCircleOutlineSharp";
import ImageGallery from "react-image-gallery";
import Collapse from "@material-ui/core/Collapse";
import { DateRangePicker } from "rsuite";
import { useTheme } from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import moment from "moment";
import styles from "./ProductDetailsStyled";
const ProductDetailsInfo = ({ ...props }) => {
  const { combine, allowedMaxDays, beforeToday } = DateRangePicker;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"), {
    defaultMatches: true,
  });
  const { name, image_url, price, owner_id, thumbnails } = props.detailsProduct;
  const [checked, setChecked] = useState(false);
  const [totalDate, setTotalDate] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [itemAdd, setItemAdd] = useState({
    id: 0,
    categoryItem: 0,
    totalDateRent: 0,
    quantity: 0,
  });

  const [dateRent, setDateRent] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  useEffect(() => {
    setItemAdd((preState) => ({
      ...preState,
      id: props.detailsProduct.id,
      categoryItem: props.detailsProduct.category_id,
      totalDateRent: totalDate,
      name: props.detailsProduct.name,
      price: price,
      quantity: quantity,
    }));
  }, [totalDate, quantity]);
  useEffect(() => {
    var calculateTotalDate = moment(dateRent[0].endDate).diff(
      moment(dateRent[0].startDate),
      "days"
    );
    setTotalDate(calculateTotalDate);
  }, [dateRent]);

  const updateItem = () => {};
  const useStyled = makeStyles(styles);
  const classes = useStyled();

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
      marginTop: "2%",
      padding: "12px 24px",
      "&:hover": {
        backgroundColor: green[700],
      },
    },
    label: {
      textTransform: "capitalize",
      fontSize: 16,
      fontWeight: "bold",
      fontStyle: "normal",
    },
  }))(Button);

  // Handle Quantity
  const handleIncreaseQuantity = () => {
    let newState = quantity + 1;
    setQuantity(newState);
    updateItem();
  };
  const handleSelect = (ranges) => {
    console.log(ranges);
  };
  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      let newState = quantity - 1;
      setQuantity(newState);
    }
  };
  const getValueDatePiker = (values) => {
    console.log(values);
  };
  const showDatePicker = () => {
    setChecked(!checked);
  };

  return (
    <div className={classes.main_list}>
      <Grid container spacing={8}>
        {/* <Grid item lg={6} md={6} xs={12}>
          <ImageGallery
            showNav={false}
            showPlayButton={false}
            autoPlay={true}
            slideDuration={1000}
            items={}
            slideOnThumbnailOver={true}
            useBrowserFullscreen={false}
          />
        </Grid> */}
        <Grid item lg={6} md={6} xs={12}>
          <Typography className={classes.titleDetailInfo} align="left">
            {name}
          </Typography>
          <Typography className={classes.prices} align="left">
            {price.toLocaleString("en-US")}đ/ngày
          </Typography>
          <Typography className={classes.poster_info} align="left">
            Đăng bởi: <b className={classes.poster}>{owner_id}</b>
          </Typography>
          <hr />
          <Grid container>
            <Grid item lg={4} md={6} xs={12}>
              <div className="quantity_web">
                <Grid container>
                  <Typography className={classes.quantity_title} align="left">
                    Số lượng:
                  </Typography>
                  <Grid container className={classes.quantity_space}>
                    <RemoveCircleOutlineSharpIcon
                      className={
                        quantity == 1
                          ? classes.button_color_minus_1
                          : classes.button_color_minus
                      }
                      onClick={handleDecreaseQuantity}
                    />
                    <b className={classes.quantity}>{quantity}</b>
                    <AddCircleOutlineSharpIcon
                      className={classes.button_color_plus}
                      onClick={handleIncreaseQuantity}
                    />
                  </Grid>
                  <div className={classes.button_cart}>
                    <Box>
                      <StyledButton
                        onClick={() => dispatch(cartActions.addItem(itemAdd))}
                        variant="contained"
                        color="primary"
                      >
                        Chọn vào giỏ hàng
                      </StyledButton>
                    </Box>
                  </div>
                </Grid>
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
                      <b className={classes.quantity}>{quantity}</b>
                      <AddCircleOutlineSharpIcon
                        className={classes.button_color_plus}
                        onClick={handleIncreaseQuantity}
                      />
                    </div>
                  </Grid>
                  <div className={classes.button_cart}>
                    <Box>
                      <StyledButton
                        // onClick={() => props.addItem(itemAdd)}
                        variant="contained"
                        color="primary"
                      >
                        Chọn vào giỏ hàng
                      </StyledButton>
                    </Box>
                  </div>
                </Grid>
              </div>
            </Grid>
            <Grid item lg={6} md={6} xs={12}>
              <Typography className={classes.hire_time} align="left">
                Thời gian thuê:
              </Typography>

              <div className={classes.hire_time_space}>
                <Box className={classes.hire_time_width}>
                  <DateRangePicker
                    onChange={(value) => getValueDatePiker(value)}
                    placeholder="Chọn ngày"
                    disabledDate={beforeToday()}
                    showOneCalendar={isMobile ? true : false}
                  />
                </Box>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductDetailsInfo;
