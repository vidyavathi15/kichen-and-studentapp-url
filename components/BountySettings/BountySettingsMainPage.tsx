import React from "react";
import { Typography, Box, Stack } from "@mui/material";
import BountySettingsItem from "./BountySettingsItem";
import { BountySettingsMainPageMuiStyles } from './BountySettingsMainPageStyles';


const statesNames = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

function BountySettingsMainPage() {
    const styles = BountySettingsMainPageMuiStyles()
  return (
    <Stack className={styles.bountyBgContainer} >
      <Typography variant="subtitle1" className={styles.bountyTitle}>Bounty Present in states</Typography>
      <Box className={styles.bountyInnerContainer}>
        <Stack className={styles.labelsContainer} direction="row">
            
          <Typography variant="caption">State name</Typography>
          <Typography variant="caption">Status</Typography>
        </Stack>
        <Stack>
          {statesNames.map((eachState: any, index: any) => (
            <BountySettingsItem key={index} bountyDetails={eachState} />
          ))}
        </Stack>
      </Box>
    </Stack>
  );
}

export default BountySettingsMainPage;
