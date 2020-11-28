import React from "react";
import { Typography, Box, CardMedia, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { green, purple } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  info_main: {
    marginTop : 60,
    marginLeft : "-2.5%",
    marginRight : "-2.5%",
    [theme.breakpoints.down("xs")]: {
      marginTop: 32,
    },
  },
  media: {
    height: 280,
    border: "none",
    [theme.breakpoints.down("xs")]: {
      height: 240,
    },
  },
  imageInfo: {
    position: "relative",
    zIndex: 2,
  },
  typography: {
    position : "absolute",
    top: 0,
    left: 0,
    width : "50%",
    [theme.breakpoints.down("xs")]: {
      fontSize: 20,
      width : "80%"
    },
  },
  box: {
    paddingLeft: 72,
    paddingRight: 120,
    paddingTop: 56,
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 16,
      paddingTop: 26,
      paddingRight : 0
    },
  },

  image_gradient: {
    position: "absolute",
    background:
      "linear-gradient(90deg, #EAF7EF 0%, rgba(234, 247, 239, 0) 100%)",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  background_info : {
    position : "relative"
  },
  info_tittle : {
    [theme.breakpoints.down("xs")]  :{
      fontSize : 20
    }
  },
  more_info : {
    [theme.breakpoints.down("xs")] : {
      paddingTop : 20
    }
  }
}));

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
const Info = () => {
  const classes = useStyles();
  return (
    <div className={classes.info_main}>
      <div className={classes.background_info}>
        <CardMedia component="img" className={classes.media} />
        <div className={classes.image_gradient}></div>
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
              Bạn có đồ cần thuê ?
            </Box>
            <Box fontSize={16}>
              Thêm một nguồn thu nhập hấp dẫn và ổn định từ chính những sản phẩm
              bạn không dùng tới, tại sao không nhỉ?
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
  );
};

export default Info;
