import React from "react";
import { Typography, Box, CardMedia, Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { green, purple } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";
import styles from "./MoreInfoStyled";
import InfoImage from "../../../assets/info.png";
import MoreInfoBackGround from "../../../assets/BG_Gradient.png";
import MoreInfoBackGroundMobile from "../../../assets/moreInfoMobile.png";

const useStyles = makeStyles(styles);
const StyledButton = withStyles((theme) => ({
  root: {
    backgroundColor: "#2FAF62",
    borderRadius: 4,
    border: 0,
    color: theme.palette.getContrastText(purple[500]),
    height: 48,
    padding: "12px 24px",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: green[700],
    },
  },
  label: {
    textTransform: "initial",
    fontSize: 16,
    fontWeight: "bold",
    fontStyle: "normal",
  },
}))(Button);
const MoreInfo = () => {
  const classes = useStyles();
  return (
    <div className={classes.info_main}>
      <div style={{ position: "relative" }}>
        <img src={MoreInfoBackGround} className={classes.imageBackGround} />
        <img
          src={MoreInfoBackGroundMobile}
          className={classes.imageBackGroundMobile}
        />
        <div className={classes.background_info__itemContent}>
          <Box className={classes.info_tittle}>Bạn có đồ cần cho thuê?</Box>
          <Box className={classes.info_subTittle}>
            Thêm một nguồn thu nhập hấp dẫn và ổn định từ chính những sản phẩm
            bạn không dùng tới, tại sao không nhỉ?
          </Box>
          <Box className={classes.more_info}>
            <StyledButton variant="contained" color="primary">
              Tìm hiểu thêm
            </StyledButton>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
