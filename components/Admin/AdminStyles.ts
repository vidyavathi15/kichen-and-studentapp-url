import { makeStyles } from "@mui/styles";
export const LoginStyles = makeStyles({
  dotContainer: {
    "& .MuiMobileStepper-dotActive": {
      background: "#FFFFFF 0% 0% no-repeat padding-box",
      opacity: 1,
     
    },
    "& .MuiMobileStepper-dots": {
      opacity: 0.75,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      animation: "swap 1s infinity",
      width:"130%",
    },
    "& .MuiMobileStepper-root": {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      position: "bottom",
      cursor: "pointer",
      outline: "none",
      width:"200%",
      "&:hover": {
        // transformOrigin: "0 0 0",
        // timeout: "0.2s",
        // transition: "2s",
        transition: ".5s ease",
      },
    },
  },

  boxButton: {
    "& .MuiButton-root": {
      background: "#FF9551 0% 0% no-repeat padding-box",
      // marginTop:"5px",
      // marginBottom:"5px",
      borderRadius: "10px",
      margin: "1.5rem 0rem",
      textTranform:"none",
      "&:hover": {
        background: "#FF9551 0% 0% no-repeat padding-box",
        borderRadius: "10px",
       
      },
    },
  },

  textField: {
    "& .MuiTextField-outlined": {
      border: "none",
      backgroundColor: "#f6f6f6",
    },
  },
  orangeLogo: {
    position: "relative",
    objectPosition: "left",
  },

  loginHeaderTitleContainer: {
    "& .MuiTypography-subtitle1": {
      font: "normal normal bold 24px PoppinsBold",
      letterSpacing: "1.15px",
      color: "#020B17",
    },
    "& .MuiTypography-subtitle2": {
      font: "normal normal normal 18px PoppinsRegular",
      letterSpacing: "0.86px",
      color: "#444444",
    },
  },
  adminBgContainer:{
    background:
    "transparent linear-gradient(180deg, #ff9551 0%, #ff7116 100%) 0% 0% no-repeat padding-box",
    height:'100vh',
    display: "flex",
    alignContent: "stretch",
    flexDirection: "column",
    justifyContent: 'space-around',

  },
  labels: {
    font: "normal normal normal 16px PoppinsRegular",
    letterSpacing: "0.77px",
  },
  formContainer: {
    "& .MuiTextField-root": {
      fontSize: "normal normal normal 16px PoppinsRegular",
      marginBottom: "20px",
      backgroundColor: "#F6F6F6 0% 0% no-repeat padding-box",
      letterSpacing: "0.77px",
      color: "#A9A9AA",
      border: "1px solid #E1E1E1",
      borderRadius: "8px",
    },
    "& .MuiInputLabel-root": {
      fontSize: "normal normal normal 18px PoppinsRegular",
      letterSpacing: "0.77px",
      color: "#A9A9AA",
      marginBottom: "10px",
    },
    "& .MuiCheckbox-root": {
      background: "#A9A9AA 0% 0% no-repeat padding-box",

      width: "14px",
      height: "14px",
    },
    // "& .MuiTypography-subtitle1": {
    //   font: "normal normal normal 16px/25px PoppinsRegular",
    //   letterSpacing: "0px",
    //   color: "#FF9551",
    //   opacity: 1,
    // },
  },
  contentContainer: {
    "& .MuiTypography-h6": {
      letterSpacing: "1.54px",
      color: "#FFFFFF",
      fontWeight: "bold",
      font: "normal normal bold 24px PoppinsBold",
    },
  },
});
