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

const CollapseCheckbox = ({ ...props }) => {
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
  };
  const [stateCollapse, setStateCollapse] = useState(collapse);
  useEffect(() => {
    if (props.initState) {
      setStateCollapse((preState) => ({
        ...preState,
        open: props.initState,
      }));
    }
  }, []);
  useEffect(() => {
    props.handleFilters(stateCollapse.checked);
  }, [stateCollapse.checked]);
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
  const handleToggle = (val, check) => {
    const { checked } = stateCollapse;
    const currentIndex = checked.indexOf(val);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(val);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setStateCollapse((preState) => ({
      ...preState,
      checked: newChecked,
    }));
  };

  const renderList = () =>
    props.list
      ? props.list.map((value) => (
          <FormControlLabel
            key={value._id}
            control={
              <GreenCheckbox
                checked={stateCollapse.checked.indexOf(value._id) !== -1}
                onChange={(e, checkValue) =>
                  handleToggle(value._id, checkValue)
                }
                name="checkedG"
              />
            }
            label={
              <Box fontSize={14} component="div" fontWeight="normal">
                {value.name}
              </Box>
            }
          ></FormControlLabel>
        ))
      : null;
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
                {props.title}
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
