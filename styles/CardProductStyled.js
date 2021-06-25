const styles = (theme) => ({
  root: {
    maxWidth: 345,
    height: 158,
    [theme.breakpoints.down("xs")]: {
      height: 100,
    },
  },
  content: {
    paddingTop: 16,
    fontSize: 16,
    fontWeight: "normal",
    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
      paddingTop: 10,
    },
  },
  price_item: {
    color: "#2F80ED",
    fontSize: 16,
    fontWeight: "bold",
  },
  linkTypeProduct: {
    "&:hover": {
      textDecoration: "none",
      transition: "transform 1s cubic-bezier(0.25, 0.45, 0.45, 0.95)",
    },
    color: "#111E16",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 16,
  },
  media: {
    "&:hover": {
      transform: "scale(1.2)",
      transition: "transform 4s cubic-bezier(0.25, 0.45, 0.45, 0.95)",
    },
  },
});
export default styles;
