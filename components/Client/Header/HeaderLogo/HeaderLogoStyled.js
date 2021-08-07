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
    width: 18,
    height: 18,
    backgroundSize: "cover",
    backgroundImage: `url(${image_logo})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    [theme.breakpoints.up("md")]: {
      width: 32,
      height: 32,
    },
  },
  header_logo_title: {
    fontWeight: "bold",
    color: "black",
    fontSize: 14,
    paddingLeft: 7,
    lineHeight: "16px",
    [theme.breakpoints.up("md")]: {
      fontSize: 16,
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: 24,
      paddingLeft: 24,
    },
  },
});

export default styles;
