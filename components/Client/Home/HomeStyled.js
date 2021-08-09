const styles = (theme) => ({
  pageContainer: {
    margin: "0 16px",
    [theme.breakpoints.up("lg")]: {
      margin: "0 30px",
    },
    [theme.breakpoints.up("xl")]: {
      maxWidth: "1188px",
      margin: "auto",
    },
  },
});
export default styles;
