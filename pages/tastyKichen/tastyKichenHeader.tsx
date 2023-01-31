


import React from 'react'

import { Typography } from '@mui/material'
import { Stack, Toolbar, AppBar,Button } from '@mui/material'
import { TastyHomeStyles } from './tastyHomeStyles'

 const TastyKichenHeader = () => {
    const Styles = TastyHomeStyles()
  return (
    // <div>tastyKichenHeader</div>
    <AppBar>
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
</AppBar>

  )
}


export default TastyKichenHeader