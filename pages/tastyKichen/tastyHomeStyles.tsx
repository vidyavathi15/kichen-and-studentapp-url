
import { makeStyles } from "@mui/styles"; 

export const TastyHomeStyles = makeStyles({

appbar:{
    display:"flex", 
    justifyContent:"space-between", alignItems:"Center", 
    // backgroundColor:"transparent", 
    // backgroundColor:"transparent",
    backgroundColor:"#57499c",
    color:"black", 
    "& .MuiTypography-subtitle2":{
        color:"#FF9551"
    },
    "& .MuiTypography-subtitle1":{
        color:"black"
    }
}, 
logoutButton:{
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
footerTitle:{
    padding:"2rem",
    backgroundColor:"#0f172a",
    "& .MuiTypography-subtitle1":{
        color:"white",
        font: "normal normal regular 8px PoppinsRegular",

    }, 
    "& .MuiTypography-subtitle2":{
        color:"white",
        font: "normal normal regular 5px PoppinsRegular",

    }, 
    
}, 
footerIcons:{
    color:"white"
}, 
resTitle:{
    "& .MuiTypography-subtitle1":{
        color:"black",
        font: "normal normal regular 8px PoppinsBold",

    },
    "& .MuiTypography-body2":{
        color:"black",
        font: "normal normal regular 5px PoppinsRegular",

    },

}, 
resListCard:{
    height:"150px", 
    width:"300px",
    border:"1px solid transparent"
}, 
dynamicTitles:{
    "& .MuiTypography-subtitle1":{
        color:"white",
        font: "normal normal regular 12px PoppinsBold",

    },
    "& .MuiTypography-body2":{
        color:"white",
        font: "normal normal regular 5px PoppinsRegular",

    },

},
dynamicImg:{
    borderRadius:"6px"
}


})