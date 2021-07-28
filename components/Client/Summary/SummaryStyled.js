
const styles = (theme) => ({
  summaryContainer: {
    padding: "30px 24px 40px 24px",
    border: "1px solid rgba(0, 0, 0, 0.15)",
    borderRadius: 8,
    "& hr" : {
      width: "100%" , 
      height: 1 ,
      backgroundColor :'#E7E9E8', 
    }
  },
  summaryMoneyYear: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  summaryMoney : {
      display: "flex",
      alignItems: "center",
      "& div:first-child" : {
          marginRight : 56
      },
  },
  currentYear: { 
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: "20px",
    color: "#2FAF62",
      "& p:first-child": {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 12,
        lineHeight: "18px",
        color: "#888E8A",
      }
  },
  currentMonth: { 
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: "20px",
    color: "#2FAF62",
      "& p:first-child": {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 12,
        lineHeight: "18px",
        color: "#888E8A",
      }
  },
  yearDropDown : {
    width: "100%",
    padding:  10,
    cursor: "pointer",
    "&:hover" : {
      backgroundColor : "#888E8A"
    }
  },
  transactionList: {
    marginTop: 50,
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: "20px",
    color: "#000000",
  },
  transactionListRecent: {
    marginBottom : "16px !important",
  },
  transactionListRecentTable: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding:  "12px 24px",
    marginRight : "-24px",
    marginLeft : "-24px",
    background: "#F3F4F3",
    borderRadius: "4px 4px 0px 0px",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: "20px",
    color: "#888E8A",
  },
  transactionListTableContent: {
    marginTop : 16
  },
  secondRow: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: "20px",
    color: "#111E16",
    "& div:last-child" : {
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: 12,
      lineHeight: "18px",
      color: "#888E8A",
      marginTop : 5
    }
  },
  time: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: "20px",
    color: "#111E16",
  },
  date : {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: "20px",
    color: "#111E16",
    marginTop : 5
  },
  thridRow: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: "20px",
    color: "#2FAF62",
  }
});
export default styles;
