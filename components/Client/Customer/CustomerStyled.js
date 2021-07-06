import History from "../../../assets/history_cart.svg";

import Coin from "../../../assets/coins.svg";
import CoinActive from "../../../assets/coins_active.svg";
import Profile from "../../../assets/profile.svg";
import ProfileActive from "../../../assets/profile_active.svg";
import PurChase from "../../../assets/purchase.svg";
import PurChaseActive from "../../../assets/purchase_active.svg";
import Ring from "../../../assets/ring.svg";
const styles = (theme) => ({
  main_customerProfile: {
    maxWidth: 1440,
    margin: "60px auto",
    marginTop: 90,
    flexGrow: 1,
    [theme.breakpoints.between("sm", "md")]: {
      width: "95%",
    },
    // [theme.breakpoints.between("md", "lg")]: {
    //   width: "90%",
    // },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  tabContainer: {
    margin: " 0 30px",
  },
  customerInfoContainer: {
    padding: "30px",
    maxWidth: "600px",
  },
  emailFormLogin: {
    maxWidth: "400px",
    padding: "10px 0 10px 12px",
    width: 400,
    borderRadius: 4,
    border: "1px solid rgba(0, 0, 0, 0.15)",
    fontSize: 14,
    lineHeight: "20px",
  },
  emailFormLogin2: {
    width: 80,
    borderRadius: 4,
    border: "1px solid rgba(0, 0, 0, 0.15)",
    padding: "7px 0 7px 12px",
    marginRight: 24,
  },
  buttonUpdate: {
    backgroundColor: "#2FAF62",
    padding: "7px 34px",
    fontSize: 14,
    lineHeight: "18px",
    textTransform: "capitalize",
    color: "#ffffff",
    "&:hover": {
      backgroundColor: "#2FAF62",
    },
  },
  customerInfoRow: {
    display: "flex",
    alignItems: "center",
    marginBottom: 15,
    "& p": {
      fontSize: 14,
      lineHeight: "18px",
      width: 110,
    },
    "& span": {
      fontSize: 14,
      lineHeight: "18px",
    },
  },
  customerInfo: {
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
    padding: "24px 16px",
    position: "relative",
    paddingTop: 60,
    textAlign: "center",
  },
  customerInfoButton: {
    paddingTop: 16,
  },
  customerProcessInfo: {
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
  },
  customerInfo_title: {
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: "20px",
    color: "#111E16",
    fontStyle: "normal",
  },
  customerInfoImage: {
    position: "absolute",
    top: "-14%",
    left: "32%",
    background: `url(${Ring})`,
    width: 100,
    height: 100,
  },
  customerImage: {
    width: 85,
    height: 85,
    objectFit: "contain",
    borderRadius: "50%",
    position: "absolute",
    left: 8,
    top: 8,
  },
  rootTab: {
    textTransform: "none",
    fontSize: 16,
    fontWeight: "500",
    [theme.breakpoints.between("sm", "md")]: {
      minWidth: 120,
      padding: "3px 5px",
    },
  },
  main_customerProfileMobile: {
    width: "70%",
    margin: "0 auto",
    textAlign: "center",
    [theme.breakpoints.between("sm", "md")]: {
      width: "90%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  main_customerProfileActionMobile: {},
  tabInfo: {
    border: "1px solid #E7E9E8",
    borderRadius: 8,
    padding: 24,
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("xs")]: {
      border: "none",
      padding: 0,
    },
  },
  tabInfo_contentLeft: {
    display: "flex",
    maxWidth: "60%",
  },
  tabInfo_contentLeftImage: {
    paddingRight: 16,
  },
  tabInfo_content: {
    padding: 24,
  },
  main_customerProfileContent: {
    display: "flex",
    flexDirection: "column",
  },
  tabInfo_contentRight: {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "30%",
    width: "30%",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      maxWidth: "unset",
    },
  },
  tabInfo_contentRightTotal: {
    textAlign: "right",
  },
  tabInfo_contentRightpile: {
    fontSize: 14,
    color: " #888E8A",
    paddingBottom: 10,
  },
  buttonActions_Content: {
    width: "30%",
    float: "right",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.between("sm", "md")]: {
      width: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  tabInfo_contentRightAmount: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#111E16",
    paddingBottom: 10,
  },

  selectedTab: {
    color: "#2F6BFF !important",
    fontWeight: "500",
    boxShadow: "inset 0px -2px 0px #2F6BFF",
  },
  customerInfo_headerAppBar: {
    boxShadow: "unset",
    backgroundColor: "white",
    borderBottom: "1px solid #E7E9E8",
    borderRadius: "8px 8px 0 0",
  },

  customerInfo_imageIcon: {
    background: `url(${Coin})`,
    width: 22,
    height: 22,
    backgroundSize: "cover",
    marginRight: 15,
  },
  customerInfo_imageIconActive: {
    background: `url(${CoinActive})`,
    width: 22,
    height: 22,
    backgroundSize: "cover",
    marginRight: 15,
  },

  customerInfo_imageHistory: {
    background: `url(${PurChase})`,
    width: 22,
    height: 22,
    backgroundSize: "cover",
    marginRight: 15,
  },
  customerInfo_imageHistoryActive: {
    background: `url(${PurChaseActive})`,
    width: 22,
    height: 22,
    backgroundSize: "cover",
    marginRight: 15,
  },
  customerInfo_imageCustomerDetail: {
    background: `url(${Profile})`,
    width: 22,
    height: 22,
    backgroundSize: "cover",
    marginRight: 15,
  },
  customerInfo_imageCustomerDetailActive: {
    background: `url(${ProfileActive})`,
    width: 22,
    height: 22,
    backgroundSize: "cover",
    marginRight: 15,
  },
  sideBarItem: {
    cursor: "pointer",
    color: "#888E8A",
    "&:hover": {
      color: "#2FAF62",
      fontWeight: "bold",
    },
    "& .active": {
      fontSize: 14,
      fontWeight: "normal",
      lineHeight: "20px",
      color: "#2FAF62",
    },
  },
  orderDetailContainer: {
    padding: "30px 27px 42px 27px",
    "& span": {
      fontSize: 14,
      fontWeight: "bold",
      lineHeight: "20px",
      color: "#2F80ED",
    },
    "& hr": {
      border: "1px solid #000000",
      marginTop: 0,
      marginBottom: 30,
    },
  },
  orderDetailStatus: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: "20px",
    color: "rgba(0, 0, 0, 0.45);",
    marginBottom: 15,
  },
  orderDetailTitle: {
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: "22px",
    color: "#000000",
    marginBottom: 15,
  },
  orderDetailItem: {
    display: "flex",
    alignItems: "center",
    marginBottom: 13,
  },
  orderDetailItemTitle: {
    minWidth: 150,
    color: "rgba(0, 0, 0, 0.45)",
    fontSize: 14,
    lineHeight: "20px",
  },
  orderDetailItemValue: {
    color: "#111E16",
    fontSize: 16,
    lineHeight: "20px",
  },
  firstBox: {
    marginBottom: 30,
  },
});

export default styles;
