const styles = (theme) => ({
  interested_main: {
    marginTop: 64,
    [theme.breakpoints.down("sm")]: {
      marginTop: 20,
    },
  },
  interested_title: {
    fontWeight: "bold",
    display: "none",
    [theme.breakpoints.up("md")]: {
      fontSize: 20,
      display: "block",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 25,
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: 30,
    },
  },
  title_main: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 5,
    paddingBottom: 15,
    [theme.breakpoints.up("md")]: {
      paddingTop: 5,
      paddingBottom: 0,
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: 10,
    },
  },
  mobile_mode_filter: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "50px",
    },
  },
  typeProduct_content: {
    paddingTop: 0,
    [theme.breakpoints.up("md")]: {
      paddingTop: 15,
    },
    [theme.breakpoints.up("xl")]: {
      paddingTop: 30,
    },
  },
});

export default styles;
