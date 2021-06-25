const styles = (theme) => ({
  page_container: {
    paddingBottom: 80,
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      paddingBottom: 130,
    },
  },
});

export default styles;
