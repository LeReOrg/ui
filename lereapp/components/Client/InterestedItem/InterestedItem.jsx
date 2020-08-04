import React from 'react';
import { makeStyles, Box, Typography, Grid } from '@material-ui/core';
import CardProduct from "../../../utils/CardProduct";
import { useState } from 'react';
const useStyles = makeStyles((theme) => ({
    interested_main : {
        marginTop : 64,
        [theme.breakpoints.down("sm")]  :{
            marginTop : 30
        }
    },
    interested_title : {
        fontStyle : "normal",
        fontWeight : "bold",
        fontSize : 30,
        [theme.breakpoints.down("sm")]  :{
            fontSize : 20,
        }
    }
}))
const InterestedItem = () => {
    const classes = useStyles();
    const [test,setTest] = useState(false);
    return (
        <div className={classes.interested_main}>
            <Typography component="div">
                <Box className = {classes.interested_title}>
                    Có thể bạn quan tâm
                </Box>
                <Grid container spacing={3}>
                    <Grid item lg={3} xs = {6}>
                        <CardProduct test = {test} />
                    </Grid>
                    <Grid item lg={3} xs = {6}>
                        <CardProduct />
                    </Grid>
                    <Grid item lg={3} xs = {6}>
                        <CardProduct  />
                    </Grid>
                    <Grid item lg={3} xs = {6}>
                        <CardProduct test = {test} />
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item lg={3} xs = {6}>
                        <CardProduct test = {test} />
                    </Grid>
                    <Grid item lg={3} xs = {6}>
                        <CardProduct />
                    </Grid>
                    <Grid item lg={3} xs = {6}>
                        <CardProduct  />
                    </Grid>
                    <Grid item lg={3} xs = {6}>
                        <CardProduct test = {test} />
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item lg={3} xs = {6}>
                        <CardProduct test = {test} />
                    </Grid>
                    <Grid item lg={3} xs = {6}>
                        <CardProduct />
                    </Grid>
                    <Grid item lg={3} xs = {6}>
                        <CardProduct  />
                    </Grid>
                    <Grid item lg={3} xs = {6}>
                        <CardProduct test = {test} />
                    </Grid>
                </Grid>
            </Typography>
        </div>
    );
};

export default InterestedItem;