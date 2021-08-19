import PurChase from "../../../assets/purchase.svg";
import Profile from "../../../assets/profile.svg";
import Coin from "../../../assets/coins.svg";

const styles = (theme) => ({
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
  customerInfo: {
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
    padding: "24px 16px",
    position: "relative",
    textAlign: "center",
  },
  customerInfo_imageCustomerDetail: {
    background: `url(${Profile})`,
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
  customerInfo_imageIcon: {
    background: `url(${Coin})`,
    width: 22,
    height: 22,
    backgroundSize: "cover",
    marginRight: 15,
  },
});
export default styles;
