const styles = (theme) => ({
  info_main: {
    marginTop: 60,
    marginLeft: "-2.5%",
    marginRight: "-2.5%",
    [theme.breakpoints.down("xs")]: {
      marginTop: 32,
    },
  },
  media: {
    height: 280,
    border: "none",
    [theme.breakpoints.down("xs")]: {
      height: 240,
    },
  },
  imageInfo: {
    position: "relative",
    zIndex: 2,
  },
  typography: {
    position: "absolute",
    top: 60,
    left: 192,
    [theme.breakpoints.between("sm", "md")]: {
      left: 60,
    },
    [theme.breakpoints.between("md", "lg")]: {
      left: 60,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 20,
      right: 10,
      left: 10,
    },
  },
  box: {
    // paddingLeft: 192,
    // paddingTop: 56,
    // [theme.breakpoints.down("xs")]: {
    //   paddingLeft: 16,
    //   paddingTop: 26,
    //   paddingRight: 0,
    // },
    width: "50%",
  },
  mediaInfo: {
    position: "absolute",
    top: 40,
    right: 192,
    [theme.breakpoints.between("sm", "md")]: {
      right: 60,
    },
    [theme.breakpoints.between("md", "lg")]: {
      right: 60,
    },
    [theme.breakpoints.down("xs")]: {
      right: 10,
      left: 10,
    },
  },
  mediaPicture: {
    width: 400,
    height: 225,
    [theme.breakpoints.down("xs")]: {
      width: 200,
      height: 100,
    },
  },
  image_gradient: {
    position: "absolute",
    background: "#EAF7EF",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  background_info: {
    position: "relative",
    height: "320px",
    background: "#EAF7EF",
  },
  info_tittle: {
    [theme.breakpoints.down("xs")]: {
      fontSize: 20,
    },
  },
  more_info: {
    [theme.breakpoints.down("xs")]: {
      paddingTop: 20,
    },
  },
});
  
  export default styles;
  