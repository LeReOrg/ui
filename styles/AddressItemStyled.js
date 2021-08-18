const styles = (theme) => ({
  addressItemContainer: {
    position: "relative",
    flex: "1 0 40%",
    backgroundColor: "rgb(255, 255, 255)",
    boxShadow: "none",
    borderRadius: 4,
    border: (props) =>
      props.default
        ? "1px dotted rgb(0, 153, 0)"
        : "1px solid rgb(221, 221, 221)",
    margin: "0px 0px 20px 20px",
    maxWidth: "calc(40% - 20px)",
    padding: "10px 15px",
  },
  addressItemName: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 4,
    display: "flex",
    justifyContent: "space-between",
  },
  addressItemAddress: {
    fontSize: 13,
    marginBottom: 4,
  },
  addressItemTelephone: {
    fontSize: 13,
    marginBottom: 10,
  },
  addressItemAction: {
    display: "flex",
  },
  addressItemAction1: {
    marginRight: 10,
    padding: "6px 14px",
    backgroundColor: (props) =>
      props.default ? "#2FAF62" : "rgb(98, 100, 85)",
    color: "#FFFFFF",
    borderRadius: 4,
    cursor: "pointer",
    border: (props) =>
      props.default ? "1px solid #2FAF62" : "1px solid rgb(85, 86, 73)",
  },
  addressItemAction2: {
    padding: "6px 14px",
    background: "linear-gradient(rgb(255, 255, 255), rgb(247, 247, 247))",
    borderRadius: 4,
    border: "1px solid rgb(204, 204, 204)",
    cursor: "pointer",
    marginRight: 8,
  },
});

export default styles;
