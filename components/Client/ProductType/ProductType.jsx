import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardProductType from "../../../utils/CardProductType";
import { Typography, Box } from "@material-ui/core";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Controller } from "swiper";
import styles from "./ProductTypeStyled";
import { useCategories } from "../../../hooks/useCategories";

const ProductType = () => {
  const { data: categories, isLoading, error } = useCategories();
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const categoriesItem = categories && categories;
  const numberCategories = categoriesItem?.length;
  let getFirstCategoriesItems = [];
  let getSecondCategoriesItems = [];
  const numberCategoriesbySlide = Math.round(numberCategories / 2);
  if (categoriesItem?.length > 0) {
    getFirstCategoriesItems = categoriesItem
      .slice(0, numberCategoriesbySlide)
      .map((item, index) => (
        <SwiperSlide className={classes.type_product__slide} key={index}>
          <CardProductType info={item} />
        </SwiperSlide>
      ));
    getSecondCategoriesItems = categoriesItem
      .slice(numberCategoriesbySlide)
      .map((item, index) => (
        <SwiperSlide className={classes.type_product__slide} key={index}>
          <CardProductType info={item} />
        </SwiperSlide>
      ));
  }

  SwiperCore.use([Controller]);
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);
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
        slidesPerView={4}
        onSwiper={setFirstSwiper}
        controller={{ control: secondSwiper }}
        breakpoints={{
          320: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3.5,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
      >
        {getFirstCategoriesItems}
      </Swiper>
      <Swiper
        className={classes.spaceBetweenTwoSwipe}
        spaceBetween={50}
        slidesPerView={4}
        onSwiper={setSecondSwiper}
        controller={{ control: firstSwiper }}
        breakpoints={{
          320: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3.5,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
      >
        {getSecondCategoriesItems}
      </Swiper>
    </div>
  );
};

export default ProductType;
