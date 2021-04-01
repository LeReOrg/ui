import React, { useState } from "react";
import FormField from "../../../utils/FormField";
import { update } from "../../../utils/FormAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { makeStyles } from "@material-ui/core/styles";
import faSearch from "@fortawesome/fontawesome-free-solid/faSearch";
import { Grid } from "@material-ui/core";
import styles from "./SearchStyled";

const Search = () => {
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
          placeholder: "Ba lô, lều trại, camera, Go Pro,...",
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
  const useStyles = makeStyles(styles);
  const [search, setSearch] = useState(searchInfos);
  const updateSearch = async (element) => {
    const newFormData = update(element, search.searchData, "search");
    const newFormData_Input = {
      searchError: false,
      searchData: newFormData,
    };
    await setSearch(newFormData_Input);
  };
  const searchKeyWord = () => {
    alert("search");
  };
  const classes = useStyles();
  return (
    <div className={classes.search_body}>
      <Grid className={classes.search_contain} container>
        <Grid item xs={12} md={12}>
          <div className={classes.search_title}>
            <p>Bạn đang cần thuê gì nhỉ?</p>
          </div>
        </Grid>

        <Grid container spacing={2} className={classes.search_input_body}>
          <Grid item xs={12} lg={9} md={8} sm={8}>
            <div className={classes.search_input}>
              <FormField
                id={"search"}
                formData={search.searchData.search}
                change={(element) => updateSearch(element)}
                useClasses = {true}
              />
            </div>
          </Grid>
          <Grid item xs={12} lg={3} md={4} sm={4}>
            <div onClick={searchKeyWord} className={classes.search_btn}>
              <div className={classes.search_icon}>
                <FontAwesomeIcon icon={faSearch} className="icon" />
              </div>
              <div className={classes.search_icon_title}>
                <p>Tim kiếm</p>
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
export default Search;
