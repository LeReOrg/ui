const styles = (theme) => ({
  main_list: {
    width: "92%",
    margin: "40px auto",
    [theme.breakpoints.down("sm")]: {
      margin: "0px auto",
    },
  },
  main_filter: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
});

export default styles;