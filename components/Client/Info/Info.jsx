import React, { useState } from "react";
import { Typography, Box, Checkbox, Button, Radio } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { green, purple } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";
import styles from "./InfoStyled";

const Info = () => {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const StyledButton = withStyles((theme) => ({
    root: {
      width: "100%",
      backgroundColor: "#2FAF62",
      borderRadius: 4,
      border: 0,
      color: theme.palette.getContrastText(purple[500]),
      height: 48,
      padding: "12px 24px",
      boxShadow: "none",
      "&:hover": {
        backgroundColor: "#2FAF62",
      },
    },
    label: {
      textTransform: "initial",
      fontSize: 16,
      fontWeight: "bold",
      fontStyle: "normal",
    },
  }))(Button);
  return (
    <div className={classes.info_main}>
      <div className={classes.background_info}>
        {/* <Image src={InfoImage} width={1206} height={280} layout="responsive" /> */}
        <Typography component={"div"} className={classes.typography}>
          <Box className={classes.box}>
            <Box className={classes.info_tittle}>
              Đăng ký để nhận khuyến mãi
            </Box>
            <hr className={classes.hr} />
            <Box className={classes.subTitle}>
              Thêm một nguồn thu nhập hấp dẫn và ổn định từ chính những sản phẩm
              bạn không dùng tới, tại sao không nhỉ?
            </Box>
            <Box className={classes.emailBoxContainer}>
              <Box>
                <input placeholder="NHẬP EMAIL CỦA BẠN" type="text" />
                <hr />
                <Box className={classes.checkedIcon}>
                  <Checkbox
                    defaultChecked
                    color="primary"
                    inputProps={{ "aria-label": "secondary checkbox" }}
                  />
                  <p>
                    Đồng ý với <span>“Điều khoản & Điều kiện”</span>
                  </p>
                </Box>
              </Box>
            </Box>
            <Box className={classes.more_info}>
              <StyledButton variant="contained" color="primary">
                Đăng ký nhận khuyến mãi
              </StyledButton>
            </Box>
          </Box>
        </Typography>
      </div>
    </div>
  );
};

export default Info;
