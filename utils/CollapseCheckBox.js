import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import faAngleDown from "@fortawesome/fontawesome-free-solid/faAngleDown";
import faAngleUp from "@fortawesome/fontawesome-free-solid/faAngleUp";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import Collapse from "@material-ui/core/Collapse";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import { Box } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/styles";
import { isMobileDevice } from "./FunctionUses";

const CollapseCheckbox = ({ initState, handleFilters, list, title }) => {
  const GreenCheckbox = withStyles({
    root: {
      "&$checked": {
        color: green[600],
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);
  const collapse = {
    open: false,
    checked: [],
    nameDistrict: [],
  };
  const [itemShow, setItemShow] = useState(5);
  const [listItems, setListItem] = useState(list);
  const [stateCollapse, setStateCollapse] = useState(collapse);
  useEffect(() => {
    if (initState) {
      setStateCollapse((preState) => ({
        ...preState,
        open: initState,
      }));
    }
  }, []);
  useEffect(() => {
    if (listItems.length == 0) {
      setListItem(list);
    }
  }, [list]);
  useEffect(() => {
    handleFilters(stateCollapse.nameDistrict);
  }, [stateCollapse.nameDistrict]);
  const showMore = () => {
    if (itemShow === 5) {
      setItemShow(listItems.length);
    } else {
      setItemShow(5);
    }
  };
  const handleClick = () => {
    setStateCollapse((preState) => ({
      ...preState,
      open: !stateCollapse.open,
    }));
  };
  const handleAngle = () =>
    stateCollapse.open ? (
      <FontAwesomeIcon icon={faAngleUp} className="icon" />
    ) : (
      <FontAwesomeIcon icon={faAngleDown} className="icon" />
    );
  const handleToggle = (val, name) => {
    const { checked, nameDistrict } = stateCollapse;
    const currentIndex = checked.indexOf(val);
    const newChecked = [...checked];
    const newDistrict = [...nameDistrict];
    if (currentIndex === -1) {
      newChecked.push(val);
      newDistrict.push(name);
    } else {
      newChecked.splice(currentIndex, 1);
      newDistrict.splice(currentIndex, 1);
    }
    setStateCollapse((preState) => ({
      ...preState,
      checked: newChecked,
      nameDistrict: newDistrict,
    }));
  };

  const renderList = () =>
    listItems &&
    listItems.slice(0, itemShow).map((value) => (
      <FormControlLabel
        key={value._id}
        control={
          <GreenCheckbox
            checked={stateCollapse.checked.indexOf(value._id) !== -1}
            onChange={(e, checkValue) =>
              handleToggle(value._id, value.district)
            }
            name="checkedG"
          />
        }
        label={
          <Box fontSize={14} component="div" fontWeight="normal">
            {value.district}
          </Box>
        }
      ></FormControlLabel>
    ));

  return (
    <div className="collapse_items_wrapper">
      <List>
        <ListItem
          onClick={() => handleClick()}
          style={{ padding: "0 20px 0 0" }}
        >
          <ListItemText
            primary={
              <Box fontWeight="bold" fontSize={16}>
                {title}
              </Box>
            }
          />
          {!isMobileDevice() ? handleAngle() : null}
        </ListItem>
        <Collapse in={stateCollapse.open} timeout="auto" unmountOnExit>
          <FormControl component="fieldset">
            <FormGroup>{renderList()}</FormGroup>
          </FormControl>
        </Collapse>
        {listItems && listItems.length > 5 && listItems.length !== itemShow && (
          <p
            style={{
              fontWeight: "bold",
              fontSize: 10,
              lineHeight: "13px",
              textAlign: "center",
              marginTop: 8,
              cursor: "pointer",
            }}
            onClick={() => showMore()}
          >
            Hiển thị thêm
          </p>
        )}
        {listItems.length === itemShow && (
          <p
            style={{
              fontWeight: "bold",
              fontSize: 10,
              lineHeight: "13px",
              textAlign: "center",
              marginTop: 8,
              cursor: "pointer",
            }}
            onClick={() => showMore()}
          >
            Thu gọn
          </p>
        )}
      </List>
    </div>
  );
};

export default CollapseCheckbox;
