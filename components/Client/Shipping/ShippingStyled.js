import momoIcon from "../../../assets/momo_icon.svg";

const styles = (theme) => ({
  main_paymentType: {},
  main_paymentType__sub: {
    "& p": {
      color: "#888E8A",
      fontSize: 14,
    },
  },
  main_paymentType__select: {
    display: "flex",
    alignItems: "center",
    marginLeft: -9,
    [theme.breakpoints.down("xs")]: {
      paddingTop: 15,
    },
  },
  main_paymentType__selectImage: {
    backgroundImage: `url(${momoIcon})`,
    height: 32,
    width: 32,
    backgroundRepeat: "no-repeat",
  },
  main_paymentType__selectContent: {
    paddingLeft: 12,
  },

  main_recipent__totalNumber: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    color: "#888E8A",
  },

  main_recipent__title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  main_recipent__hr: {
    marginLeft: -24,
    marginRight: -24,
  },
  main_recipent__summaryProvisional: {
    display: "flex",
    justifyContent: "space-between",
    "& p": {
      fontSize: 16,
    },
  },
  main_recipent__summaryTransport: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: 16,
    "& p": {
      fontSize: 16,
    },
  },
  main_recipent__finalPayment: {},
  main_recipent__totalPayment: {
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: 16,
  },
  main_recipent__rePayment: {
    paddingBottom: 16,
  },
  main_recipent__totalPaymentNumber: {
    color: "#2FAF62",
    fontWeight: "bold",
    fontSize: 20,
  },
  main_recipent__paymentButton: {
    textAlign: "center",
    "& button": {
      padding: "15px 60px",
      background: (props) => (props.disabled ? "#2FAF62" : "#E7E9E8"),
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: 16,
      border: "none",
      borderRadius: 4,
      color: (props) => (props.disabled ? "#FFFFFF" : "#C3C7C5"),
    },
  },
  inputTag: {
    width: "350px",
    border: "1px solid #C3C7C5",
    borderRadius: 4,
    padding: "10px 12px",
    backgroundColor: "white",
  },

  selectTag: {
    width: 350,
    border: "1px solid #C3C7C5",
    borderRadius: 4,
    padding: "10px 12px",
    backgroundColor: (props) => (props.disabled ? "#F3F4F3" : "white"),
    pointerEvents: (props) => (props.disabled ? "none" : "auto"),
  },
  titleText: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 14,
    paddingBottom: 3,
  },
  main_addressMobile: {},
  main_addressMobileContent: {
    marginTop: 30,
  },
  city: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  ward: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  district: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  addAddressMobile: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
});

export default styles;
