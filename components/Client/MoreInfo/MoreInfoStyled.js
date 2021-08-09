import MoreInfoBackGround from "../../../assets/BG_Gradient.png";
import MoreInfoBackGroundMobile from "../../../assets/moreInfoMobile.png";

const styles = (theme) => ({
  info_main: {
    marginTop: 60,
    margin: "auto",
    marginBottom: 24,
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
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
  imageBackGround: {
    height: "100%",
    width: "100%",
    display: "none",
    borderRadius: 8,
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  imageBackGroundMobile: {
    height: 240,
    width: "100%",
    display: "block",
    borderRadius: 8,
    [theme.breakpoints.up("md")]: {
      display: "none",
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
  // background_info: {
  //   position: "relative",
  //   background: `url("${MoreInfoBackGround}")`,
  //   display: "flex",
  //   backgroundRepeat: "no-repeat",
  //   borderRadius: 16,
  // },
  background_info__main: {
    margin: 0,
  },
  background_info__itemContent: {
    position: "absolute",
    top: 26,
    left: 16,
    maxWidth: 250,
    [theme.breakpoints.up("md")]: {
      top: 20,
      left: 40,
      maxWidth: 360,
    },
    [theme.breakpoints.up("lg")]: {
      top: 25,
      left: 50,
      maxWidth: 400,
    },
    [theme.breakpoints.up("xl")]: {
      top: 58,
      left: 72,
      maxWidth: 414,
    },
  },
  background_info__itemImage: {
    [theme.breakpoints.down("xs")]: {
      padding: "15px !important",
    },
  },
  info_tittle: {
    fontWeight: "bold",
    fontSize: 20,
    [theme.breakpoints.up("lg")]: {
      fontSize: 30,
    },
  },
  info_subTittle: {
    fontSize: 14,
    marginTop: 8,
    maxWidth: 200,
    [theme.breakpoints.up("md")]: {
      maxWidth: "unset",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 16,
    },
  },
  more_info: {
    paddingTop: 20,
    [theme.breakpoints.up("md")]: {
      paddingTop: 20,
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: 20,
    },
    [theme.breakpoints.up("xl")]: {
      paddingTop: 40,
    },
  },
});

export default styles;
