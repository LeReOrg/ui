import { createTheme } from "@material-ui/core/styles";

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
  main_recipent__summaryProvisional: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
    "& p:first-child": {
      fontSize: 14,
      fontWeight: 300,
    },
    "& p:last-child": {
      fontSize: 15,
      fontWeight: "bold",
    },
  },
  main_recipent__rePayment: {
    paddingBottom: 16,
    fontSize: 14,
    fontWeight: 400,
    color: "#ecb50b",
    fontStyle: "italic",
  },
  main_recipent__totalPayment: {
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: 16,
    alignItems: "center",
  },
  main_recipent__totalPaymentNumber: {
    color: "rgb(254, 56, 52)",
    fontWeight: 400,
    fontSize: 22,
  },
  main_recipent__summaryTransport: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& p:first-child": {
      fontSize: 14,
      fontWeight: 300,
    },
    "& p:last-child": {
      fontSize: 15,
      fontWeight: "bold",
      color: "#2FAF62",
    },
  },
  main_shipping: {
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
    "& h1": {
      fontSize: 20,
    },
  },
  main_shipping_subTitle: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: "12px !important",
  },
  main_shipping_add_address: {
    fontSize: 14,
    fontWeight: "400",
    color: "rgb(0, 127, 240)",
    cursor: "pointer",
    marginLeft: 4,
  },
  main_shipping__contentLeft: {
    border: "1px solid #C3C7C5",
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 24,
    [theme.breakpoints.down("xs")]: {
      border: "none",
      padding: 0,
    },
  },
  main_shipping__contentBottom: {
    border: "1px solid #C3C7C5",
    backgroundColor: "#ffffff",
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
    backgroundColor: "#ffffff",
    maxWidth: 315,
    padding: 15,
    marginBottom: 8,
    [theme.breakpoints.down("xs")]: {
      border: "none",
    },
    "& p": {
      fontWeight: "bold",
    },
  },
  main_shipping__contentRightFirstRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  main_shipping__contentRightChangeAddress: {
    fontSize: 13,
    color: "rgb(13, 92, 182)",
    fontWeight: "bold",
    cursor: "pointer",
  },
  main_shipping__contentRightUser: {
    fontSize: 15,
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    marginBottom: 10,
    justifyContent: "space-between",
    "& p": {
      marginTop: 0,
    },
  },
  main_shipping__contentRightUserSub: {
    color: "rgb(120, 120, 120)",
    fontSize: 13,
  },
  main_shipping__contentRightButton: {
    maxWidth: 315,
  },
  addressItems: {
    marginLeft: "-20px",
    display: "flex",
    flexWrap: "wrap",
  },
});
const theme = createTheme({
  overrides: {
    MuiButton: {
      text: {
        background: "#2ABB72",
        borderRadius: 4,
        border: 0,
        color: "white",
        height: 48,
        padding: "0 30px",
        fontWeight: "bold",
        width: "100%",
        fontSize: 16,
        maxWidth: 350,
        textTransform: "capitalize",
        "&:hover": {
          background: "#2FAF62",
        },
      },
    },
  },
});
export { theme };
export default styles;
