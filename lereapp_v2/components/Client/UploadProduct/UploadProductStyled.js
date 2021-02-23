import { makeStyles, Button } from "@material-ui/core";

const styles = (theme) => ({
  uploadMain: {
    width: "80%",
    margin: "37px auto 0 auto",
    [theme.breakpoints.down("sm")]: {
      width: "95%",
    },
  },
  uploadMain_Info: {
    border: " 1px solid rgba(0, 0, 0, 0.15)",
    borderRadius: "8px",
    marginBottom: 24,
    [theme.breakpoints.down("sm")]: {
      border: "none",
      marginBottom: 0,
    },
  },
  uploadMain_InfoContent: {
    paddingLeft: 24,
    paddingTop: 24,
    paddingBottom: 24,
    [theme.breakpoints.down("xs")]: {
      padding: 0,
    },
  },
  uploadMain_Info__Title: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 30,
    [theme.breakpoints.down("xs")]: {
      marginBottom: 16,
    },
  },
  upload__image_span: {
    color: "rgba(0, 0, 0, 0.45)",
    fontSize: 14,
    paddingLeft: 16,
  },
  upload__image_button: {
    border: "1px solid #FA8C16",
    borderRadius: 4,
    padding: "3px 25px",
    color: "#FA8C16",
    backgroundColor: "white",
  },
  uploadMain_InfoBody: {
    width: "80%",
    margin: "0 auto",
    [theme.breakpoints.between("md", "lg")]: {
      width: "90%",
    },
    // [theme.breakpoints.between("sm","md")]: {
    //   width: "92%",
    // },
    [theme.breakpoints.down("sm")]: {
      width: "95%",
    },
  },
  uploadMain_Price: {
    border: " 1px solid rgba(0, 0, 0, 0.15)",
    borderRadius: "8px",
  },
  titleText: {
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 14,
    paddingBottom: 3,
  },
  rowInfo: {
    marginBottom: 32,
    display: "flex",
    justifyContent: "space-between",
    width: "65%",
    alignItems: "center",

    [theme.breakpoints.between("sm", "md")]: {
      width: "95%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
  upload__image_wrapper: {
    width: 480,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  inputTag: {
    padding: "9px 12px",
    border: "1px solid rgba(0, 0, 0, 0.15)",
    borderRadius: 4,
    width: 480,

    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  inputTagPrice: {
    padding: "9px 12px",
    border: "1px solid rgba(0, 0, 0, 0.15)",
    borderRadius: "4px 0px 0px 4px",
    width: 480,
    [theme.breakpoints.between("sm", "md")]: {
      width: 400,
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
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
    "&:hover": {
      cursor: "pointer",
      background: "#000000",
      borderRadius: 8,
      "& $image_item": {
        opacity: " 0.48",
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
