import React from "react";
import { Typography, Box, CardMedia, Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { green, purple } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";
import styles from "./MoreInfoStyled";
import InfoImage from "../../../assets/info.png";
const useStyles = makeStyles(styles);
import Image from "next/image";
const StyledButton = withStyles((theme) => ({
  root: {
    backgroundColor: "#2FAF62",
    borderRadius: 4,
    border: 0,
    color: theme.palette.getContrastText(purple[500]),
    height: 48,
    padding: "12px 24px",
    "&:hover": {
      backgroundColor: green[700],
    },
  },
  label: {
    textTransform: "capitalize",
    fontSize: 16,
    fontWeight: "bold",
    fontStyle: "normal",
  },
}))(Button);
const MoreInfo = () => {
  const classes = useStyles();
  return (
    <div className={classes.info_main}>
      <div className={classes.imageBackGround}>
        <div className={classes.background_info__itemContent}>
          <Typography
            component={"div"}
            className={classes.typography}
            variant={"body2"}
          >
            <Box className={classes.box}>
              <Box
                fontSize={30}
                className={classes.info_tittle}
                fontWeight="fontWeightBold"
              >
                Bạn có đồ cần cho thuê?
              </Box>
              <Box fontSize={16}>
                Thêm một nguồn thu nhập hấp dẫn và ổn định từ chính những sản
                phẩm bạn không dùng tới, tại sao không nhỉ?
              </Box>
              <Box pt={4} className={classes.more_info}>
                <StyledButton variant="contained" color="primary">
                  Tìm hiểu thêm
                </StyledButton>
              </Box>
            </Box>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
