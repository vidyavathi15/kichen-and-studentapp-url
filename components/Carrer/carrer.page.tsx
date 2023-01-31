import React from "react";
import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";
import { CarrerMuiStyles } from "./carrerStyles";
import { useRouter } from "next/router";
import CarrerJSON from '../../JSON/carrerSample.json';
import { ICarrerData, IDescriptionJSON } from "../../Interfaces/descriptionInterfaces";
import WebLayout from '../WebLayout/webLayout.component';

const Carrer = () => {
    const Styles = CarrerMuiStyles();
    const { carrerData }: IDescriptionJSON = CarrerJSON;
    const router = useRouter();
    const viewDetails = (index: any) => {
        router.push({
            pathname: `/career/${index}`
        })
    }





    

    return (
        <WebLayout>
            <Box className={Styles.carrerPageContainer}>
                <Box className={Styles.carrerPage}>
                    <Stack direction={'row'} alignItems={'center'} >
                        <Typography variant="h6" className={Styles.companyPositionTitle} >Current Openings - 04</Typography>
                    </Stack>
                    <Typography variant="subtitle1" className={Styles.carrerTitleText}>Carrer</Typography>
                    {carrerData.map((data: ICarrerData, index: number) => (
                        <Box key={index}>
                            <Grid container flexDirection='row' justifyContent='space-between' marginTop={'1rem'}>
                                <Grid item xs={5} sm={5} md={5} lg={5} xl={5} >
                                    <Stack className={Styles.role}>
                                        <Typography variant="caption">Role</Typography>
                                        <Typography variant="caption">{data.position}</Typography>
                                        <Typography variant="caption">{data.requirement}</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                                    <Stack className={Styles.location}>
                                        <Typography variant="caption">Location</Typography>
                                        <Typography variant="caption">{data.location}</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                                    <Stack direction={'row'} justifyContent={'flex-end'}>
                                        <Button className={Styles.viewDetails} onClick={() => viewDetails(data.position)}>View Details</Button>
                                    </Stack>
                                </Grid>
                            </Grid>
                            <Divider className={Styles.borderLine} />
                        </Box>
                    ))}

                    <Stack marginTop={"2rem"}>
                        <Button className={Styles.seeAllOpportunitiesBtn} >See all opportunities</Button>
                    </Stack>
                </Box>
            </Box>
        </WebLayout>
    )
}
export default Carrer;