import React,{useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import SearHeaderIcon from "../../../../assets/searchHeaderIcon.svg";
import FormField from "../../../../utils/FormField";
import { update } from "../../../../utils/FormAction";
const SearchItemHeader = () => {
  const useStyles = makeStyles((theme) => ({
    search_main: {
      position: "relative",
      [theme.breakpoints.down("xs")] : {
        display: "none"
      }
    },
    inputSearch: {
      padding: "10px 15px",
      border: "1px solid #E7E9E8",
      borderRadius: 4,
      width: 400,
      [theme.breakpoints.down("md")] : {
        width: 250,
      }
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
  }));
  const searchInfos = {
    searchError: false,
    searchSuccess: false,
    searchData: {
      search: {
        element: "input",
        value: "",
        config: {
          name: "search_input",
          type: "text",
          placeholder: "Tìm kiếm",
        },
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        validationMessage: "",
      },
    },
  };
  const classes = useStyles();
  const [search, setSearch] = useState(searchInfos);
  const updateSearch = async (element) => {
    const newFormData = update(element, search.searchData, "search");
    const newFormData_Input = {
      searchError: false,
      searchData: newFormData,
    };
    await setSearch(newFormData_Input);
  };
  return (
    <div className={classes.search_main}>
        <FormField
          id={"search"}
          formData={search.searchData.search}
          change={(element) => updateSearch(element)}
          type="text"
          placeholder="Tìm kiếm"
          useClasses = {false}
          className = {classes.inputSearch}
        />
      <div className={classes.searchIcon}></div>
    </div>
  );
};

export default SearchItemHeader;
