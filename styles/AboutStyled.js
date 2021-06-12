import BackGroudAbout from "../assets/aboutbackground2.png";
const styles = (theme) => ({
  about_main: {
    marginTop: 80,
    marginBottom: 180,
    [theme.breakpoints.down("xs")]: {
      marginTop: 34,
      marginBottom: 80,
    },
  },
  about_firstParagraph: {
    textAlign: "center",
    maxWidth: 1280,
    margin: "auto",
    marginBottom: 80,
  },
  about_h1: {
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 52,
    lineHeight: "130%",
    paddingLeft: 30,
    paddingRight: 30,
    color: "#111E16",
    [theme.breakpoints.down("xs")]: {
      fontSize: 24,
      lineHeight: "32px",
    },
  },
  about_image: {
    maxWidth: 480,
    maxHeight: 400,
    margin: "auto",
  },
  about_background: {
    // background: `url(${BackGroudAbout})`,
    // backgroundRepeat: "no-repeat",
    // backgroundSize: "cover",
    // backgroundPosition: "center",
    width: "100%",
    height: "100%",
    objectFit: "fill",

    [theme.breakpoints.down("xs")]: {
      height: 280,
    },
  },
  about_content: {
    position: "absolute",
    top: "35%",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      top: "30%",
    },
  },
  about_p: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 24,
    lineHeight: "32px",
    paddingLeft: 72,
    paddingRight: 72,
    color: "#111E16",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 30,
      paddingRight: 30,
      fontSize: 14,
      lineHeight: "20px",
    },
  },
  about_h2: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 40,
    lineHeight: "38px",
  },
});

export default styles;
