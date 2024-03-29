const styles = (theme) => ({
  addProductModalContainer: {
    position: "absolute",
    bottom: -15,
    right: 0,
    padding: 16,
    transform: "translateY(100%)",
    backgroundColor: "rgb(255, 255, 255)",
    borderRadius: 6,
    boxShadow: "rgb(179 179 179) 1px 1px 15px",
    "&::before": {
      content: '""',
      position: "absolute",
      bottom: "100%",
      right: 15,
      borderWidth: 8,
      borderStyle: "solid",
      borderColor: "transparent transparent rgb(255, 255, 255)",
      borderImage: "initial",
    },
  },
  closeButton: {
    cursor: "pointer",
    position: "absolute",
    top: 6,
    right: 6,
    padding: 4,
    color: "rgb(155, 155, 155)",
    fontSize: 11,
  },
  statusModal: {
    display: "flex",
    alignItems: "center",
    margin: 0,
    color: "rgb(51, 51, 51)",
    fontSize: 13,
    whiteSpace: "nowrap",
    "& svg": {
      marginRight: 4,
      color: " rgb(76, 175, 80)",
      fontSize: 19,
    },
  },
  buttonViewCart: {
    display: "block",
    marginTop: 16,
    padding: "10px 0px",
    width: 240,
    color: " rgb(255, 255, 255)",
    fontSize: 14,
    fontWeight: 400,
    textAlign: "center",
    whiteSpace: "nowrap",
    backgroundColor: "rgb(255, 57, 69)",
    borderRadius: 4,
  },
});
export default styles;
