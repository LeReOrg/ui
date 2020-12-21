import React from 'react';
import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import styles from "./CustomerStyled";

const CustomerPage = () => {
    const useStyles = makeStyles(styles);
  const classes = useStyles();
    return (
        <div className={classes.main_customerProfile}>
            <Grid container spacing={2} >
                <Grid item lg={2} className={classes.customerInfo}>
                    <Box component="div">
                        <p>Luu Duc Hoa</p>
                        <hr/>
                        <Box component="div">
                            <div></div>
                            <div>Lịch sử đơn hàng</div>
                        </Box>
                        <Box component="div">
                            <div></div>
                            <div>Thông tin tài khoản</div>
                        </Box>
                    </Box>
                </Grid>
                <Grid item lg={10} className={classes.customerProcessInfo}>

                </Grid>
            </Grid>
        </div>
    );
};

export default CustomerPage;