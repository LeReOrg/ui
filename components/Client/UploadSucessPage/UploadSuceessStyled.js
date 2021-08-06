import { makeStyles, Button } from "@material-ui/core";
import InfoIcon from "../../../assets/infoUpload.svg";
import UploadImageIcon from "../../../assets/UploadImageIcon.svg";
import BackIcon from "../../../assets/BackButton.svg";

const styles = (theme) => ({
  uploadMain: {
    maxWidth: 1440,
    margin: 0,
    marginTop: 2,
    [theme.breakpoints.up("md")]: {
      margin: "80px 10px 0 10px",
    },
    [theme.breakpoints.up("lg")]: {
      margin: "80px 20px 0 20px",
    },
    [theme.breakpoints.up("xl")]: {
      margin: "80px 40px 0 40px",
    },
    [theme.breakpoints.up("xll")]: {
      margin: "80px auto 0 auto",
    },
  },
  uploadMain_sideBar: {
    borderRight: "1px solid #000000",
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  uploadMain_Info: {
    border: "none",
    marginBottom: 0,
    backgroundColor: "#ffffff",
    [theme.breakpoints.up("md")]: {
      borderRadius: "8px",
      marginBottom: 24,
      border: "1px solid rgba(0, 0, 0, 0.15)",
    },
  },
  uploadMain_InfoContent: {
    padding: "20px 15px",
    [theme.breakpoints.up("md")]: {
      paddingLeft: 40,
      paddingTop: 30,
      paddingBottom: 40,
      paddingRight: 40,
    },
  },
  rowInfoTextArea: {
    marginTop: 20,
  },
  uploadMain_InfoSuccess__Title: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: "32px",
    marginBottom: 20,
    color: " #2FAF62",
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  upload__image_span: {
    color: "rgba(0, 0, 0, 0.45)",
    fontSize: 10,
    lineHeight: "13px",
  },
  upload__imageIcon_wrapper: {
    background: `url(${UploadImageIcon})`,
    width: 30,
    height: 30,
    backgroundRepeat: "no-repeat",
  },
  upload__imageIconText: {
    position: "absolute",
    bottom: 8,
    left: 30,
    color: "#888E8A",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 12,
    lineHeight: "18px",
  },
  upload__image_button: {
    border: "1px solid #888E8A",
    borderRadius: 5,
    padding: "45px",
    color: "#FA8C16",
    backgroundColor: "#F3F4F3",
    position: "relative",
    maxWidth: 120,
    maxHeight: 120,
  },
  uploadMain_InfoBody: {
    margin: "0 auto",
    [theme.breakpoints.between("md", "lg")]: {},

    [theme.breakpoints.down("sm")]: {},
  },
  uploadMain_InfoContentTitle: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: "22px",
  },
  itemDiscount: {
    border: "1px solid #2F80ED;",
    borderRadius: 5,
    background: "#FFFFFF",
    padding: "4px 11px",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 10,
    lineHeight: "13px",
    color: "#2F80ED",
    marginLeft: 7,
    marginBottom: (props) => (props.lengh > 2 ? "5px" : "0"),
    "&:first-child": {
      marginLeft: 0,
    },
  },
  uploadMain_InfoItemDetailDes: {
    display: "flex",
    flexWrap: "wrap",
    flexBasis: "50%",
    justifyContent: "flex-end",
  },
  uploadMain_InfoItemDetail: {
    marginTop: "0 !important",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: "20px",
  },
  uploadMain_InfoIconText: {
    color: " #2F80ED",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 10,
    lineHeight: "13px",
    paddingLeft: 6,
  },
  iconInfo: {
    background: `url(${InfoIcon})`,
    width: 14,
    height: 14,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  uploadMain_Price: {
    border: " 1px solid rgba(0, 0, 0, 0.15)",
    borderRadius: "8px",
  },
  titleText: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: "20px",
    color: "#111E16",
    paddingBottom: 5,
  },
  titleNumberText: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 10,
    lineHeight: "13px",
    color: "#111E16",
  },
  tagPickerStyled: {
    backgroundColor: "#ffffff",
  },
  rowInfoContent: {
    marginTop: 30,
    paddingBottom: 24,
  },
  rowInfo: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    // width: "65%",
    // alignItems: "center",

    [theme.breakpoints.between("sm", "md")]: {
      // width: "95%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
  upload__image_wrapper: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    marginBottom: 10,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  inputTag: {
    padding: "9px 12px",
    border: "1px solid rgba(0, 0, 0, 0.15)",
    borderRadius: 4,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  discountPrice: {
    marginTop: 20,
  },
  discountContainer: {
    alignItems: "center",
  },
  addDiscountItem: {
    padding: "9px 16px",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: "22px",
    color: "#ffffff",
    background: "#2FAF62",
    borderRadius: 4,
    maxWidth: 105,
    maxHeight: 40,
    textAlign: "center",
    cursor: "pointer",
  },
  inputTagPrice: {
    padding: "9px 12px",
    border: "1px solid rgba(0, 0, 0, 0.15)",
    borderRadius: "4px 0px 0px 4px",
    width: "100%",
    marginBottom: 10,

    // [theme.breakpoints.between("sm", "md")]: {
    //   width: 400,
    // },
    // [theme.breakpoints.down("xs")]: {
    //   width: "100%",
    // },
  },
  inputTagDateRent: {
    marginRight: 10,
  },
  titleTextInput: {
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      width: "100%",
    },
  },
  informationCurrency: {
    width: 100,
    textAlign: "center",
    border: "1px solid #D9D9D9",
    padding: "9px 12px",
    borderRadius: "0px 4px 4px 0px",
    background: "rgba(0, 0, 0, 0.04)",
  },
  main_recipent__paymentButton: {
    textAlign: "center",
    marginBottom: 100,
    marginTop: 24,
    [theme.breakpoints.down("xs")]: {
      marginBottom: 10,
      marginTop: 0,
    },
  },
  main_recipent__paymentButtonDetails: {
    // maxWidth: "30%",
    // display: "flex",
    justifyContent: "center",
    marginBottom: 10,
    marginTop: 40,
    // margin: "auto",
    [theme.breakpoints.up("lg")]: {
      marginBottom: 80,
      marginTop: 50,
    },
  },
  image_item: {
    width: 120,
    height: 120,
    borderRadius: 8,
  },
  image_item__btn_wrapper: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    bottom: 10,
    left: 7,
    display: "none",
  },
  upload__image_content: {
    display: "flex",
    marginTop: 15,
  },
  image_item__btn_coverImage: {
    backgroundColor: "#FFFFFF",
    borderRadius: 4,
    marginBottom: 5,
    fontSize: 12,
    padding: "5px 10px",
  },
  uploadMain_left: {
    borderRight: "1px solid #000000",
    paddingTop: "0 !important",
  },
  uploadMain_right: {
    paddingTop: "0 !important",
  },
  image_item__btn_deleteImage: {
    backgroundColor: "#FFFFFF",
    borderRadius: 4,
    fontSize: 12,
    color: "#F94444",
    padding: "5px 10px",
  },
  uploadMain_ImageDetails: {
    padding: "23px 46px 0 34px",
    "& h3": {
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: 10,
      lineHeight: "13px",
    },
  },
  uploadMain_ImageItem: {
    borderRadius: 8,
  },
  uploadMain_ImageContainer: {
    marginBottom: 30,
    [theme.breakpoints.down("xs")]: {
      marginBottom: 15,
    },
  },
  uploadMain_InfoItem: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: "20px",
  },
  upload__image_eachItem: {
    position: "relative",
    marginRight: 16,
    marginBottom: 10,
    "&:hover": {
      cursor: "pointer",
      background: "#000000",
      borderRadius: 8,
      "& $image_item": {
        opacity: " 0.48",
      },
      "& $image_item__btn_wrapper": {
        display: "flex",
      },
    },
  },
  main_recipent__Button: {
    backgroundColor: (props) =>
      props.isDisabled == true ? "#E7E9E8" : "#2FAF62",
    padding: "9px 16px",
    borderRadius: 4,
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: "22px",
    display: "flex",
    alignItems: "center",
    textTransform: "capitalize",
    width: 192,
    cursor: "pointer",
    color: (props) => (props.isDisabled == true ? "#C3C7C5" : "#FFFFFF"),
  },
  main_recipent__HomeButton: {
    backgroundColor: (props) =>
      props.isDisabled == true ? "#E7E9E8" : "#2FAF62",
    padding: "9px 16px",
    borderRadius: 4,
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: "22px",
    display: "flex",
    alignItems: "center",
    textTransform: "capitalize",
    width: 120,
    cursor: "pointer",
    color: (props) => (props.isDisabled == true ? "#C3C7C5" : "#FFFFFF"),
    float: "right",
  },
  main_recipent__ButtonIcon: {
    background: `url(${BackIcon})`,
    backgroundSize: "cover",
    width: 18,
    height: 16,
    marginRight: 12,
  },
});

const useStyles = makeStyles(styles);

export function HomeButton(props) {
  const { type, ...other } = props;
  const classes = useStyles(props);
  return (
    <div
      onClick={() => props.backHome()}
      className={classes.main_recipent__HomeButton}
      {...other}
    >
      <div className={classes.main_recipent__ButtonIcon}></div>
      Home
    </div>
  );
}
export function UploadAnotherProductButton(props) {
  const { type, ...other } = props;
  const classes = useStyles(props);
  return (
    <div
      onClick={() => props.backAddProduct()}
      className={classes.main_recipent__Button}
      {...other}
    >
      Đăng sản phẩm khác
    </div>
  );
}
export default styles;
