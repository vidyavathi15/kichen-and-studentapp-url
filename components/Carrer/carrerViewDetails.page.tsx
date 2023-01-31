import React from "react";
import { Box, Grid, ListItemText, Stack, Typography } from "@mui/material";
import { CarrerSendCvStyles } from "./carrerViewDetailsStyles";
import JsonData from '../../JSON/carrerSample.json';
import CarrerSendApplication from "./carrerViewDetailsAppForm.component";
import type { IDescriptionObj, IDescriptionJSON } from '../../Interfaces/descriptionInterfaces';
import WebLayout from '../WebLayout/webLayout.component';

const CarrerViewDetails = () => {
    const { carrerSendCvAboutCompany, sampleCarrerJobDescription }: IDescriptionJSON = JsonData;
    const Styles = CarrerSendCvStyles();
    return (
        <WebLayout>
            <Box className={Styles.carrerSendCvContainer}>
                <Grid container display={{ xs: 'block', sm: "block", md: 'block', lg: "none", xl: 'none' }} item xs={12} sm={12} md={12} lg={6} xl={6}>
                    <CarrerSendApplication />
                </Grid>
                <Box className={Styles.carrerSendCv} >
                    <Grid container columnSpacing={{ xs: '0', sm: "0", md: '0', lg: "4", xl: '4rem' }} rowSpacing={{ xs: '12', sm: "12", md: '12', lg: "0", xl: '0' }}>
                        <Grid item xs={12} sm={12} md={12} lg={7} xl={7}>
                            <Stack direction={'row'} alignItems={'center'} >
                                <Typography variant="h6" className={Styles.copmanyPositionTitle} >IOS Developers</Typography>
                            </Stack>
                            <Typography variant="subtitle1" className={Styles.jobDescriptionTitleText}>Job Description</Typography>
                            <Box className={Styles.jobDescriptionContainer}>
                                {carrerSendCvAboutCompany.map((data: IDescriptionObj, index: number) => (
                                    <Box marginTop={'1rem'} key={index}>
                                        <Typography variant="subtitle1" className={Styles.jobDescriptionHeading}>{data?.heading}</Typography>
                                        <Box marginTop={'1rem'}>
                                            {data?.content.map((content: string, index: number) => (
                                                <Typography key={index} variant="subtitle1" className={Styles.jobDescriptionContent}>{content}</Typography>
                                            ))}
                                        </Box>
                                    </Box>
                                ))}
                                {sampleCarrerJobDescription.map((data: IDescriptionObj, index: number) => (
                                    <Box key={index}>
                                        <Typography variant="subtitle1" className={Styles.jobDescriptionHeading} marginTop={'1rem'}>{data?.heading}</Typography>
                                        <Box marginTop={'1rem'}>
                                            {data?.content.map((content: string, index: number) => (
                                                <Stack className={Styles.listContent} key={index}>
                                                    <ListItemText primary={content} />
                                                </Stack>
                                            ))}
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                        </Grid>
                        <Grid display={{ xs: 'none', sm: "none", md: 'none', lg: "block", xl: 'block' }} item xs={12} sm={12} md={12} lg={5} xl={5}>
                            <CarrerSendApplication />
                        </Grid>
                    </Grid>
                </Box>
            </Box >
        </WebLayout >
    )
}
export default CarrerViewDetails;