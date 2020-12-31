const styles = (theme) => ({
  titleText: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 14,
    paddingBottom: 3,
  },
  rowInfo: {
    marginBottom: 32,
    display: "flex",
    justifyContent: "space-between",
    width: "55%",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      alignItems: "left",
    },
  },
  inputTag: {
    padding: "9px 12px",
    border: "1px solid rgba(0, 0, 0, 0.15)",
    borderRadius: 4,
    width: 480,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      alignItems: "left",
    },
  },
});

export default styles;