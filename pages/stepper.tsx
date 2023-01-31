

import React, { useState } from 'react'
import { Stepper, Step, StepLabel, Box , Button} from '@mui/material'

function StepperComponent() {
    
    const [activeStep, setActiveStep] = useState(0)
    const [stepList, setStepList] = useState<any>([{label:"label1", completed:false},
    {label:"label2", completed:false},
    {label:"label3", completed:false}])
   
    const onClickFirstButton= (e: React.SyntheticEvent) => {
        e.preventDefault() 
        let tempArry = stepList 
        setActiveStep(activeStep + 1)
        tempArry[activeStep].completed = true ;
        setStepList([...tempArry])
    

    }
  return (
    <Box>
        <Stepper activeStep={activeStep}>
            {stepList.map((step:{label:string, completed:boolean}, index: number) => (
                 <Step key={index}>
                 <StepLabel>{step.label}</StepLabel>
             </Step>

            ))}
           
        </Stepper>
        <Button onClick={onClickFirstButton}>firstStep</Button>

    </Box>
   
  )
}

export default StepperComponent