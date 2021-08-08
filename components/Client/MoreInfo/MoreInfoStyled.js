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
    height: 280,
    width: "100%",
    background: `url(${MoreInfoBackGround}) no-repeat`,
    backgroundSize: "cover",
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      backgroundImage: `url(${MoreInfoBackGroundMobile})`,
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
    top: "25%",
    left: 72,
    maxWidth: "30%",

    [theme.breakpoints.down("md")]: {
      top: 50,
      left: 16,
      maxWidth: "50%",
    },
    [theme.breakpoints.down("xs")]: {
      top: 45,
      left: 16,
      maxWidth: "100%",
    },
  },
  background_info__itemImage: {
    [theme.breakpoints.down("xs")]: {
      padding: "15px !important",
    },
  },
  info_tittle: {
    [theme.breakpoints.down("xs")]: {
      fontSize: 20,
    },
  },
  more_info: {
    [theme.breakpoints.down("xs")]: {
      paddingTop: 20,
    },
  },
});

export default styles;
