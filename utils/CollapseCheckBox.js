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
    handleFilters(stateCollapse.nameDistrict);
  }, [stateCollapse.nameDistrict]);
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
    list &&
    list?.map((value) => (
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
      </List>
    </div>
  );
};

export default CollapseCheckbox;
