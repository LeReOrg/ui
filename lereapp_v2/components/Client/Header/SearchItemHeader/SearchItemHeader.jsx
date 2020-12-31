import React,{useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormField from "../../../../utils/FormField";
import { update } from "../../../../utils/FormAction";
import styles from "./SearchItemHeaderStyled";
const SearchItemHeader = () => {
  const useStyles = makeStyles(styles);
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
