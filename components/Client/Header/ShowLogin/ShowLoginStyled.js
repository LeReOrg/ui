const styles = (theme) => ({
  mainShow: {
    position: "absolute",
    top: 20,
    zIndex: 10,
    width: 200,
    background: "#FFFFFF",
    boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.16)",
    borderRadius: 8,
  },
  mainShowBody: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    paddingTop: 12,
    paddingBottom: 12,
  },
  loginButton: {
    fontStyle: "normal",
    fontWeight: "normal !important",
    fontSize: "14px !important",
  },
  registerButton: {
    fontStyle: "normal",
    fontWeight: "normal !important",
    fontSize: "14px !important",
  },
  registerContentButton: {
    paddingLeft: 16,
    paddingTop: 10,
    paddingBottom: 10,
    "&:hover": {
      background: "#F3F4F3",
      "& $registerButton": {
        color: "#2FAF62 ",
      },
    },
  },
  loginContentButton: {
    paddingLeft: 16,
    paddingTop: 10,
    paddingBottom: 10,
    "&:hover": {
      background: "#F3F4F3",
      "& $loginButton": {
        color: "#2FAF62 ",
      },
    },
  },
});

export default styles;
