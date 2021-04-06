const styles = (theme) => ({
    smallImage: {
        // height: 88,
        // width: 88,
        [theme.breakpoints.down("xs")]: {
          height: 64,
        },
      },
      nameItem: {
        //   color: "#111E16 !important",
      },
      cartBody: {
        display: "flex",
        margin: "16px 0",
        border: "none",
        flexDirection: "column",
        [theme.breakpoints.down("xs")]: {
          margin: 0,
        },
      },
      hrCart: {
        background: "#E7E9E8",
        "&:last-child": {
          display: "none",
        },
      },
      infoItem: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 10,
        "& span": {
          fontWeight: "bold",
        },
      },
      infoContent: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      },
      depositMoney: {
        textAlign: "right",
        paddingTop: 8,
      },
})
export default styles;