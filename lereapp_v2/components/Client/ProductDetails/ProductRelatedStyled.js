const styles = (theme) => ({
  main: {
    width: "92%",
    margin: "40px auto",
    marginBottom: "0px",
    [theme.breakpoints.down("sm")]: {
      margin: "0px auto",
    },
  },
  main_list: {
    marginTop: "1%",
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