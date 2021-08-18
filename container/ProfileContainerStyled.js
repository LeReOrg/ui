import backIcon from "../assets/backIcon.svg";
const styles = (theme) => ({
  main_customerProfile: {
    marginTop: 2,
    [theme.breakpoints.up("md")]: {
      margin: "80px 10px 0 10px",
    },
    [theme.breakpoints.up("lg")]: {
      margin: "80px 20px 0 20px",
    },
    [theme.breakpoints.up("xl")]: {
      maxWidth: 1188,
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: 80,
      marginBottom: 40,
    },
  },
  customerInfo: {
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
    padding: "24px 16px",
    position: "relative",
    paddingTop: 60,
    textAlign: "center",
  },
  main_customerProfileContent: {
    display: "flex",
    flexDirection: "column",
    borderRight: "1px solid #000000",
  },
  customerProcessInfo: {
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
  },
  customerTiltlePage: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: "32px",
    marginBottom: 20,
  },
  backButton: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 12,
    lineHeight: "18px",
    color: "#2F80ED",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
  backButtonIcon: {
    background: `url(${backIcon})`,
    width: 12,
    height: 12,
    backgroundRepeat: "no-repeat",
    marginRight: 8,
  },
});

export default styles;
