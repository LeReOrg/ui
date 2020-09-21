import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import CardProductRelated from "../../../utils/CardProductRelated";

const ProductRelated = ({...props}) => {
    const useStyled = makeStyles((theme) => ({
        main: {
            width: "92%",
            margin: "40px auto",
            marginBottom: "0px",
            [theme.breakpoints.down("sm")]: {
                margin: "0px auto",
            },
        },
        main_list: {
            marginTop: "1%",
        },
        title: {
            color: "#111E16",
            fontSize: 24,
            fontWeight: "bold",
        },
        content: {
            color: "#111E16",
            fontSize: 16,
            marginTop: "2%",
        },
        read_more: {
            color: "#2FAF62",
            fontSize: 16,
            marginTop: "2%",
        }
    }));
    const classes = useStyled()

    const [test, setTest] = useState(false);

    return(
        <div className={classes.main}>
            <Typography
                className={classes.title}
                align="left"                    
            >
                Sản phẩm tương tự
            </Typography>
            <div className={classes.main_list}>
                <Grid container spacing={2}>                
                    <Grid item lg={3} xs={6}>
                        <CardProductRelated test={test} itemByType={true} />
                    </Grid>
                    <Grid item lg={3} xs={6}>
                        <CardProductRelated itemByType={true} />
                    </Grid>
                    <Grid item lg={3} xs={6}>
                        <CardProductRelated itemByType={true} />
                    </Grid>
                    <Grid item lg={3} xs={6}>
                        <CardProductRelated test={test} itemByType={true} />
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item lg={3} xs={6}>
                        <CardProductRelated test={test} itemByType={true} />
                    </Grid>
                    <Grid item lg={3} xs={6}>
                        <CardProductRelated itemByType={true} />
                    </Grid>
                    <Grid item lg={3} xs={6}>
                        <CardProductRelated itemByType={true} />
                    </Grid>
                    <Grid item lg={3} xs={6}>
                        <CardProductRelated test={test} itemByType={true} />
                    </Grid>
                </Grid>
            </div>
            
        </div>
    )
}

export default ProductRelated;