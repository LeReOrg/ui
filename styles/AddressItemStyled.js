const styles = (theme) => ({
  addressItemContainer: {
    position: "relative",
    flex: "1 0 40%",
    backgroundColor: "rgb(255, 255, 255)",
    boxShadow: "none",
    borderRadius: 4,
    border: "1px dotted rgb(0, 153, 0)",
    margin: "0px 0px 20px 0px",
    maxWidth: "calc(40% - 20px)",
    padding: "10px 15px",
  },
  addressItemName: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 4,
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
    backgroundColor: "#2FAF62",
    color: "#FFFFFF",
    borderRadius: 4,
    cursor: "pointer",
  },
  addressItemAction2: {
    padding: "6px 14px",
    background: "linear-gradient(rgb(255, 255, 255), rgb(247, 247, 247))",
    borderRadius: 4,
    border: "1px solid rgb(204, 204, 204)",
    cursor: "pointer",
  },
});

export default styles;
