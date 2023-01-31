import { Stack, Typography } from '@mui/material'
import React from 'react'
import { useRouter } from 'next/router' 
import { TastyHomeStyles } from './tastyHomeStyles';
import TastyKichenHeader from './tastyKichenHeader';

const TastyKichenRecipePage = () => {
    const Styles= TastyHomeStyles()
    const router= useRouter()
    const{query} = router 
    console.log("queryyy..", query.cardDetails)
    const {cardDetails} = query 
    const parsedString : any= JSON.parse(query.cardDetails) 
    // const jsonData = JSON.parse(cardDetails)
    // console.log("parsedData", jsonData)
    console.log("cardDetailsRecipe...", parsedString)
  return (
    <Stack>
        {/* <img src={} alt={""} /> */}
        <TastyKichenHeader />

        <Stack direction={"row"} spacing={5} sx={{backgroundColor:"#333"}} p={4} >
            <img src={parsedString.img_url} alt="backImg" height={"230"} width={"350"} className={Styles.dynamicImg}
                />
                <Stack direction="column" justifyContent={"center"} className={Styles.dynamicTitles}>
                    <Typography variant="subtitle1">{parsedString.res_name}</Typography>
                    <Typography variant="subtitle1">{parsedString.res_cusine}</Typography>
                    <Stack direction={"row"} alignItems={"center"}>

                   
                    <Stack direction={"row"} alignItems={"center"} spacing={2} className={Styles.dynamicTitles} >
                    <img src="https://res.cloudinary.com/dvx9cpgai/image/upload/v1675144140/startimg_pwuj6h.png"  height={"20"} width={"20"} />
                    <Typography variant="subtitle1">{parsedString.rating} </Typography>
                    </Stack>
                   
                    <Typography variant="subtitle1"> | {parsedString.cost}</Typography>
                    </Stack>

                </Stack>
        </Stack>

        
    </Stack>
  )
}


export default TastyKichenRecipePage