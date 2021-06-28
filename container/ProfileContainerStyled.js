const styles = (theme) => ({
  main_customerProfile: {
    maxWidth: 1440,
    margin: "60px auto",
    marginTop: 90,
    flexGrow: 1,
    [theme.breakpoints.between("sm", "md")]: {
      width: "95%",
    },
    // [theme.breakpoints.between("md", "lg")]: {
    //   width: "90%",
    // },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  customerInfo: {
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
    padding: "24px 16px",
    position: "relative",
    paddingTop: 60,
    textAlign: "center",
  },
  main_customerProfileContent: {
    display: "flex",
    flexDirection: "column",
  },
});

export default styles;
