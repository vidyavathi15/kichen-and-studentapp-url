import { makeStyles } from "@mui/styles";
export const CareerSettingsStyles = makeStyles({
  tableHeader: {
    background: "#F5F5F5 0% 0% no-repeat padding-box",
    
    font: "normal normal normal 16px/25px PoppinsRegular",
    letterSpacing: "0.77px",
    color: "#A2A2A2",
    textAlign: "left",
   
  },
  careerTitle: {
    font: "normal normal bold 18px/27px PoppinsBold",
    letterSpacing: "1.4px",
    color: "#202040",
    textAlign: "left",
  },
  textField: {
    textAlign: "left",
    font: "normal normal 300 16px/25px PoppinsRegular",
    letterSpacing: "0.77px",
    color: "#A9A9AA",
    background: "#FDFDFD 0% 0% no-repeat padding-box",
    // border: "1px solid #DFE4E7",
    borderRadius: "4px",
    width:"86%",

    height: "53px",
  },
  statusButton: {
    background: "#ECFFEE 0% 0% no-repeat padding-box",
    borderRadius: "8px",
    textAlign: "left",
    font: "normal normal normal 16px/25px PoppinsRegular",
    letterSpacing: "0.77px",
    color: "#FF6B6B",
  },
  tabelCell: {
    textAlign: "left",
    font: "normal normal normal 16px/25px PoppinsRegular",
    letterSpacing: "0.77px",
    color: "#202040",
    
  },
  removedEyeIcon: {
    color: "#818181",
  },
  editIcon: {
    color: "#FF9551",
  },
  deleteIcon: {
    color: "#FF6640",
  },

  addButton: {
    background: "#FF9551 0% 0% no-repeat padding-box",
    borderRadius: "4px",
    
    font: "normal normal normal 14px PoppinsRegular",
    letterspacing: "0.86px",
    color: "#FFFFFF",
    // padding:"3px",
    height:"46px",
    

    textTraform: "capitalize",
    "&:hover": {
      background: "#FF9551 0% 0% no-repeat padding-box",
      color: "#FFFFFF",
    },
  },
});
