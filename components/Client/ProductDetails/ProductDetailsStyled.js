import PriceLogo from "../../../assets/pricedetail.svg";
import DepositPriceLogo from "../../../assets/depositprice.svg";

const styles = (theme) => ({
  main_list: {
    padding: "15px",
    [theme.breakpoints.up("md")]: {
      padding: "20px 40px",
    },
    // [theme.breakpoints.up("xl")]: {
    //   padding: "40px 80px",
    // },
  },
  main_list_related: {
    marginTop: "1%",
  },
  itemDiscount: {
    border: "1px solid #2F80ED;",
    borderRadius: 5,
    background: "#FFFFFF",
    padding: "4px 11px",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 10,
    marginLeft: 7,
    lineHeight: "13px",
    color: "#2F80ED",
    marginBottom: (props) => (props.lengh > 1 ? "5px" : "0"),
    "&:first-child": {
      marginLeft: 0,
    },
  },
  itemRequired: {
    border: "1px solid #2F80ED;",
    borderRadius: 5,
    background: "#FFFFFF",
    padding: "4px 11px",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 10,
    lineHeight: "13px",
    color: "#2F80ED",
    textAlign: "center",
    marginBottom: (props) => (props.lengh > 1 ? "5px" : "0"),
  },
  main_list_firstRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  datePicker: {
    border: "1px solid #E7E9E8",
    bordeRadius: 4,
    padding: "9px 16px",
    width: "100%",
  },
  imageGallery: {
    height: 200,
  },
  title: {
    color: "#111E16",
    fontSize: 24,
    fontWeight: "bold",
  },
  titleDetailInfo: {
    color: "#111E16",
    fontSize: 16,
    fontWeight: "bold",
    [theme.breakpoints.up("md")]: {
      fontSize: 24,
    },
  },
  content: {
    color: "#111E16",
    fontSize: 16,
    marginTop: "2%",
  },
  read_more: {
    color: "#2FAF62",
    fontSize: 16,
    marginTop: "2%",
    fontWeight: "bold",
    "&:hover": {
      cursor: "pointer",
    },
  },
  media_160: {
    height: "160px",
    objectFit: "fill",
  },
  media: {
    height: "215px",
    objectFit: "fill",
  },
  quantity_restWebMode: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  timeRentWebMode: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  timeRentMobileMode: {
    display: "block",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  priceRent: {
    display: "flex",
    paddingBottom: 10,
    borderBottom: "1px solid #E7E9E8",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.up("md")]: {
      justifyContent: "flex-start",
      paddingBottom: 0,
      borderBottom: "unset",
    },
  },
  priceRentFirst: {
    display: "flex",
    alignItems: "center",
  },
  priceDeposit: {
    display: "flex",
    paddingBottom: 10,
    paddingTop: 10,
    borderBottom: "1px solid #E7E9E8",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.up("md")]: {
      paddingBottom: 0,
      justifyContent: "flex-start",
      paddingTop: 0,
      borderBottom: "unset",
    },
  },
  prices: {
    color: "#2FAF62",
    fontSize: 16,
    lineHeight: "22px",
    fontWeight: "bold",
    display: "flex",
    flexDirection: "column",
    paddingBottom: 10,
    paddingTop: 10,
    // borderBottom: "1px solid #E7E9E8",
    order: 1,
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      marginTop: 20,
      marginBottom: 20,
      paddingBottom: 0,
      paddingTop: 0,
      alignItems: "center",
      justifyContent: "space-between",
    },
    "& .priceLogo": {
      background: `url(${PriceLogo})`,
      width: 24,
      height: 17,
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    "& .depositpriceLogo": {
      background: `url(${DepositPriceLogo})`,
      width: 24,
      height: 20,
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    "& p": {
      fontSize: 16,
      marginLeft: 5,
      marginRight: 20,
      fontWeight: "bold",
      fontStyle: "normal",
      lineHeight: "22px",
      color: "#000000",
    },
  },
  main_list_Right: {
    "& hr": {
      marginTop: 10,
      marginBottom: 20,
      borderTop: "1px solid #C3C7C5",
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "block",
      },
    },
  },
  lable: {
    display: "flex",
    alignItems: "center",
    paddingBottom: 10,
    borderBottom: "1px solid #E7E9E8",
    [theme.breakpoints.up("md")]: {
      paddingBottom: 0,
      borderBottom: "unset",
    },
    "& p": {
      fontSize: 14,
      fontWeight: "normal",
      fontStyle: "normal",
      lineHeight: "20px",
      color: "#888E8A",
    },
    "& span": {
      fontSize: 14,
      fontWeight: "bold",
      fontStyle: "normal",
      lineHeight: "20px",
      color: "#2F80ED",
      marginLeft: 5,
    },
  },
  lableContent: {
    marginRight: 15,
  },
  poster_info: {
    fontSize: 12,
    fontWeight: "normal",
    lineHeight: "18px",
    color: "#888E8A",
  },
  poster: {
    fontSize: 13,
    color: "#2F80ED",
    fontWeight: "bold",
  },
  quantity_space: {
    marginTop: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.up("md")]: {
      marginTop: 5,
    },
  },
  hire_time_space: {
    marginTop: "12px",
  },
  quantity_title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#111E16",
    "& span": {
      fontSize: 16,
      fontWeight: "bold",
      color: "#111E16",
    },
  },
  requireItems: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  hire_time: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#111E16",
    display: "flex",
    alignItems: "center",
    marginTop: 0,
    justifyContent: "space-between",
    paddingBottom: 10,
    borderBottom: "1px solid #E7E9E8",
    [theme.breakpoints.up("md")]: {
      display: "block",
      paddingBottom: 0,
      borderBottom: "unset",
    },
  },
  quantityRestMobile: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#111E16",
    display: "flex",
    alignItems: "center",
    paddingTop: 10,
    justifyContent: "space-between",
    paddingBottom: 10,
    borderBottom: "1px solid #E7E9E8",
  },
  quantityMobile: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#111E16",
    paddingTop: 10,
    paddingBottom: 10,
    borderBottom: "1px solid #E7E9E8",
  },
  hire_time_sub: {
    fontSize: 12,
    fontWeight: "normal",
    color: "#111E16",
    lineHeight: "18px",
    marginTop: 12,
  },
  totalDate: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#111E16",
    lineHeight: "22px",
    marginTop: 12,
  },
  button_color_plus: {
    fill: "#2FAF62",
    cursor: "pointer",
    width: 32,
    height: 32,
  },
  button_color_minus_1: {
    fill: "#C3C7C5",
    cursor: "pointer",
    width: 32,
    height: 32,
  },
  button_color_minus: {
    fill: "#2FAF62",
    cursor: "pointer",
    width: 32,
    height: 32,
  },
  quantity: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#111E16",
    lineHeight: "22px",
    padding: "5px 32px",
    [theme.breakpoints.up("md")]: {
      padding: "5px 16px",
    },
  },
  timeCalendarMobileMode: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#111E16",
    display: "flex",
    alignItems: "center",
    paddingTop: 10,
    justifyContent: "space-between",
  },
  addressProduct: {
    textAlign: "right",
    fontSize: 16,
    fontWeight: "normal",
    color: "#111E16",
    lineHeight: "22px",
    [theme.breakpoints.up("md")]: {
      maxWidth: 280,
    },
  },
  priceandtypeproduct: {
    [theme.breakpoints.down("md")]: {
      display: "flex",
      marginTop: 30,
      flexDirection: "column",
    },
  },
  quantityItemContent: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  },
  formControl: {
    marginTop: theme.spacing(1),
    minWidth: 250,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  hire_time_width: {
    // width: "70%",
    // [theme.breakpoints.down("sm")]: {
    //   width: "100%",
    // },
  },
  button_cart: {
    marginTop: 30,
    textAlign: "right",
    [theme.breakpoints.down("sm")]: {
      margin: "10 auto",
    },
  },
});
export default styles;
