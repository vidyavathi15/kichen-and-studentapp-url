import React, { useState, useEffect } from "react";
import { Box, Stack, Typography, Grid, Button, Divider } from "@mui/material";

import { CarrerPageMuiStyles } from "./CarrerPage.styles";
import { useRouter } from "next/router";
import WebLayout from "../WebLayout/webLayout.component";


function CarrerPageComponent(props: any) {
  const router = useRouter();
  const styles = CarrerPageMuiStyles();
  const {careerData, careerCnt} = props.response 


  console.log("careerdata", careerData);

 
  const viewDetailsPage = () => {
    router.push("./carrerDetailsPage");
  };

  

  return (
    <WebLayout>
      <Box className={styles.carrerBgContainer}>
        <Box className={styles.carrerPageContainer}>
          <Stack direction={"row"} alignItems={"center"}>
            <Typography variant="h6" className={styles.companyPositionTitle}>
              Current Openings - {careerCnt}
            </Typography>
          </Stack>
          <Typography variant="subtitle1" className={styles.carrerText}>
            Carrer
          </Typography>
          {careerData.map((eachCarrer: any) => (
            <>
              <Grid container margin={"1rem"}>
                <Grid item xs={5} sm={5} md={5} lg={5} xl={5}>
                  <Stack className={styles.carrerRole}>
                    <Typography variant="caption">Role</Typography>
                    <Typography variant="caption">
                      {eachCarrer["career_name"]}
                    </Typography>
                    <Typography variant="caption">
                      {eachCarrer["career_role"]}
                    </Typography>
                    <Typography variant ="caption" sx={{textTransform: "capitalize"}}>
                      {eachCarrer["type_of_employement"]}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                  <Stack className={styles.location}>
                    <Typography variant="caption">Location</Typography>
                    <Typography
                      variant="caption"
                      sx={{ textTransform: "capitalize" }}
                    >
                      {eachCarrer["city"]} , {eachCarrer["state"]}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                  <Stack direction={"row"} justifyContent={"flex-end"}>
                    <Button
                      className={styles.viewDetailsButton}
                      onClick={viewDetailsPage}
                    >
                      View Detatails
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
              <Divider className={styles.borderLine} />
            </>
          ))}

          <Stack marginTop={"2rem"}>
            <Button className={styles.seeAllOpportunitiesBtn}>
              See all opportunities
            </Button>
          </Stack>
        </Box>
      </Box>
    </WebLayout>
  );
}

export default CarrerPageComponent;


