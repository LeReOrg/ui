import React from 'react';
import { Grid, Typography, Box, CardMedia, Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import imageTest2 from '../../../assets/img/background/info.jpg'
import { green ,purple} from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor : "#EAF7EF",
     
    },
    media:{
        height : 280,
        borderRadius : "0 16px 16px 0",
         border: 'none',
        [theme.breakpoints.down('md')] :{
          height : 100,
        }
    },
    imageInfo : {
        position: "relative",
        zIndex : 2,
        borderRadius : "0 16px 16px 0",
    },
    typography : {
      [theme.breakpoints.down('md')] :{
        fontSize : 20,
      }
    },
    box : {
      paddingLeft : 72,
      paddingRight : 120,
      paddingTop : 56,
      paddingRight : 56,
      [theme.breakpoints.down('md')] :{
        paddingLeft : 9,
        paddingRight : 15,
        paddingTop : 7,
        paddingRight : 7,
      }
    }
 
  }));
 
 
  const StyledButton = withStyles((theme) =>({
    root: {
      backgroundColor: '#2FAF62',
      borderRadius: 4,
      border: 0,
      color: theme.palette.getContrastText(purple[500]),
      height: 48,
      padding: '12px 24px',
      '&:hover': {
        backgroundColor: green[700],
      }
      
    },
    label: {
      textTransform: 'capitalize',
      fontSize : 16,
      fontWeight : "bold",
      fontStyle : "normal"
    },
  }))(Button);
const Info = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container >
                <Grid item  lg={6} md={6} xs={6} >
                    <Typography component={'div'} className={classes.typography} variant={'body2'}>
                        <Box className={classes.box} >
                            <Box  fontSize={30}  fontWeight="fontWeightBold" >Bạn có đồ cần thuê ?</Box>
                            <Box> Thêm một nguồn thu nhập hấp dẫn và ổn định từ chính những sản phẩm bạn không dùng tới, tại sao không nhỉ?</Box>
                            <Box  pt={4}>
                          
                            <StyledButton variant="contained" color="primary">Tìm hiểu thêm</StyledButton>
                            </Box>

                        </Box>
                    </Typography>
                </Grid>
                <Grid item  lg={6} md={6} xs={6} className={classes.imageInfo} >
                <CardMedia
                    className={classes.media}
                    image={imageTest2}
                    />
                    <div className="image-gradient"></div>
                </Grid>
            </Grid>
        </div>
    );
};

export default Info;