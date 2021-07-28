
const styles = (theme) => ({
  summaryContainer: {
    padding: "30px 24px 40px 24px",
    border: "1px solid rgba(0, 0, 0, 0.15)",
    borderRadius: 8,
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
  }
});
export default styles;
