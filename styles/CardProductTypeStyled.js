const styles = (theme) => ({
  root: {
    maxWidth: 345,
    [theme.breakpoints.down("xs")]: {
      height: 72,
    },
  },
  content: {
    paddingTop: 16,
    fontSize: 24,
    [theme.breakpoints.down("md")]: {
      fontSize: 18,
      paddingTop: 4,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
      paddingTop: 4,
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
