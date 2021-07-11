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
