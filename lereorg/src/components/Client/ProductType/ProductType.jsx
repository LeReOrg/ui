import React, {useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CartProductType from "../../../utils/CardProductType";
import { Typography, Box } from "@material-ui/core";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Controller } from 'swiper';
import 'swiper/swiper.scss';

const ProductType = () => {
  const useStyles = makeStyles((theme) => ({
  
    type_product_title: {
      [theme.breakpoints.down("xs")]: {
        fontSize: 20,
        paddingBottom: 16,
      },
    },
    type_product_main: {
      marginTop: 40,
      [theme.breakpoints.down("xs")]: {
        marginTop: 24,
      },
    },
    spaceBetweenTwoSwipe :{ 
      marginTop : 40,
      [theme.breakpoints.down("xs")]: {
        marginTop: 14,
      },
    }
  }));

  SwiperCore.use([Controller]);
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);
  const classes = useStyles();
  return (
    <div className={classes.type_product_main}>
      <Typography component="div">
        <Box
          pb={3}
          textAlign="left"
          fontWeight="fontWeightBold"
          fontSize={30}
          fontFamily="Nunito Sans"
          className={classes.type_product_title}
        >
          Danh mục sản phẩm
        </Box>
      </Typography>
      <Swiper
        spaceBetween={50}
        slidesPerView={4}
        onSwiper={setFirstSwiper} controller={{ control: secondSwiper }}
        breakpoints={{
          320: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 3.5,
            spaceBetween: 40,
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
      >
        <SwiperSlide>
          <CartProductType />
        </SwiperSlide>
        <SwiperSlide>
          <CartProductType />
        </SwiperSlide>
        <SwiperSlide>
          <CartProductType />
        </SwiperSlide>
        <SwiperSlide>
          <CartProductType />
        </SwiperSlide>
        <SwiperSlide>
          <CartProductType />
        </SwiperSlide>
        <SwiperSlide>
          <CartProductType />
        </SwiperSlide>
        <SwiperSlide>
          <CartProductType />
        </SwiperSlide>
      </Swiper>
      <Swiper
        className= {classes.spaceBetweenTwoSwipe}
        spaceBetween={50}
        slidesPerView={4}
        onSwiper={setSecondSwiper} controller={{ control: firstSwiper }}
        breakpoints={{
          320: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 3.5,
            spaceBetween: 40,
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
      >
        <SwiperSlide>
          <CartProductType />
        </SwiperSlide>
        <SwiperSlide>
          <CartProductType />
        </SwiperSlide>
        <SwiperSlide>
          <CartProductType />
        </SwiperSlide>
        <SwiperSlide>
          <CartProductType />
        </SwiperSlide>
        <SwiperSlide>
          <CartProductType />
        </SwiperSlide>
        <SwiperSlide>
          <CartProductType />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductType;
