const styles = (theme) => ({
  root: {
    maxWidth: 345,
    [theme.breakpoints.down("xs")]: {
      height: 72,
    },
  },
  content: {
    fontSize: 14,
    color: "#111E16",
    textTransform: "capitalize",
    [theme.breakpoints.down("lg")]: {
      fontSize: 18,
    },
    [theme.breakpoints.down("xl")]: {
      fontSize: 24,
      lineHeight: "32px",
    },
  },
  linkTypeProduct: {
    color: "#111E16",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 24,
  },
  media: {
    borderRadius: 8,

    [theme.breakpoints.down("xs")]: {
      height: 72,
    },
  },
});
export default styles;
