import History from "../../../assets/history_cart.svg";
import AccountDetail from "../../../assets/accountDetail.svg";
import HistoryCart from "../../../assets/imageTestHistoryCart.png";

const styles = (theme) => ({
  main_customerProfile: {
    width: "70%",
    margin: "40px auto",
    flexGrow: 1,
  },
  customerInfo: {
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
    padding: "24px 16px",
  },
  customerInfoButton :{
    paddingTop : 16
  },
  customerProcessInfo: {
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
  },
  customerInfo_title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  rootTab: {
    textTransform: "none",
    fontSize: 16,
    fontWeight: "500",
  },
  tabInfo: {
    border: "1px solid #E7E9E8",
    borderRadius: 8,
    padding: 24,
    display: "flex",
    flexDirection: "column",
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
  main_customerProfileContent:{
    display : "flex",
    flexDirection : "column"
  },
  tabInfo_contentRight: {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "30%",
    width: "30%",
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
    width: " 30%",
    float: "right",
    display: "flex",
    justifyContent: "space-between",
  },
  buttonActions: {},
  tabInfo_contentRightAmount: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#111E16",
    paddingBottom: 10,
  },
  tabInfo_contentRightQuantity: {},
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

  customerInfo_textHistoryInActive: {
    fontSize: 14,
    fontWeight: "normal",
    color: "rgba(0, 0, 0, 0.85)",
    "&:hover": {
      color: "#2FAF62",
      cursor: "pointer",
      fontWeight: "bold",
    },
    "&:active": {
      color: "#2FAF62",
      fontWeight: "bold",
    },
  },
  customerInfo_textHistoryActive: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#2FAF62",
  },
  customerInfo_imageHistory: {
    background: `url(${History})`,
    width: 22,
    height: 22,
    backgroundSize: "cover",
    marginRight: 15,
  },
  customerInfo_textCustomerDetailInActive: {
    fontSize: 14,
    fontWeight: "normal",
    color: "rgba(0, 0, 0, 0.85)",
    "&:hover": {
      color: "#2FAF62",
      cursor: "pointer",
      fontWeight: "bold",
    },
  },
  customerInfo_imageCustomerDetail: {
    background: `url(${AccountDetail})`,
    width: 22,
    height: 22,
    backgroundSize: "cover",
    marginRight: 15,
  },
});

export default styles;
