const styles = (theme) => ({
  search_body: {
    position: "absolute",
    top: "55%",
    width: "100%",
    fontSize: "56px",
    fontWeight: "bold",
    fontStyle: "normal",
    display: "flex",
    alignItems: "center",
    letterSpacing: "-0.01em",
    color: "#FFF",
    [theme.breakpoints.down("md")]: {
      top: "20%",
    },
    [theme.breakpoints.down("sm ")]: {
      top: "20%",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "24px",
      left: 0,
      top: "20%",
    },
  },
  inputSearch: {
    maxWidth: 400,
    width: "100%",
    padding: "17px 16px",
    border: "none",
    borderRadius: 8
  },
  search_contain: {
    width: "100%",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      width: "90%",
      margin: "0 auto",
    },
  },
  search_title: {},
  search_input_body: {
    width: "30%",
    margin: "0 auto",
    [theme.breakpoints.between("sm", "md")]: {
      width: "70%",
    },
    [theme.breakpoints.between("md", "lg")]: {
      width: "50%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  search_input: {
    fontSize: "16px",
    lineHeight: "22px",
    borderRadius: "8px",
  },
  search_btn: {
    display: "flex",
    backgroundColor: "#2FAF62",
    borderRadius: "8px",
    padding: "17px 18px",
    fontSize: "16px",
    "&:hover": {
      cursor: "pointer",
    },
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
      padding: "13px 18px",
    },
  },
  search_icon: {
    paddingRight: "10px",
  },
  search_icon_title: {},
});

export default styles;
