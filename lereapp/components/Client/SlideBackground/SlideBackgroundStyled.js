import BackGround from "../../../assets/background.png";

const styles = (theme) => ({
    root: {
        position  : "relative"
    },
    background: {
        backgroundImage: `url(${BackGround})`,
        backgroundRepeat: "no-repeat",
        height: "70vh",
        width: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        [theme.breakpoints.down("md")]: {
            height: "35vh",
        },
        [theme.breakpoints.down("sm ")]: {
            height: "30vh",
        },
        [theme.breakpoints.down("xs")]: {
            height: "30vh",
        },
    },
});

export default styles;
