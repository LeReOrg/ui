import AccountDetail from "../../../assets/accountDetail.svg";

const styles = (theme) => ({
  customerInfo_imageCustomerDetail: {
    background: `url(${AccountDetail})`,
    width: 22,
    height: 22,
    backgroundSize: "cover",
    marginRight: 15,
  },
  customerInfo_textHistoryActive: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#2FAF62",
    "&:hover": {
      color: "#2FAF62",
      cursor: "pointer",
      fontWeight: "bold",
    },
  },
});
export default styles;