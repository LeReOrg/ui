import LogoAccount from "../../../../assets/account.svg";

const styles = (theme) => ({
  nav_container: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    alignItems: "center",
    padding: "20px 15px",
    [theme.breakpoints.up("md")]: {
      padding: "20px",
    },
    [theme.breakpoints.up("xll")]: {
      padding: "10px 80px 18px 80px",
    },
  },
  right_nav_content: {
    listStyle: "none",
    display: "flex",
    flexFlow: "row nowrap",
    marginBottom: 0,
    marginRight: 10,
    alignItems: "center",
    paddingLeft: 0,
    "& li": {
      padding: 0,
      [theme.breakpoints.up("md")]: {
        padding: "0px 10px",
      },
      [theme.breakpoints.up("lg")]: {
        padding: "0px 23px",
      },
    },
    "& li a": {
      color: "black",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: 16,
      lineHeight: "22px",
      textDecoration: "none",
      "&:hover": {
        color: "#2faf62",
      },
    },
  },
  right_nav_main: {
    display: "flex",
    justifyContent: "flex-end",
  },
  uploadproduct: {
    color: "#2faf62 !important",
  },
  right_nav_main_test: {
    position: "absoulute",
  },
  showLogin: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    "&:hover": {
      cursor: "pointer",
    },
  },
  logoAccount: {
    background: `url(${LogoAccount})`,
    width: 18,
    height: 18,
    backgroundSize: "cover",
    backgroundPosition: "center",
    marginRight: 10,
  },
});
export { styles };
