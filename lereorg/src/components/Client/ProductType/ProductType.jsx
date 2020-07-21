import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MediaCard from "../../../utils/Card";
import { Typography, Box } from "@material-ui/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";


const ProductType = () => {
  return (
    <div>
      <Typography component="div">
        <Box
          pb={3}
          textAlign="left"
          fontWeight="fontWeightBold"
          fontSize={30}
          fontFamily="Nunito Sans"
        >
          Danh mục sản phẩm
        </Box>
      </Typography>
      <Swiper spaceBetween={50} slidesPerView={4} 
      breakpoints = {{
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
        }
      }} >
        <SwiperSlide>
          <MediaCard  />
        </SwiperSlide>
        <SwiperSlide>
          <MediaCard  />
        </SwiperSlide>
        <SwiperSlide>
          <MediaCard  />
        </SwiperSlide>
        <SwiperSlide>
          <MediaCard  />
        </SwiperSlide>
        <SwiperSlide>
          <MediaCard  />
        </SwiperSlide>
        <SwiperSlide>
          <MediaCard  />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductType;
