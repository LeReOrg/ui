const styles = (theme) => ({
  filter_main_mobile: {
    backgroundColor: "#FFF",
    width: "50%",
    height: "100vh",
    overflowX: "hidden",
    overflowY: "hidden",
    paddingLeft: 16,
  },
  filter_main_mobile_background: {
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.5)",
    top: 0,
    left: 0,
    position: "absolute",
    display: (props) => (props.display == true ? "block" : "none"),
    zIndex: 3,
    overflowX: "hidden",
    overflowY: "hidden",
  },
  filter_main_mobileClose :{
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 21
  },
});
export default styles;
