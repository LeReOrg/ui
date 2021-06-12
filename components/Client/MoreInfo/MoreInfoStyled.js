import MoreInfoBackGround from "../../../assets/BG_Gradient.png";
const styles = (theme) => ({
  info_main: {
    marginTop: 60,
    width: "90%",
    margin: "0 auto",
    marginBottom: 24,
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
    background: `url("${MoreInfoBackGround}")`,
    display: "flex",
    backgroundRepeat: "no-repeat",
    borderRadius: 16,
  },
  background_info__main: {
    margin: 0,
  },
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
