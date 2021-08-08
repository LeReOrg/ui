import SearHeaderIcon from "../../../../assets/searchHeaderIcon.svg";

const styles = (theme) => ({
  search_main: {
    position: "relative",
    [theme.breakpoints.down("md")]: {
      position: "unset",
    },
  },
  search_first: {
    position: "relative",
  },
  inputSearch: {
    border: "1px solid #E7E9E8",
    borderRadius: 4,
    width: 140,
    padding: "10px",
    [theme.breakpoints.up("sm")]: {
      width: 250,
      padding: "8px 13px",
    },
    [theme.breakpoints.up("md")]: {
      width: 250,
      padding: "8px 13px",
    },
    [theme.breakpoints.up("lg")]: {
      width: 300,
      padding: "10px 15px",
    },
    [theme.breakpoints.up("xl")]: {
      width: 400,
    },
  },
  searchIcon: {
    position: "absolute",
    zIndex: "1",
    right: 15,
    top: 10,
    backgroundImage: `url(${SearHeaderIcon})`,
    height: 20,
    width: 20,
  },
});

export default styles;
