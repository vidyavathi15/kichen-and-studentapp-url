import React from "react";
import WebLayout from "../WebLayout/webLayout.component";
import { Typography, Stack, Box, Grid, ListItemText } from "@mui/material";
import JsonData from "../../JSON/carrerSample.json";
import type {
  IDescriptionObj,
  IDescriptionJSON,
} from "../../Interfaces/descriptionInterfaces";
import { CarrerDetailMuiStyles } from "./CarrerPageDetails.styles";
import CarrerApplicationPopup from "../CarrerPage/CarrerDetailsPageAppForm";

function CarrerPageViewDetailPage() {
  const detailsStyles = CarrerDetailMuiStyles();
  const {
    carrerSendCvAboutCompany,
    sampleCarrerJobDescription,
  }: IDescriptionJSON = JsonData;

  return (
    <WebLayout>
      <Box className={detailsStyles.carrerDetailBgContainer}>
        <Box className={detailsStyles.mainContainer}>
          <Grid
            container
            display={{
              xs: "block",
              sm: "block",
              md: "block",
              lg: "none",
              xl: "none",
            }}
            item
            xs={12}
            sm={12}
            md={12}
            lg={6}
            xl={6}
          >
            <CarrerApplicationPopup />
          </Grid>
          <Box>
            <Grid container columnSpacing={{ xs: '0', sm: "0", md: '0', lg: "4", xl: '4' }} rowSpacing={{ xs: '12', sm: "12", md: '12', lg: "0", xl: '0' }}>
              <Grid item xs={12} sm={12} md={12} lg={7} xl={7}>
                <Stack direction={"row"} alignItems={"center"}>
                  <Typography
                    variant="h6"
                    className={detailsStyles.companyPositionTitle}
                  >
                    IOS Developers
                  </Typography>
                </Stack>
                <Typography
                  variant="subtitle1"
                  className={detailsStyles.detailJobDescriptionTitleText}
                >
                  Job Description
                </Typography>
                {carrerSendCvAboutCompany.map(
                  (eachCarrer: IDescriptionObj, index: number) => (
                    <Box marginTop={"1rem"} key={index}>
                      <Typography
                        key={index}
                        className={detailsStyles.jobDescriptionHeading}
                      >
                        {eachCarrer?.heading}
                      </Typography>
                      <Box marginTop={"1rem"}>
                        {eachCarrer?.content.map(
                          (eachContent: string, index: number) => (
                            <Typography
                              key={index}
                              variant="subtitle1"
                              className={detailsStyles.jobDescriptionContent}
                            >
                              {eachContent}
                            </Typography>
                          )
                        )}
                      </Box>
                    </Box>
                  )
                )}

                {sampleCarrerJobDescription.map(
                  (eachDescription: IDescriptionObj, index: number) => (
                    <Box marginTop={"1rem"}>
                      <>
                        <Typography
                          variant="subtitle1"
                          className={detailsStyles.jobDescriptionHeading}
                        >
                          {eachDescription?.heading}
                        </Typography>

                        {eachDescription.content.map(
                          (content: string, index: number) => (
                            <Stack
                              className={detailsStyles.listContent}
                            >
                              <ListItemText primary={content} />
                            </Stack>
                          )
                        )}
                      </>
                    </Box>
                  )
                )}
              </Grid>
              <Grid
                display={{
                  xs: "none",
                  sm: "none",
                  md: "none",
                  lg: "block",
                  xl: "block",
                }}
                item
                xs={12}
                sm={12}
                md={12}
                lg={5}
                xl={5}
              >
                <CarrerApplicationPopup />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </WebLayout>
  );
}

export default CarrerPageViewDetailPage;
