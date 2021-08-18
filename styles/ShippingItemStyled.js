const styles = (theme) => ({
  nameItem: {
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: "22px",
    //   color: "#111E16 !important",
  },
  cartBody: {
    display: "flex",
    margin: "16px 0",
    border: "1px solid rgb(239, 239, 239)",
    borderRadius: 4,
    flexDirection: "column",
    [theme.breakpoints.down("xs")]: {
      margin: 0,
    },
  },
  cartContainer: {
    padding: 16,
  },
  cartName: {
    paddingLeft: 20,
  },
  hrCart: {
    background: "#E7E9E8",
    "&:last-child": {
      display: "none",
    },
  },
  infoItemPrice: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& span": {
      fontWeight: "bold",
      fontSize: 16,
      lineHeight: "22px",
    },
  },
  infoItemDeposit: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 10,
    "& span": {
      // fontWeight: "bold",
      [theme.breakpoints.up("lg")]: {
        fontSize: 14,
        lineHeight: "20px",
        color: "#888E8A",
      },
    },
  },
  infoContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    [theme.breakpoints.up("md")]: {
      alignItems: "flex-end",
    },
  },
  depositMoney: {
    textAlign: "right",
    paddingTop: 8,
  },
});
export default styles;
