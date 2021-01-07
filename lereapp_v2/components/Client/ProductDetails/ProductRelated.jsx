import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import CardProductRelated from "../../../utils/CardProductRelated";
import styles from "./ProductDetailsStyled";

const ProductRelated = ({...props}) => {
    const useStyled = makeStyles(styles);
    const classes = useStyled()

    const [test, setTest] = useState(false);

    return(
        <div className={classes.main_list}>
            <Typography
                className={classes.title}
                align="left"                    
            >
                Sản phẩm tương tự
            </Typography>
            <div className={classes.main_list_related}>
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