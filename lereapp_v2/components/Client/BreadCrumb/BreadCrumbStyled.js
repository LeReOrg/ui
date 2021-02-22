const styles = (theme) => ({
  breadcrumb_main: {
    background: "#F3F4F3",
    padding: "14px 0 14px 80px",
    [theme.breakpoints.down("sm")]: {
      padding: "7px 0 7px 16px",
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