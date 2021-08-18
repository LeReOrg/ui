import InfoImage from "../../../assets/Bg_opa-40.jpg";

const styles = (theme) => ({
  info_main: {
    marginTop: 60,
    [theme.breakpoints.down("xs")]: {
      marginTop: 32,
    },
  },
  media: {
    height: 280,
    border: "none",
    [theme.breakpoints.down("xs")]: {
      height: 240,
    },
  },
  emailBoxContainer: {
    padding: "24px 20px",
    backgroundColor: "#ffffff",
    "& input": {
      width: "100%",
      border: "none",
      fontSize: 13,
      lineHeight: "15px",
      letterSpacing: "-0.02em",
      fontWeight: "400",
    },
    "& hr": {
      height: 1,
      backgroundColor: "#E7E9E8",
      marginTop: 15,
      marginBottom: 15,
    },
    "& span": {
      color: "#5D5FEF",
    },
  },
  checkedIcon: {
    display: "flex",
    alignItems: "center",
    marginLeft: "-10px",
    "& p": {
      fontWeight: "400",
      fontSize: 13,
      lineHeight: "15px",
    },
  },
  imageInfo: {
    position: "relative",
    zIndex: 2,
  },
  mediaPicture: {
    borderRadius: 16,
  },
  image_gradient: {
    position: "absolute",
    background: "#EAF7EF",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  background_info: {
    position: "relative",
    background: `url(${InfoImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: 400,
    display: "flex",
  },
  typography: {
    marginLeft: 16,
    marginRight: 16,
    marginTop: 35,
    marginBottom: 35,
    [theme.breakpoints.up("md")]: {
      maxWidth: 550,
      margin: "auto",
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: 420,
      marginLeft: 50,
    },
    [theme.breakpoints.up("xl")]: {
      marginLeft: 80,
    },
  },
  background_info__main: {},
  background_info__itemContent: {
    [theme.breakpoints.down("xs")]: {
      padding: "15px !important",
      order: 1,
    },
  },
  background_info__itemImage: {
    [theme.breakpoints.down("xs")]: {
      padding: "15px !important",
    },
  },
  info_tittle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
    lineHeight: "24px",
    [theme.breakpoints.up("md")]: {
      fontSize: 30,
      lineHeight: "38px",
    },
  },
  subTitle: {
    fontSize: 13,
    letterSpacing: "-0.02em",
    color: "#ffffff",
    lineHeight: "15px",
    letterSpacing: "-0.02em",
    marginBottom: 16,
    [theme.breakpoints.up("md")]: {
      fontSize: 16,
    },
  },
  hr: {
    backgroundColor: "#ffffff",
    marginLeft: 0,
    height: 1,
    marginBottom: 10,
    marginTop: 10,
    width: 105,
  },
  more_info: {
    paddingTop: 10,
    [theme.breakpoints.up("md")]: {
      paddingTop: 15,
    },
  },
});

export default styles;
