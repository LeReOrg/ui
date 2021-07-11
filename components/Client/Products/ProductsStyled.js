import AddProduct from "../../../assets/addproduct.svg";
const styles = (theme) => ({
  addProductIcon: {
    background: `url(${AddProduct})`,
    width: 22,
    height: 22,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    marginRight: 6,
  },
  productsContainer: {
    padding: "24px 24px 40px 24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    "& p": {
      fontWeight: "bold",
      fontSize: 16,
      lineHeight: "22px",
      color: "#2F80ED",
    },
  },
  productsAddproduct: {
    display: "flex",
  },
});

export default styles;
