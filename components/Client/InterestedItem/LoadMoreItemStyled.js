const styles = (theme) => ({
  load_more_btn: {
    display: "flex",
    justifyContent: "center",
    marginTop: 35,
    marginBottom: 52,
    [theme.breakpoints.down("xs")]: {
      marginTop: 25,
      marginBottom: 42,
    },
  },
});

export default styles;
