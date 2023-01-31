

import { makeStyles } from "@mui/styles"; 

export const TastyKichenLoginStyles = makeStyles({ 
    loginButton: {
        // textTransform:"none", 
        // marginTop:"2rem", 
        // backgroundColor:"orange", 
        "& .MuiButton-root": {
            background: "#FF9551 0% 0% no-repeat padding-box",
            borderRadius: "10px",
            margin: "1.5rem 0rem",
            textTranform: "none",
            font: "normal normal regular 16px PoppinsRegular",
            letterSpacing: '0.77px',
            color: '#FFFFFF',
            "&:hover": {
                background: "#FF9551 0% 0% no-repeat padding-box",
                borderRadius: "10px",

            },
    }
},
    loginContainer:{
        display:"flex", 
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center", 
       
    }, 
    loginFieldsContainer:{
        boxShadow: "0px 8px 40px rgba(7,7,7,0.08)",
        width: '440px',
        padding:"10px", 
        margin:"10px",
        display:"flex", 
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center", 
       

    },
    inputField:{
        background: "#edf0f5 0% 0% no-repeat padding-box",
border: "1px solid #E1E1E1",
borderRadius: "8px",
opacity: 1
    }, 
    title:{
        color:"#FF9551", 
        font: "normal normal normal 24px/25px PoppinsBold",
letterSpacing: "0.77px",
opacity: 1,
marginBottom:"1rem"

    }, 
    loginTitle:{
        
        font: "normal normal normal 20px/25px PoppinsBold",
letterSpacing: "0.77px",
opacity: 1,
marginBottom:"1rem"


    }

})