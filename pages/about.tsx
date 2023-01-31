

import React from 'react'
// import About from '../components/about' 
import { Box } from '@mui/system'
import { Typography, Stack } from '@mui/material';
import { AboutStyles } from './aboutStyles';

export default function aboutComp() {
  const Styles = AboutStyles()
  return (
    <>
   
      
    <Box  className={Styles.mainContainer}> 
    <Typography variant="h6">OrderNo</Typography>
    <Box  component={"div"} className={Styles.labelNotch}>{null}</Box>

</Box>



   
    
    </>
  )
}
