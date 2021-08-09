import image_logo from "../../../assets/logo.png";

const styles = (theme) => ({
  footer_main: {
    backgroundColor: "white",
    position: "absolute",
    width: "100%",
    bottom: 0,
  },
  footer_content: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    paddingTop: 24,
    paddingLeft: 23,
    paddingBottom: 12,
    [theme.breakpoints.up("md")]: {
      paddingTop: 28,
      paddingBottom: 28,
      flexDirection: "row",
      alignItems: "center",
      margin: "0 16px",
    },
    [theme.breakpoints.up("lg")]: {
      margin: "0 30px",
      // flexDirection: "column",
    },
    [theme.breakpoints.up("xl")]: {
      maxWidth: 1188,
      margin: "auto",
    },
  },
  footer_logo: {
    width: 40,
    height: 40,
  },
  footer_contact: {
    display: "flex",
    flexDirection: "column",
    alignItems: "unset",
    paddingBottom: 6,
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
  },
  footer_phone: {
    paddingLeft: 0,
    [theme.breakpoints.up("md")]: {
      paddingRight: 12,
    },
  },
  footer_mail: {
    paddingLeft: 0,
    [theme.breakpoints.up("md")]: {
      paddingLeft: 12,
    },
  },
  footer_term: {
    fontSize: 12,
    fontWeight: "bold",
    "& a": {
      color: "#111E16",
    },
  },
});

export default styles;
