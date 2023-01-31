import { makeStyles } from "@mui/styles";

export const BountySettingsMainPageMuiStyles = makeStyles({
    bountyBgContainer: {
        background: "#FFFFFF 0% 0% no-repeat padding-box", 
        padding:"16px"
    },
  bountyInnerContainer: {
    width: "100vw",
    top: "203px",
    left: "411px",
    height: "auto",
    background: "#FCFCFC 0% 0% no-repeat padding-box",
    border: "1px solid #EEEEEE",
    borderRadius: "8px",
    padding:"10px", 
    marginTop:"15px"
  },
  labelsContainer: {
    display: "flex",
    justifyContent: "space-between",
    
     
    padding:"1rem 13rem 0.5rem 1rem", 
    "& span:first-child": {
        font: "normal normal normal 18px/27px PoppinsRegular",
        letterSpacing: "1.4px",
        color: "#202040",
      },
    "& span:nth-child(2)": {
        font: "normal normal normal 18px/27px PoppinsRegular",
        letterSpacing: "1.4px",
        color: "#202040",
      },
    
      
    

   
  },
  bountyTitle: {
    font: "normal normal bold 18px/27px PoppinsBold",
    letterSpacing: "1.4px",
    color: "#202040",
  },
});
