import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/icons/Menu";
import React from "react";
import RightNavMenu from "./RightNavMenu";
import { styles } from "./HeaderNavStyled";
import { makeStyles } from "@material-ui/core/styles";

const BurgerMobile = () => {
  const useStyled = makeStyles(styles);
  const classes = useStyled();
  const [state, setState] = React.useState({
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  return (
    <React.Fragment>
      <IconButton
        edge="start"
        aria-label="menu"
        onClick={toggleDrawer("right", true)}
        sx={{
          color: `common.white`,
          display: { xs: `inline`, md: `none` },
        }}
      >
        <Menu fontSize="large" />
      </IconButton>
      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}
        classes={{ paperAnchorRight: classes.mobileMenu }}
      >
        <RightNavMenu
          updateOpen={() =>
            setState((preState) => ({ ...preState, right: false }))
          }
        />
      </Drawer>
    </React.Fragment>
  );
};

export default BurgerMobile;
