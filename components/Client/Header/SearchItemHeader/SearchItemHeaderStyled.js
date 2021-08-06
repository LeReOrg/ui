import SearHeaderIcon from "../../../../assets/searchHeaderIcon.svg";

const styles = (theme) => ({
  search_main: {
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  inputSearch: {
    padding: "10px 15px",
    border: "1px solid #E7E9E8",
    borderRadius: 4,
    width: 200,
    [theme.breakpoints.up("md")]: {
      width: 250,
    },
    [theme.breakpoints.up("lg")]: {
      width: 300,
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
