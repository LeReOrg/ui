import image_logo from "../../../../assets/logo.png";

const styles = (theme) => ({
  header_wrap_logo: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 0,
      alignItems: "flex-start",
    },
  },
  header_logo: {
    width: 32,
    height: 32,
    backgroundSize: "contain",
    backgroundImage: `url(${image_logo})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    [theme.breakpoints.down("xs")]: {
      width: 18,
      height: 18,
    },
  },
  header_logo_title: {
    fontWeight: "bold",
    fontSize: 24,
    paddingLeft: 24,
    color: "black",
    [theme.breakpoints.down("xs")]: {
      fontSize: 16,
      paddingLeft: 7,
    },
  },
});

export default styles;
