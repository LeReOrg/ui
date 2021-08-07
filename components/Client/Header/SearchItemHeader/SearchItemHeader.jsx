import React, { useState, useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormField from "../../../../utils/FormField";
import { update } from "../../../../utils/FormAction";
import styles from "./SearchItemHeaderStyled";
import SearchBox from "../SearchBox/SearchBox";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  overPlayState,
  showMobileSearchIconState,
} from "../../../../lib/recoil-root";
import { useMediaQuery } from "react-responsive";
const SearchItemHeader = () => {
  const useStyles = makeStyles(styles);
  const isMobile = useMediaQuery({ query: `(max-width: 767px)` });
  const [searchBox, setShowSearchBox] = useState(false);
  const [showOverPlay, setShowOverPlay] = useRecoilState(overPlayState);
  const [showSearchMobile, setShowSearchMobile] = useState(false);
  const showMobileSearchIcon = useRecoilValue(showMobileSearchIconState);
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
    setSearch(newFormData_Input);
  };
  const showSearchBox = () => {
    setShowSearchBox(!searchBox);
    setShowOverPlay(true);
  };
  return (
    <>
      {showMobileSearchIcon || !isMobile ? (
        <div className={classes.search_main} onClick={() => showSearchBox()}>
          <div className={classes.search_first}>
            <FormField
              id={"search"}
              formData={search.searchData.search}
              change={(element) => updateSearch(element)}
              type="text"
              placeholder="Tìm kiếm"
              useClasses={false}
              className={classes.inputSearch}
            />
            <div className={classes.searchIcon}></div>
          </div>

          {searchBox && (
            <SearchBox
              changeSearBox={() => {
                setShowSearchBox(false);
                setShowOverPlay(false);
              }}
            />
          )}
        </div>
      ) : null}
    </>
  );
};

export default SearchItemHeader;
