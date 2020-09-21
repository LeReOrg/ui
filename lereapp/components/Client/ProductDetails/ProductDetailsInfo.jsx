import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { withStyles } from "@material-ui/core/styles";
import { green, purple } from "@material-ui/core/colors";
import { Typography, Box, Button } from "@material-ui/core";
import AddCircleOutlineSharpIcon from '@material-ui/icons/AddCircleOutlineSharp';
import RemoveCircleOutlineSharpIcon from '@material-ui/icons/RemoveCircleOutlineSharp';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import ImageGallery from 'react-image-gallery';
import imageTest1 from "../../../assets/Tent.jpg";
import imageTest2 from "../../../assets/Img1.jpg";
import imageTest3 from "../../../assets/Img2.jpg";
import imageTest4 from "../../../assets/Img3.jpg";
import imageTest5 from "../../../assets/Img4.jpg";

const ProductDetailsInfo = ({...props}) => {
    const useStyled = makeStyles((theme) => ({
        main_list: {
          width: "92%",
          margin: "40px auto",
          [theme.breakpoints.down("sm")]: {
            margin: "0px auto",
          },
        },
        media: {
            height: `${props.itemByType ? "160px" : "215px"}`,
            objectFit : "fill"
        },
        title: {
            color: "#111E16",
            fontSize: 24,
            fontWeight: "bold",
            marginRight: "25%"
        },
        prices: {
            color: "#2FAF62",
            fontSize: 24,
            fontWeight: "bold",
            marginTop: "1%"
        },
        poster_info: {
            fontSize: 14,
            marginTop: "1%",
            color: "#888E8A",
        },
        poster: {
            color: "#2F80ED",
        },
        quantity_space: {
            marginTop: "2%"
        },
        hire_time_space: {
            marginTop: "1%"
        },
        quantity_title: {
            fontSize: 16,
            fontWeight: "bold",
            color: "#111E16",
        },
        hire_time: {
            fontSize: 16,
            fontWeight: "bold",
            color: "#111E16",
        },
        button_color: {
            fill: "#2FAF62",
        },
        quantity: {
            fontSize: 16,
            fontWeight: "bold",
            color: "#111E16",
            padding: "0px 2%",
        },
        formControl: {
            marginTop: theme.spacing(1),
            minWidth: 250,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
        hire_time_width: {
            width: "70%",
        },
    }));
    const classes = useStyled()

    const StyledButton = withStyles((theme) => ({
        root: {
            backgroundColor: "#2FAF62",
            borderRadius: 4,
            border: 0,
            color: theme.palette.getContrastText(purple[500]),
            height: 48,
            width: 350,
            marginTop: "2%",
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

    // Quantity
    let state = { quantity: 1 }
    const [input, setQuantity] = useState(state)

    const handleIncreaseQuantity = () => {
        let newState = { quantity: input.quantity + 1 }
        setQuantity(newState)
    }
    const handleDecreaseQuantity = () => {
        if(input.quantity > 1) {
            let newState = { quantity: input.quantity - 1 }
            setQuantity(newState)
        }
    }

    // Image
    const images = [
        {
            original: imageTest1,
            thumbnail: imageTest1,
        },
        {
            original: imageTest1,
            thumbnail: imageTest1,
        },
        {
            original: imageTest1,
            thumbnail: imageTest1,
        },
        {
            original: imageTest1,
            thumbnail: imageTest1,
        },
    ];

    return(
        <div className={classes.main_list}>
            <Grid container spacing={8}>
                <Grid item lg={6} md={6} xs={12}>
                    <ImageGallery items={images} />
                </Grid>
                <Grid item lg={6} md={6} xs={12}>
                    <Typography
                        className={classes.title}
                        align="left"                    
                    >
                        Cho thuê lều trại đẹp siêu cấp cách âm cực tốt không còn điều gì để chê được nữa hãy thuê mau mau nhé
                    </Typography>
                    <Typography
                        className={classes.prices}
                        align="left"                    
                    >
                        40.000đ/ngày
                    </Typography>
                    <Typography
                        className={classes.poster_info}
                        align="left"                    
                    >
                        Đăng bởi: <b className={classes.poster}>dulich247</b>
                    </Typography>
                    <hr />
                    <Grid container>
                        <Grid item lg={6} md={6} xs={12}>
                            <Typography
                            className={classes.quantity_title}
                            align="left"                    
                            >
                                Số lượng:
                            </Typography>
                            <div className={classes.quantity_space}>
                                <RemoveCircleOutlineSharpIcon className={classes.button_color} onClick={handleDecreaseQuantity} />
                                <b className={classes.quantity}>{input.quantity}</b>
                                <AddCircleOutlineSharpIcon className={classes.button_color} onClick={handleIncreaseQuantity} />
                            </div>
                        </Grid>
                        <Grid item lg={6} md={6} xs={12}>
                            <Typography
                            className={classes.hire_time}
                            align="left"                    
                            >
                                Thời gian thuê:
                            </Typography>
                            <div className={classes.hire_time_space}>
                                <FormGroup className={classes.hire_time_width}>
                                    <Input type="select" name="select">
                                        <option>1 ngày</option>
                                        <option>2 ngày</option>
                                        <option>3 ngày</option>
                                    </Input>
                                </FormGroup>
                            </div>
                        </Grid>
                    </Grid>
                    <Box>
                        <StyledButton variant="contained" color="primary">
                            Chọn vào giỏ hàng
                        </StyledButton>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default ProductDetailsInfo;