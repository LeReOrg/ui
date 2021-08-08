const styles = (theme) => ({
  breadcrumb_main_container: {
    width: "100%",
    background: "rgb(239, 239, 239)",
  },
  breadcrumb_main: {
    padding: "14px 10px",
    margin: 0,

    [theme.breakpoints.down("sm")]: {
      padding: "7px 0 7px 16px",
    },
    [theme.breakpoints.up("xl")]: {
      maxWidth: 1188,
      margin: "auto",
    },
  },
  breadcrumb_main_link: {
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
    // "&:last-child": {
    //   color : "grey",
    //   cursor: "not-allowed !important",
    //   "&:hover" :{
    //     color: "grey !important",
    //   }
    // },
    "&:hover": {
      cursor: "pointer",
      color: "#2FAF62 !important",
    },
  },
});

export default styles;
