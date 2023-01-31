import { Typography , Stack, Button} from '@mui/material'
import React from 'react'
import successJson from "../components/success.json" 
import Lottie from 'lottie-react';
import { useRouter } from 'next/router';


 const ThankyouPage = () => {
    const router = useRouter()
    const onClickBack= () => {
        router.push("/schoolMgmtPage")

    }
  return (
  
    <Stack alignItems={"center"} justifyContent={"center"}>
    <Stack mb={"12px"}>
      <Lottie animationData={successJson} loop={false} style={{ width: "75px", height: "75px" }} />
    </Stack>
    <Typography variant="h6" gutterBottom>Thank You!</Typography>
    <Typography variant="subtitle1">
      We&#39;ve received your submission, and will reach out if there are any updates.
    </Typography>
    <Button variant="contained" disableElevation onClick={onClickBack}>Back</Button>
    
  </Stack>
  )
}
export  default ThankyouPage
