import AvailableIcon from "../assets/ic_24system_check.svg";
import UnAvailableIcon from "../assets/ic_24system_close.svg";

const styles = (theme) => ({
  root: {
    maxWidth: 345,
    height: 158,
    [theme.breakpoints.down("xs")]: {
      height: 100,
    },
  },
  content: {
    fontSize: 14,
    textTransform: "capitalize",
    [theme.breakpoints.up("md")]: {
      fontSize: 16,
      lineHeight: "22px",
    },
  },
  price_item: {
    color: "#2F80ED",
    fontSize: 14,
    fontWeight: "bold",
    lineHeight: "20px",
    [theme.breakpoints.up("md")]: {
      fontSize: 16,
      lineHeight: "22px",
    },
  },
  linkTypeProduct: {
    color: "#111E16",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 16,
  },
  contentLessorItemName: {
    fontWeight: "normal",
    fontSize: 14,
    marginLeft: 12,
    color: "#111E16",
    lineHeight: "20px",
  },
  productLessorContainer: {},
  productLessorLink: {
    display: "flex",
  },
  price_item_lessor: {
    fontSize: 14,
    lineHeight: "20px",
    color: "#111E16",
  },
  contentLessorItemHr: {
    background: " rgba(0, 0, 0, 0.09)",
    marginLeft: "-24px",
    marginRight: "-24px",
  },
  contentLessorItemCheck: {
    background: (props) =>
      props.available ? `url(${AvailableIcon})` : `url(${UnAvailableIcon})`,
    width: 24,
    height: 24,
  },
});
export default styles;
