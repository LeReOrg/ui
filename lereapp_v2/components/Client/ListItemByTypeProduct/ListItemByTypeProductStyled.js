const styles = (theme) => ({
  interested_main: {
    marginTop: 64,
    [theme.breakpoints.down("sm")]: {
      marginTop: 20,
    },
  },
  interested_title: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 30,
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
      display: "none",
    },
  },
  title_main: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 15,
    [theme.breakpoints.down("sm")]: {
      paddingBottom: 15,
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
    paddingTop: 34,
    [theme.breakpoints.down("sm")]: {
      paddingTop: 0,
    },
  },
});

export default styles;