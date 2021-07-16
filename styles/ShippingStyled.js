const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  main_shipping__rootLeft: {
    [theme.breakpoints.down("sm")]: {
      margin: 0,
      width: "100%",
      "& > .MuiGrid-item": {
        padding: 0,
      },
    },
  },
  main_shipping: {
    margin: "30px auto",
    maxWidth: 1440,
    [theme.breakpoints.down("xs")]: {
      margin: "10px auto",
    },
  },
  main_shipping__content: {},
  main_shipping__contentLeft: {
    border: "1px solid #C3C7C5",
    borderRadius: 8,
    padding: 24,
    [theme.breakpoints.down("xs")]: {
      border: "none",
      padding: 0,
    },
  },
  main_shipping__contentBottom: {
    border: "1px solid #C3C7C5",
    borderRadius: 8,
    padding: 24,
    marginTop: 24,
    [theme.breakpoints.down("xs")]: {
      border: "none",
      padding: 0,
    },
  },
  main_shipping__contentLeftInfo: {
    maxWidth: 500,
    margin: "20px auto",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      margin: 0,
    },
  },
  main_shipping__contentLeftTitle: {
    fontWeight: 700,
    fontStyle: "normal",
    fontSize: 20,
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  main_shipping__contentPaymentTitle: {
    fontWeight: 700,
    fontStyle: "normal",
    fontSize: 20,
  },
  main_shipping__mobileHr: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "block",
      border: "1px solid #E7E9E8",
      marginLeft: "-15px",
      marginRight: "-15px",
    },
  },
  main_shipping__contentRight: {
    border: "1px solid #C3C7C5",
    borderRadius: 8,
    maxWidth: 315,
    padding: 15,
    [theme.breakpoints.down("xs")]: {
      border: "none",
    },
  },
});

export default styles;
