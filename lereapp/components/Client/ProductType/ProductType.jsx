import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardProductType from "../../../utils/CardProductType";
import { Typography, Box } from "@material-ui/core";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Controller } from "swiper";
import { useSelector, connect, useDispatch } from "react-redux";
import { getCategories } from "../../../store/action/categories_action";
import { wrapper } from "../../../store/store";
const ProductType = (props) => {
    const categoriesItem = useSelector((state) => state.categories.categories.categories);
    const numberCategories = categoriesItem.length;
    const numberCategoriesbySlide = Math.round(numberCategories/2);
    const [categories, setcategories] = useState(categoriesItem);
      let getFirstCategoriesItems = categories
        .slice(0, numberCategoriesbySlide)
        .map((item, index) => (
          <SwiperSlide key={index}>
            <CardProductType info={item} />
          </SwiperSlide>
        ));
         let getSecondCategoriesItems = categories
           .slice(numberCategoriesbySlide)
           .map((item, index) => (
             <SwiperSlide key={index}>
               <CardProductType info={item} />
             </SwiperSlide>
           ));
    const useStyles = makeStyles((theme) => ({
      type_product_title: {
        [theme.breakpoints.down("xs")]: {
          fontSize: 20,
          paddingBottom: 16,
        },
      },
      type_product_main: {
        marginTop: 40,
        width: "90%",
        margin: "0 auto",
        [theme.breakpoints.down("xs")]: {
          marginTop: 24,
        },
      },
      spaceBetweenTwoSwipe: {
        marginTop: 40,
        [theme.breakpoints.down("xs")]: {
          marginTop: 14,
        },
      },
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
        slidesPerView={4}
        onSwiper={setFirstSwiper}
        controller={{ control: secondSwiper }}
        breakpoints={{
          320: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 3.5,
            spaceBetween: 30,
          },
          640: {
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
        {getSecondCategoriesItems}
      </Swiper>
    </div>
  );
};
// const mapStateToProps = (state) => {
//   return {
//     categoriesItem: state.categories,
//   };
// };
export default ProductType;
// export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
//   store.dispatch(getCategories());
//   store.dispatch(END);
//   await store.sagaTask.toPromise();
// });