const styles = (theme) => ({
  main_list: {
    maxWidth: "1440px",
    margin: "auto",
    backgroundColor: "white",
    marginBottom: 80,
  },
  main_filter: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  main_list_container: {
    paddingTop: 50,
  },
});

export default styles;
