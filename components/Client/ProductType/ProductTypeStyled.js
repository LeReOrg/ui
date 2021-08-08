const styles = (theme) => ({
  type_product_title: {
    fontSize: 20,
    paddingBottom: 16,
    fontWeight: "bold",
    lineHeight: "26px",
    [theme.breakpoints.up("lg")]: {
      fontSize: 30,
      paddingBottom: 24,
      lineHeight: "38px",
    },
  },
  type_product_main: {
    margin: "auto",
    marginTop: 24,
    [theme.breakpoints.up("lg")]: {
      marginTop: 40,
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
