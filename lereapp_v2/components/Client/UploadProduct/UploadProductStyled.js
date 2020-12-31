const styles = (theme) => ({
  uploadMain: {
    width: "80%",
    margin: "37px auto 0 auto",
    [theme.breakpoints.down("sm")]: {
      width: "95%",
    },
  },
  uploadMain_Info: {
    border: " 1px solid rgba(0, 0, 0, 0.15)",
    borderRadius: "8px",
    marginBottom: 24,
    [theme.breakpoints.down("sm")]: {
      border: "none",
    },
  },
  uploadMain_InfoContent: {
    paddingLeft: 24,
    paddingTop: 24,
    paddingBottom: 24,
  },
  uploadMain_Info__Title: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 20,
  },
  uploadMain_InfoBody: {
    width: "80%",
    margin: "0 auto",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  uploadMain_Price: {
    border: " 1px solid rgba(0, 0, 0, 0.15)",
    borderRadius: "8px",
  },
});

export default styles;