const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  main_cart__title: {
    marginBottom: 16,
    fontStyle: "normal",
    fontSize: 16,
    fontWeight: "bold",
    [theme.breakpoints.up("md")]: {
      fontSize: 24,
      lineHeight: "32px",
    },
  },
  main_cart: {
    marginTop: 24,
    borderRadius: 8,
    marginLeft: 16,
    marginRight: 16,
    [theme.breakpoints.up("md")]: {
      margin: "auto",
      maxWidth: "100%",
      marginTop: 20,
      marginRight: 20,
      marginLeft: 20,
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: 30,
      maxWidth: "100%",
      marginRight: 10,
      marginLeft: 10,
    },
    [theme.breakpoints.up("xl")]: {
      maxWidth: 1188,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  main_cart__info: {
    backgroundColor: "#ffffff",
    border: "none",
    padding: 10,
    [theme.breakpoints.up("lg")]: {
      padding: 0,
      borderRadius: 8,
      border: "1px solid rgba(0, 0, 0, 0.15)",
    },
  },
  main_cart__summary: {
    backgroundColor: "#ffffff",
    border: "none",
    padding: 10,
    [theme.breakpoints.up("lg")]: {
      padding: 0,
      borderRadius: 8,
      border: "1px solid rgba(0, 0, 0, 0.15)",
    },
  },
  selectedBoxCartMobile: {
    display: "block",
    maxWidth: 100,
    marginTop: 10,
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
  main_cart__content: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  main_cart__infoItem: {},
  main_cart__summaryContent: {
    padding: 0,
    [theme.breakpoints.up("lg")]: {
      padding: 20,
    },
    [theme.breakpoints.up("xl")]: {
      padding: 24,
    },
  },
  main_cart__provisionalTotal: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  main_cart__total: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  main_cart__provisionalTotalNumber: {
    fontWeight: "bold",
    fontSize: 16,
  },
  main_cart__totalTitle: {
    fontWeight: "bold",
    fontSize: 20,
  },
  main_cart__totalNumber: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#2FAF62",
  },
  main_cart__totalButton: {
    margin: "0 auto",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "50%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "100%",
    },
  },
  cartBody: {
    display: "flex",
    alignItems: "center",
    padding: 0,
    [theme.breakpoints.up("lg")]: {
      padding: "20px 10px",
    },
    [theme.breakpoints.up("xl")]: {
      padding: 24,
    },
  },
  nameProvided: {
    color: "#2F80ED",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 12,
    lineHeight: "18px",
  },
  infoAmount: {
    textAlign: "left",
    [theme.breakpoints.up("md")]: {
      textAlign: "right",
    },
  },
  deleteButton: {
    [theme.breakpoints.up("md")]: {
      padding: 0,
      float: "right",
      display: "inline-block",
      textAlign: "right",
    },
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  cartBodyText: {
    marginLeft: 16,
    textTransform: "capitalize",
    "& p": {
      fontSize: 12,
      lineHeight: "18px",
      color: "#888E8A",
      textTransform: "initial",
    },
  },
  hrCart: {
    marginRight: 24,
    marginLeft: 24,
    background: "#E7E9E8",
    "&:last-child": {
      display: "none",
    },
    [theme.breakpoints.down("xs")]: {
      marginRight: 0,
      marginLeft: 0,
    },
  },
  infoAmountNumber: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#2FAF62",
    [theme.breakpoints.up("lg")]: {
      lineHeight: "22px",
      fontSize: 16,
      marginBottom: "12px !important",
      color: "#111E16",
    },
  },
  depositNumber: {
    color: "#888E8A",
    fontSize: 14,
    lineHeight: "20px",
  },
  selectedBoxCart: {
    display: "none",
    [theme.breakpoints.up("lg")]: {
      display: "block",
      // justifyContent: "space-between",
      // alignItems: "center",
      // order: 2,
    },
  },
  cartBodyTextName: {
    fontSize: "14px !important",
    lineHeight: "20px !important",
    color: "#111E16 !important",
  },
});

export default styles;
