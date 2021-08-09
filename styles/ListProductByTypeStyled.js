const styles = (theme) => ({
  main_list: {
    marginTop: 2,
    backgroundColor: "white",
    [theme.breakpoints.up("md")]: {
      margin: 0,
    },
    [theme.breakpoints.up("xl")]: {
      maxWidth: 1188,
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: 0,
      marginBottom: 40,
    },
  },
  main_list_container: {
    paddingLeft: 10,
    paddingRight: 26,
    margin: 0,
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {
      paddingLeft: 20,
      paddingRight: 36,
    },
  },
  main_filter: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
});

export default styles;
