const styles = (theme) => ({
  type_product_title: {
    [theme.breakpoints.down("xs")]: {
      fontSize: 20,
      paddingBottom: 16,
    },
  },
  type_product_main: {
    marginTop: 40,
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
  type_product__slide: {
    display: "flex",
  },
});

export default styles;
