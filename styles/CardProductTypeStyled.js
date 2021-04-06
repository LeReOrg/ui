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
        "&:hover": {
          textDecoration: "none",
          transition: "transform 1s cubic-bezier(0.25, 0.45, 0.45, 0.95)",
          fontSize: 26,
        },
        color: "#111E16",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 24,
      },
      media: {
        height: 160,
        "&:hover": {
          transform: "scale(1.2)",
          transition: "transform 4s cubic-bezier(0.25, 0.45, 0.45, 0.95)",
        },
        [theme.breakpoints.down("xs")]: {
          height: 72,
        },
      },
  });
  export default styles;