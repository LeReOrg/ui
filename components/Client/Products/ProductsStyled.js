import AddProduct from "../../../assets/addproduct.svg";
import SearchProduct from "../../../assets/searchproduct.svg";

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
    padding: "24px 24px 0 24px",
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
  searchIcon: {
    background: `url(${SearchProduct})`,
    backgroundSize: "cover",
    width: 15,
    height: 15,
    position: "absolute",
    zIndex: "1",
    left: 10,
    top: 11,
  },
  searchProduct: {
    padding: "7px 31px",
    width: 350,
    border: "1px solid #E7E9E8",
    borderRadius: 5,
  },
  searchContainer: {
    position: "relative",
    marginLeft: 24,
    marginTop: 10,
    marginBottom: 25,
  },
  searchCheckBoxs: {
    display: "flex",
    alignItems: "center",
    maxWidth: 350,
    justifyContent: "space-between",
    marginLeft: 24,
    marginBottom: 40,
  },
  searchCheckBox: {
    marginRight: 33,
    "& span:last-child": {
      fontWeight: "bold",
      fontSize: 14,
      lineHeight: "20px",
      color: "rgba(0, 0, 0, 0.87)",
    },
  },
  productTable: {},
  productTableTitle: {
    backgroundColor: "#FAFAFA",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px 24px",
    fontSize: 16,
    lineHeight: "22px",
    color: "#000000",
    fontWeight: "bold",
  },
  productTableContainer: {
    padding: "16px 24px",
  },
});

export default styles;
