import backIcon from "../assets/backIcon.svg";
const styles = (theme) => ({
  main_customerProfile: {
    maxWidth: 1440,
    margin: "60px auto",
    marginTop: 90,
    flexGrow: 1,
    [theme.breakpoints.between("sm", "md")]: {
      width: "95%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
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
