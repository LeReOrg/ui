import React from 'react';
import CardBlockShop from '../../../utils/CardBlockShop';
import { Typography, Box, CardMedia, Button } from "@material-ui/core";
import { green, purple, red } from "@material-ui/core/colors";
import { withStyles, makeStyles } from "@material-ui/core/styles";

const LoadMoreItem = (props) => {
    const useStyles = makeStyles((theme) => ({
        load_more_btn : {
            display : "flex",
            justifyContent : "center",
            marginTop : 35,
            marginBottom : 52,
            [theme.breakpoints.down("xs")] : {
                marginTop : 25,
                marginBottom : 42
            }
        }
    }))
    const StyledButton = withStyles((theme) => ({
        root: {
          backgroundColor : "transparent",
          borderRadius: 4,
          border: 0,
          height: 48,
          padding: "12px 24px",
          color: "#2FAF62",
          border : "1px solid #2FAF62",
          borderRadius : "4px",
          "&:hover": {
            backgroundColor: red,
          },
        },
        label: {
          textTransform: "capitalize",
          fontSize: 16,
          fontWeight: "bold",
          fontStyle: "normal",
        },
      }))(Button);
      const classes = useStyles();
    return (
        <div  className={classes.load_more_btn}>
          <StyledButton  variant="contained" >
                <Box textAlign="center" onClick={() => props.loadMore()}>Xem thêm sản phẩm</Box>
            </StyledButton>
        </div>
      );
};

export default LoadMoreItem;