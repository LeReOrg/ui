import BoxSuccess from "../assets/box.png";
import { createTheme } from "@material-ui/core/styles";

const styles = (theme) => ({
  paymentSuccess_main: {
    margin: "80px auto 180px auto",
    maxWidth: 1440,
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      marginTop: 34,
      marginBottom: 80,
    },
  },
  paymentSuccessImage: {
    background: `url(${BoxSuccess}) no-repeat center center`,
    width: 160,
    height: 160,
    margin: "auto",
    marginBottom: 40,
  },
  paymentSuccessThank: {
    color: "#2FAF62",
    fontWeight: "bold",
    fontSize: 20,
    lineHeight: "28px",
    marginBottom: 12,
  },
  paymentSuccessOrderId: {
    color: "#888E8A",
    fontWeight: "normal",
    fontSize: 16,
    lineHeight: "22px",
    marginBottom: 40,
  },
});
const theme = createTheme({
  overrides: {
    MuiButton: {
      text: {
        background: "#2ABB72",
        borderRadius: 4,
        border: 0,
        color: "white",
        height: 48,
        padding: "0 30px",
        fontWeight: "bold",
        width: "100%",
        fontSize: 16,
        maxWidth: 350,
        textTransform: "inherit",
        "&:hover": {
          background: "#2FAF62",
        },
      },
    },
  },
});
export { theme };

export default styles;
