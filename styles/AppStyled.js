const styles = (theme) => ({
  page_container: {
    paddingBottom: 180,
    width: "100%",
    [theme.breakpoints.up("md")]: {
      paddingBottom: 160,
    },
  },
  over_play: {
    width: "100%",
    height: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    background: "rgba(0, 0, 0, 0.53)",
    zIndex: 998,
  },
});

export default styles;
