import { makeStyles } from "@mui/styles";

export const BountySettingsItemMuiStyles = makeStyles({
  bountyItemContainer: {
    // width: "auto",
    // height: "84px",
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    border: "1px solid #EBEBEB",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 15px ",

    margin: "5px",

    // marginRight:"10px"
  },





  
  itemName: {
    font: "normal normal normal 18px PoppinsRegular",
    letterSpacing: "1.4px",
    color: "#202040",
  },
  statusContainer: {
    font: "normal normal normal 18px/27px PoppinsRegular",
    letterSpacing: "1.4px",
    color: "#202040",

    // "& 	.MuiRadio-root": {
    //     font: "normal normal normal 18px/27px PoppinsRegular",
    //   letterSpacing: "1.4px",
    //   color: "#202040",

    // },
    "& 	.MuiFormControlLabel-root": {
      paddingRight: "50px",
      
    },

    "& 	.MuiFormControlLabel-label": {
      font: "normal normal normal 14px PoppinsRegular",
      letterSpacing: "1.4px",
      color: "#202040",
      

    },
  },
});
