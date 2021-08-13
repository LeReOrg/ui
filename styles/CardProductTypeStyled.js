const styles = (theme) => ({
  content: {
    fontSize: 14,
    color: "#111E16",
    lineHeight: "20px",
    textTransform: "capitalize",
    [theme.breakpoints.up("md")]: {
      fontSize: 18,
    },
    [theme.breakpoints.up("xl")]: {
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
