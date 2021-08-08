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
    margin: "auto",
    marginLeft: 80,
    maxWidth: 420,
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
    fontStyle: "normal",
    fontSize: 30,
    lineHeight: "38px",

    color: "#ffffff",
    [theme.breakpoints.down("xs")]: {
      fontSize: 20,
    },
  },
  subTitle: {
    fontSize: 13,
    letterSpacing: "-0.02em",
    color: "#ffffff",
    fontFamily: "'Work Sans', sans-serif !important",
    lineHeight: "15px",
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
    [theme.breakpoints.down("xs")]: {
      paddingTop: 20,
    },
  },
});

export default styles;
