


import { AppBar, Button, Toolbar, Typography , Box} from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import TastyKichenLoginForm from './tastyKichenLogin'
import { TastyHomeStyles } from './tastyHomeStyles';
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import KichenFooter from './kichenFooter';
import TastySort from './tastySort';
import TastyKichenResList  from './tastyKichenResList';
import TastyKichenHeader from './tastyKichenHeader';

const TastyKichenHomeScreen = () => {
    const Styles = TastyHomeStyles()

    const offersImgsList = [{
        id: 1,
        img_url: "https://assets.ccbp.in/frontend/react-js/restaurants-app-project/carousel-images-north-indian-special.jpg"
    },
    {
        id: 2,
        img_url: "https://assets.ccbp.in/frontend/react-js/restaurants-app-project/carousel-images-jammu-special.jpg"
    },
    {
        id: 3,
        img_url: "https://assets.ccbp.in/frontend/react-js/restaurants-app-project/carousel-images-rajasthani-special.jpg"
    }]
    const settings = {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        adaptiveHeight: true,
        appendDots: (dots: any) => (
            <Stack mt={5}>
                <ul>{dots}</ul>
            </Stack>
        )
    }
    return (
        <Stack>
            {/* <AppBar>
                <Toolbar className={Styles.appbar}>
                    <Stack direction={"row"} alignItems={"center"}>
                        <img src="https://res.cloudinary.com/dg5zldvhw/image/upload/v1662029431/Vector_1px_iths5s.png" height={50} width={50} alt="loginLogo" />
                        <Typography variant="subtitle2">Tasty Kichen</Typography>
                    </Stack>
                    <Stack direction="row" spacing={4}>
                        <Typography variant="subtitle1">Home</Typography>
                        <Typography variant="subtitle1">Cart</Typography>
                        <Button variant="contained" className={Styles.logoutButton} disableElevation>Logout</Button>

                    </Stack>


                </Toolbar>
            </AppBar> */}
            <TastyKichenHeader />
            <Stack sx={{margin:"5rem"}}>
                <Slider {...settings}>
                    {offersImgsList.map((eachOffer: any) => (
                        <Stack key={eachOffer.id} mb={5}>
                            <img
                                src={eachOffer.img_url} height={"10%"} width={"100%"}
                                alt="offer"
                                className="offer-image"
                            />
                        </Stack>
                    ))}
                </Slider>


            </Stack>
            <TastySort />
            
            <TastyKichenResList />

           
            

            <KichenFooter />


        </Stack>

    )
}

export default TastyKichenHomeScreen
