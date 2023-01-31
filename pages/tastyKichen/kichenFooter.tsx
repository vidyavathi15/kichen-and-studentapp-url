


import { Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { TastyHomeStyles } from './tastyHomeStyles';

const KichenFooter = () => {
    const Styles = TastyHomeStyles()
  return (
    <Stack sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}} className={Styles.footerTitle}>
        <Stack direction={"row"} alignItems={"center"} spacing={2} >

        <img src="https://res.cloudinary.com/dg5zldvhw/image/upload/v1662271193/Frame_275footer_logo_virrgu.png"
          alt="website-footer-logo" height={"14%"} width= {"14%"}/>
          <Typography variant="subtitle1">Tasty Kitchens</Typography>
          </Stack>
          <Typography variant="subtitle2">The only thing we are serious about is food.
             Contact Us on</Typography>
          <Stack direction={"row"} alignItems={"center"} mt={4} spacing={2} className={Styles.footerIcons}>
            <InstagramIcon  />
            <PinterestIcon /> 
            <TwitterIcon /> 
            <FacebookIcon />

          
       
          </Stack>
          
        
    </Stack>
  )
}


export default KichenFooter