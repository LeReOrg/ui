import React, { useState, useRef, useEffect } from "react";
import { sort } from "../../../utils/FixedFilterItem";
import MenuItem from "@material-ui/core/MenuItem";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import MenuList from "@material-ui/core/MenuList";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { useRecoilState } from "recoil";
import { filterState } from "../../../lib/recoil-root";
const Sort = () => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const [title, setTitle] = useState(sort[0].name);
  const [filter, setFilter] = useRecoilState(filterState);
  const handleToggle = () => {
    setOpen(!open);
  };
  const handleClose = (event, value) => {
    setOpen(false);
  };
  const handleClick = (event, value) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    const { textContent } = event.target;
    if (textContent === "Giá Thấp") {
      setFilter((preState) => ({ ...preState, sort: "price:asc" }));
    } else {
      setFilter((preState) => ({ ...preState, sort: "price:desc" }));
    }
    setTitle(textContent);
    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);
  const renderList = () =>
    sort
      ? sort.map((value) => (
          <MenuItem key={value.id} onClick={(e) => handleClick(e, value.id)}>
            {value.name}
          </MenuItem>
        ))
      : null;

  return (
    <div>
      <Button
        ref={anchorRef}
        aria-haspopup="true"
        onClick={handleToggle}
        style={{ textTransform: "none", letterSpacing: 0 }}
        aria-controls={open ? "menu-list-grow" : undefined}
      >
        {`Sắp xếp :  ${title}`}
        {!open ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
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
          <Grow {...TransitionProps} style={{}}>
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
  );
};
export default Sort;
