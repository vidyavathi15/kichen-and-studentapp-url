import { makeStyles } from "@mui/styles";


export const ProfileStyles = makeStyles({
    profilePic:{
        borderRadius:"50px"
    },
    main:{
        "& .MuiTypography-subtitle1":{
            fontWeight:"bold"

        },
        "& .MuiTypography-caption":{
            color:"red"
        }
    }

})


