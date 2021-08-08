const styles = (theme) => ({
  main_list: {
    marginTop: 2,
    backgroundColor: "white",
    [theme.breakpoints.up("md")]: {
      margin: "0 10px 0 10px",
    },
    [theme.breakpoints.up("lg")]: {
      margin: "0 20px 0 20px",
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
    padding: 10,
  },
  main_filter: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
});

export default styles;
