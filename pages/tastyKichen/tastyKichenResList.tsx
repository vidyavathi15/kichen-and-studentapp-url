





import { Router } from '@material-ui/icons'
import { Typography, Grid } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react' 
import { useRouter } from 'next/router'
import { TastyHomeStyles } from './tastyHomeStyles'

const resList = [{
    id: 1,
    img_url: "https://assets.ccbp.in/frontend/react-js/tasty-kitchens/restaurants/village-traditional-foods-2200043.jpg",
    res_name: "Village Traditional Foods",
    res_cusine:"North Indian, Chinese",
    cost: "₹ 135",
    rating: 3.4,
    location: "vizag"
},
{
    id: 2,
    img_url: "https://assets.ccbp.in/frontend/react-js/tasty-kitchens/restaurants/new-hotel-akbar-2200143.jpg",
    res_name: "New Hotel Akbar",
    res_cusine:"Fast Food",
    cost: "₹200", rating: 3.7,
    location: "hyderabad"
},
{
    id: 3,
    img_url: "https://assets.ccbp.in/frontend/react-js/tasty-kitchens/restaurants/come-and-eat-2200236.webp",
    res_name: "Come and Eat",
    res_cusine:"Fast Food",
    cost: "₹ 300",
    rating: 3.8,
    location: "kurnool"
}, {
    id: 4,
    img_url: "https://assets.ccbp.in/frontend/react-js/tasty-kitchens/restaurants/hydarabad-spices-2200033.jpg",
    rating: 3.5,
    cost: "₹ 400",
    res_name: "BHotel Akbar",
    res_cusine:"North Indian, Chinese",
    location: "medak"
}, 
{
    id: 5,
    img_url: "https://assets.ccbp.in/frontend/react-js/tasty-kitchens/restaurants/time-pass-the-park-restaurent-2200055.jpg",
    rating: 3.5,
    cost: "₹ 400",
    res_name: "Hydarabad Spices",
    res_cusine:"Fast Food",
    location: "medak"
}, {
    id:6, 
    img_url:"https://assets.ccbp.in/frontend/react-js/tasty-kitchens/restaurants/cafe-madarassi-2200153.jpg",
    res_name:"Time Pass The Park Restaurent",
    res_cusine:"Fast Food", 
    rating:"3.8"

},
{
    id:7, 
    img_url:"https://assets.ccbp.in/frontend/react-js/tasty-kitchens/restaurants/hotel-sriganesh-bhavan-2200045.jpg",
    res_name:"Cafe Madarassi",
    res_cusine:"Fast Food",
    rating:"4.1",

}
]



 const TastyKichenResList = () => {
    const Styles= TastyHomeStyles()
    const router= useRouter()
    const onClickCard= (cardDetails: any) => {
        console.log("details", cardDetails)
        router.push({ pathname:"/tastyKichen/tastyKichenRecipePage", query:{cardDetails: JSON.stringify(cardDetails)}})
    
    }
    return (
        <Grid container m={"2rem"}>
        
            {resList.map((each: any, index: any) => (
                <Grid item xs={12} sm={6} md={4} lg={3} className={Styles.resListCard}>
                <Stack direction="row"  key={index} mb={4} spacing={3} onClick={() =>onClickCard(each)}>

                <img src={each.img_url} height="120px" width={"120px"} />
                <Stack direction="column">
                    <Typography>{each.res_name}</Typography>
                    <Typography>{each.res_cusine}</Typography>
                    <Stack direction={"row"} alignItems={"center"} spacing={1}>
                    <img src="https://res.cloudinary.com/dvx9cpgai/image/upload/v1675144140/startimg_pwuj6h.png"  height={"20"} width={"20"}/>
                    <Typography>{each.rating}</Typography>
                    </Stack>
                    </Stack>

                </Stack>
                </Grid>

            ))}
            </Grid>

       
    )
}


export default TastyKichenResList
