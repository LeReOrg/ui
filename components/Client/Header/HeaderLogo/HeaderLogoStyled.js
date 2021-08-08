import image_logo from "../../../../assets/logo.png";

const styles = (theme) => ({
  header_wrap_logo: {},
  header_logo: {
    width: 60,
    height: 40,
    objectFit: "cover",
    [theme.breakpoints.up("md")]: {
      width: 70,
      height: 50,
    },
    [theme.breakpoints.up("lg")]: {
      width: 100,
      height: 65,
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
