const styles = (theme) => ({
  main_list: {
    width: "92%",
    margin: "40px auto",
    [theme.breakpoints.down("sm")]: {
      margin: "0px auto",
    },
  },
  title: {
    color: "#111E16",
    fontSize: 24,
    fontWeight: "bold",
  },
  content: {
    color: "#111E16",
    fontSize: 16,
    marginTop: "2%",
  },
  read_more: {
    color: "#2FAF62",
    fontSize: 16,
    marginTop: "2%",
  },
});

export default styles;