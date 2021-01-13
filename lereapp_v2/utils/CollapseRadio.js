import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import faAngleDown from "@fortawesome/fontawesome-free-solid/faAngleDown";
import faAngleUp from "@fortawesome/fontawesome-free-solid/faAngleUp";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Box } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const CollapseRadio = ({ ...props }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"), {
    defaultMatches: true,
  });
  const useStyles = makeStyles((theme) => ({
    listItemRadio: {
      padding: "10px 23px 10px 0",
      width: "60%",
      [theme.breakpoints.down("xs")]: {
        width: "100%",
      },
    },
  }));
  const classes = useStyles();
  const [radioState, setRadioState] = useState({
    open: false,
    value: "0",
  });
  useEffect(() => {
    if (props.initState) {
      setRadioState((preState) => ({
        ...preState,
        open: props.initState,
      }));
    }
  }, []);

  const handleClick = () => {
    setRadioState((preState) => ({
      ...preState,
      open: !radioState.open,
    }));
  };
  const handleAngle = () =>
    radioState.open ? (
      <FontAwesomeIcon icon={faAngleUp} className="icon" />
    ) : (
      <FontAwesomeIcon icon={faAngleDown} className="icon" />
    );
  const handleChange = (event) => {
    props.handleFilters(event.target.value);
    setRadioState((preState) => ({
      ...preState,
      value: event.target.value,
    }));
  };
  const renderList = () =>
    props.list
      ? props.list.map((val) => (
          <FormControlLabel
            key={val._id}
            value={`${val._id}`}
            control={<Radio />}
            label={val.name}
          />
        ))
      : null;
  return (
    <div>
      <List>
        <ListItem
          onClick={() => handleClick()}
          className={classes.listItemRadio}
        >
          <ListItemText
            primary={
              <Box fontWeight="bold" fontSize={16}>
                {props.title}
              </Box>
            }
            className="collapse_title"
          />
          {!isMobile ? handleAngle() : null}
        </ListItem>
        <Collapse in={radioState.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <RadioGroup
              name="prices"
              value={radioState.value}
              onChange={(e) => handleChange(e)}
            >
              {renderList()}
            </RadioGroup>
          </List>
        </Collapse>
      </List>
    </div>
  );
};

export default CollapseRadio;
