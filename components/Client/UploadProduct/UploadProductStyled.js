import { makeStyles, Button } from "@material-ui/core";
import InfoIcon from "../../../assets/infoUpload.svg";
import UploadImageIcon from "../../../assets/UploadImageIcon.svg";
const styles = (theme) => ({
  uploadMain: {
    maxWidth: 1440,
    margin: "37px auto 0 auto",
    marginTop: 80,
  },
  uploadMain_sideBar: {
    borderRight: "1px solid #000000",
  },
  uploadMain_Info: {
    border: "1px solid rgba(0, 0, 0, 0.15)",
    borderRadius: "8px",
    marginBottom: 24,
    backgroundColor: "#ffffff",
    [theme.breakpoints.down("sm")]: {
      border: "none",
      marginBottom: 0,
    },
  },
  uploadMain_InfoContent: {
    paddingLeft: 40,
    paddingTop: 30,
    paddingBottom: 40,
    paddingRight: 40,
    [theme.breakpoints.down("xs")]: {
      padding: 0,
    },
  },
  rowInfoTextArea: {
    marginTop: 20,
  },
  uploadMain_Info__Title: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: "32px",
    marginBottom: 20,
    // [theme.breakpoints.down("xs")]: {
    //   marginBottom: 20,
    // },
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
    marginBottom: (props) => (props.lengh > 2 ? "5px" : "0"),
    "&:first-child": {
      marginLeft: 0,
    },
  },
  uploadMain_InfoItemDetailDes: {
    display: "flex",
    flexWrap: "wrap",
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
  image_item__btn_deleteImage: {
    backgroundColor: "#FFFFFF",
    borderRadius: 4,
    fontSize: 12,
    color: "#F94444",
    padding: "5px 10px",
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
    padding: "15px 100px",
    borderRadius: 4,
    fontWeight: "bold",
    fontSize: 16,
    color: (props) => (props.isDisabled == true ? "#C3C7C5" : "#FFFFFF"),
  },
});

const useStyles = makeStyles(styles);
export function UploadProductButton(props) {
  const { type, ...other } = props;
  const classes = useStyles(props);
  return (
    <button type="submit" className={classes.main_recipent__Button} {...other}>
      Đăng sản phẩm
    </button>
  );
}

export default styles;
