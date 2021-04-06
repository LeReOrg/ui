import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import faAngleDown from "@fortawesome/fontawesome-free-solid/faAngleDown";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

const SortProduct = ({ ...props }) => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const [title, setTitle] = useState(props.list[0].name);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event,value) => {
    setOpen(false);
  };
  const handleClick = (event,value) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    const { textContent } = event.target;
    setTitle(textContent);
    setOpen(false);
  }

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  const renderList = () =>
    props.list
      ? props.list.map((value) => (
          <MenuItem key={value.id} onClick={(e) => handleClick(e,value.id)}>
            {value.name}
          </MenuItem>
        ))
      : null;

  return (
    <div>
      <div>
        <Button
          ref={anchorRef}
          aria-haspopup="true"
          onClick={handleToggle}
          style={{textTransform : "none",letterSpacing : 0}}
          aria-controls={open ? "menu-list-grow" : undefined}
        >
          {`Sắp xếp :  ${title}`}
          <FontAwesomeIcon
            icon={faAngleDown}
            className="icon"
            style={{ marginLeft: "10px" }}
          />
        </Button>

        <Popper
          open={open}
          anchorEl={anchorRef.current}
          style={{
            zIndex: 2,
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
            borderRadius: "4px",
          }}
          role={undefined}
          transition
          placement={"bottom-end"}
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    {renderList()}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
};

export default SortProduct;
