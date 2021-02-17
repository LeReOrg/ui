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
  upload__image_wrapper : {
    width: 480,
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
  inputTagPrice: {
    padding: "9px 12px",
    border: "1px solid rgba(0, 0, 0, 0.15)",
    borderRadius: "4px 0px 0px 4px",
    width: 480,
  },
  informationCurrency: {
    border: "1px solid #D9D9D9",
    padding: "9px 12px",
    borderRadius: "0px 4px 4px 0px",
    background: "rgba(0, 0, 0, 0.04)",
  },
});

export default styles;
