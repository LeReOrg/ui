import LogoAccount from "../../../../assets/account.svg";
import SearHeaderIconMobile from "../../../../assets/searchIconMobile.svg";

const styles = (theme) => ({
  nav_container: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    alignItems: "center",
    padding: "0 0 0 15px",
    [theme.breakpoints.up("md")]: {
      padding: "10px",
    },
    [theme.breakpoints.up("xll")]: {
      padding: "10px 80px 18px 80px",
    },
  },
  mobileMenu: {
    minWidth: "50%",
  },
  right_nav_content: {
    listStyle: "none",
    display: "flex",
    marginBottom: 0,
    paddingLeft: 0,
    flexFlow: "column nowrap",
    textAlign: "right",
    marginTop: 30,
    [theme.breakpoints.up("md")]: {
      flexFlow: "row nowrap",
      alignItems: "center",
      marginRight: 10,
      marginTop: 0,
    },
    "& li": {
      paddingBottom: 24,
      [theme.breakpoints.up("md")]: {
        padding: "0px 5px",
      },
      [theme.breakpoints.up("lg")]: {
        padding: "0px 20px",
      },
    },
    "& li a": {
      color: "black",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: 13,
      lineHeight: "20px",
      textDecoration: "none",
      "&:hover": {
        color: "#2faf62",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: 16,
      },
    },
  },
  closeIconMenu: {
    textAlign: "right",
  },
  nav_container_mobile: {
    display: "flex",
    alignItems: "center",
  },
  right_nav_main: {
    display: "flex",
    flexDirection: "column",
    marginTop: 24,
    marginRight: 20,
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      justifyContent: "flex-end",
      marginTop: 0,
      marginRight: 0,
    },
  },
  uploadproduct: {
    color: "#2faf62 !important",
  },
  showLogin: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    [theme.breakpoints.up("md")]: {
      justifyContent: "center",
    },
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
  search_main_searchMobile: {
    backgroundImage: `url(${SearHeaderIconMobile})`,
    height: 18,
    width: 18,
    backgroundRepeat: "no-repeat",
    marginRight: 14,
  },
});
export { styles };
