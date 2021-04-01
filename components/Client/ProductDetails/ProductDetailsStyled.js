const styles = (theme) => ({
  main_list: {
    width: "92%",
    margin: "40px auto",
    [theme.breakpoints.down("sm")]: {
      margin: "0px auto",
    },
  },
  main_list_related: {
    marginTop: "1%",
  },
  datePicker:{
    border: "1px solid #E7E9E8",
    bordeRadius: 4,
    padding : "9px 16px",
    width : "100%"
  },
  imageGallery:{
    height: 200
  },
  title: {
    color: "#111E16",
    fontSize: 24,
    fontWeight: "bold",
  },
  titleDetailInfo: {
    color: "#111E16",
    fontSize: 24,
    fontWeight: "bold",
    marginRight: "25%",
    [theme.breakpoints.down("sm")]: {
      marginRight: "0px",
    },
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
    fontWeight: "bold",
    "&:hover":{
      cursor: "pointer",
    }
  },
  media_160: {
    height: "160px",
    objectFit: "fill",
  },
  media: {
    height: "215px",
    objectFit: "fill",
  },
  prices: {
    color: "#2FAF62",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: "1%",
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
    marginTop: "2%",
  },
  hire_time_space: {
    marginTop: "1%",
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
  button_color_plus: {
    fill: "#2FAF62",
    cursor: "pointer",
  },
  button_color_minus_1: {
    fill: "#C3C7C5",
    cursor: "pointer",
  },
  button_color_minus: {
    fill: "#2FAF62",
    cursor: "pointer",
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
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  button_cart: {
    marginTop: 40,
    [theme.breakpoints.down("sm")]: {
      margin: "10 auto",
    },
  },
});
export default styles;
