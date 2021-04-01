const styles = (theme) => ({
  interested_main: {
    marginTop: 64,
    width: "90%",
    margin: "0 auto",
    [theme.breakpoints.down("sm")]: {
      marginTop: 30,
    },
  },
  interested_title: {
    fontStyle: "normal",
    fontWeight: "bold",
    marginBottom : 24,
    fontSize: 30,
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
    },
  },
});
  
  export default styles;
  