import SearchIcon from "../../../../assets/historyIcon.svg";
import HistoryTop from "../../../../assets/topSearch.svg";
const styles = (theme) => ({
  searchBox_main: {
    backgroundColor: "#ffffff",
    position: "absolute",
    zIndex: 1000,
    width: "100%",
    boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.3)",
    border: "1px solid #E7E9E8",
    borderRadius: 4,
    paddingLeft: 12,
    paddingBottom: 15,
    paddingRight: 12,
    paddingTop: 15,
    left: 0,
    [theme.breakpoints.up("md")]: {
      width: "60%",
      left: "20%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "100%",
      left: 0,
    },
  },
  searchBox_topTypeProductItemImage: {
    height: 38,
    width: 38,
    borderRadius: 4,
    objectFit: "cover",
  },
  searchBox_historyContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  searchBox_historyTitle: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 10,
    lineHeight: "13px",
    color: "#888E8A",
  },
  searchBox_historyDelete: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 10,
    lineHeight: "13px",
    color: "#888E8A",
    cursor: "pointer",
  },
  searchBox_historyItemIcon: {
    background: `url(${SearchIcon})`,
    width: 14,
    height: 14,
  },
  searchBox_historyItem: {
    display: "flex",
    alignItems: "center",
    marginBottom: 8,
    cursor: "pointer",
    "&:last-child": {
      marginBottom: 16,
    },
  },
  searchBox_historyItemText: {
    marginLeft: 10,
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 12,
    lineHeight: "18px",
  },
  searchBox_mainHr: {
    backgroundColor: "#E0E0E0",
    margin: 0,
    marginLeft: "-12px",
    marginRight: "-12px",
  },
  searchBox_top: {
    marginTop: 6,
    marginBottom: 14,
  },
  searchBox_topIcon: {
    background: `url(${HistoryTop})`,
    width: 14,
    height: 14,
  },
  searchBox_topTitle: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: "20px",
    marginLeft: 12,
  },
  searchBox_topContent: {
    display: "flex",
    alignItems: "center",
    marginBottom: 10,
  },
  searchBox_topItem: {
    display: "flex",
    alignItems: "center",
    borderRadius: 4,
    border: "1px solid #ffffff",
    backgroundColor: "#F3F4F3",
    minWidth: 120,
    marginBottom: 10,
  },
  searchBox_topItemImage: {
    width: 38,
    height: 38,
    // margin-right: 8px;
    objectFit: "contain",
  },
  searchBox_topItemText: {
    textAlign: "center",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 12,
    lineHeight: "14px",
    color: "#000000",
    marginLeft: 5,
  },
  searchBox_topItems: {
    display: "flex",
    flexGrow: 3,
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
  searchBox_topTypeProduct: {
    marginTop: 5,
  },
  searchBox_topTypeProductTitle: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: "20px",
    color: "#000000",
  },
  searchBox_topTypeProductItems: {
    display: "flex",
    flexGrow: 4,
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
  },
  searchBox_topTypeProductItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 4,
    marginBottom: 10,
    minWidth: "25%",
    cursor: "pointer",
    "&:hover": {
      color: "#2FAF62",
    },
  },
});

export default styles;
