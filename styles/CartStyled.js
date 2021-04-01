const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  main_cart__title: {
    marginBottom: 16,
    fontStyle: "normal",
    fontSize: 24,
    [theme.breakpoints.down("xs")]: {
      fontSize: 16,
    },
  },
  main_cart: {
    width: "90%",
    margin: "32px auto 0 auto",
    [theme.breakpoints.down("xs")]: {
      margin: "16px auto 0 auto",
      width: "95%",
    },
  },
  main_cart__info: {
    borderRadius: 8,
    border: "1px solid rgba(0, 0, 0, 0.15)",
    [theme.breakpoints.down("xs")]: {
      margin: 0,
      border: "none",
    },
  },
  main_cart__summary: {
    borderRadius: 8,
    border: "1px solid rgba(0, 0, 0, 0.15)",
    [theme.breakpoints.down("sm")]: {
      border: "none",
    },
  },
  main_cart__content: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  main_cart__infoItem: {},
  main_cart__summaryContent: {
    margin: "24px 24px",
    [theme.breakpoints.down("sm")]: {
      margin: 0,
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
    width: "50%",
    margin: "0 auto",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
});

export default styles;