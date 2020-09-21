import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { withStyles } from "@material-ui/core/styles";
import { green, purple } from "@material-ui/core/colors";
import { Typography, Box, Button } from "@material-ui/core";
import AddCircleOutlineSharpIcon from '@material-ui/icons/AddCircleOutlineSharp';
import RemoveCircleOutlineSharpIcon from '@material-ui/icons/RemoveCircleOutlineSharp';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { sizing } from '@material-ui/system';
import SwiperCore, { Swiper, Autoplay, Navigation, Pagination, Controller, Control } from 'swiper';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

import FormField from "../../../utils/FormField";
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
        appBar: {
            position: 'relative',
          },
        title: {
            marginLeft: theme.spacing(2),
            flex: 1,
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
    // Hire Time
    // const [hireTime, setHireTime] = useState('');

    // const handleChangeHireTime = (event) => {
    //     setHireTime(event.target.value);
    // };

    // Image Change
    const [imageSrc, setImageSrc] = useState(imageTest1)

    const handleChangeImage = (src) => {
        console.log(src)
        setImageSrc(src)
    }
    
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        slidesPerView: 5,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        centerInsufficientSlides: true,
        slideToClickedSlide: true,
      });
    var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbs
        },
    });

    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });

    return(
        <div className={classes.main_list}>
            <Grid container spacing={8}>
                <Grid item lg={6} md={6} xs={12}>
                    <div className="swiper-container gallery-top">
                        <div class="swiper-wrapper">
                            <div className="swiper-slide">
                                <img src={imageSrc} onClick={handleClickOpen} />
                            </div>
                        </div>
                    </div>
                    <div className="swiper-container gallery-thumbs">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <img src={imageTest1} onClick={() => handleChangeImage(imageTest1)} />
                            </div>
                            <div className="swiper-slide">
                                <img src={imageTest2} onClick={() => handleChangeImage(imageTest2)} />
                            </div>
                            <div className="swiper-slide">
                                <img src={imageTest3} onClick={() => handleChangeImage(imageTest3)} />
                            </div>
                            <div className="swiper-slide">
                                <img src={imageTest4} onClick={() => handleChangeImage(imageTest4)} />
                            </div>
                            <div className="swiper-slide">
                                <img src={imageTest5} onClick={() => handleChangeImage(imageTest5)} />
                            </div>
                            <div className="swiper-slide">
                                <img src={imageTest5} onClick={() => handleChangeImage(imageTest5)} />
                            </div>
                        </div>
                    </div>
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
                    {/* <Button color="success" className={classes.button_cart}>Chọn vào giỏ hàng</Button> */}
                    <Box>
                        <StyledButton variant="contained" color="primary">
                            Chọn vào giỏ hàng
                        </StyledButton>
                    </Box>
                </Grid>
            </Grid>

        {/* <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
            <AppBar className={classes.appBar}>
            <Toolbar>
                <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                <CloseIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                Sound
                </Typography>
                <Button autoFocus color="inherit" onClick={handleClose}>
                save
                </Button>
            </Toolbar>
            </AppBar>
            <List>
            <ListItem button>
                <ListItemText primary="Phone ringtone" secondary="Titania" />
            </ListItem>
            <Divider />
            <ListItem button>
                <ListItemText primary="Default notification ringtone" secondary="Tethys" />
            </ListItem>
            </List>
        </Dialog> */}
        </div>
    )
}

export default ProductDetailsInfo;