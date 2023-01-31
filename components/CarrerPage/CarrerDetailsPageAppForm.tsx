import React, { useState } from "react";
import {
  DescriptionOutlined,
  LocationCityOutlined,
  LocationOnOutlined,
  MailOutlined,
  MoveDownOutlined,
  PermIdentity,
} from "@mui/icons-material";

import {
  Typography,
  Box,
  Stack,
  Button,
  Divider,
  Collapse,
  IconButton,
} from "@mui/material";

import { CustomInput } from "../Common/customFormFields";
import { CarrerSendCvStyles } from "./CarrerPageApplyForm.styles";

function CarrerDetailsPageAppForm() {
  const [applyApplication, setApplyApplication] = useState(false);
  const Styles = CarrerSendCvStyles();

  return (
    <Box className={Styles.applyJobApplicationContainer}>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        className={Styles.applyJobAppHeaderLabels}
      >
        <Typography variant="subtitle1">Employment Type</Typography>
        <Typography variant="caption">Full Time</Typography>
      </Stack>
      <Divider className={Styles.verticalBorder} />
      <Stack spacing={2}>
        <Typography variant="subtitle1">Experience </Typography>
        <Typography variant="caption"> 2+ years</Typography>
      </Stack>
      <Divider className={Styles.verticalBorder} />
      <Stack spacing={2}>
        <Typography variant="subtitle1">Job Location </Typography>
        <Typography variant="caption">Hyderabad</Typography>
      </Stack>
      <Divider className={Styles.verticalBorder} />

      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        marginTop={"1rem"}
        alignItems={"center"}
      >
        <Stack spacing={2}>
          <Typography variant="subtitle1"> Date Posted</Typography>
          <Typography variant="caption">7-11-2022</Typography>
        </Stack>
        <Stack>
          <Button onClick={() => setApplyApplication(!applyApplication)}>
            {applyApplication ? "Close" : "Apply"}
          </Button>
        </Stack>
      </Stack>
      <Collapse in={applyApplication} unmountOnExit timeout={"auto"}>
        <Stack>
          <Stack>
            <CustomInput
              startAdornment={
                <IconButton>
                  <PermIdentity htmlColor="#737271" />
                </IconButton>
              }
              placeholder={"Name"}
              name={"Name"}
            />
          </Stack>
          <Stack>
            <CustomInput
              startAdornment={
                <IconButton>
                  <MoveDownOutlined htmlColor="#737271" />
                </IconButton>
              }
              placeholder={"EmailId"}
              name={"emailId"}
            />
          </Stack>
          <Stack>
            <CustomInput
              startAdornment={
                <IconButton>
                  <LocationCityOutlined htmlColor="#737271" />
                </IconButton>
              }
              placeholder={""}
              name={""}
            />
          </Stack>
          <Button>
            <Stack>
              <DescriptionOutlined htmlColor="#737271" />
              <Typography>Upload Ressume</Typography>
            </Stack>
            <input hidden accept="image/*" multiple type="file" />
          </Button>
          <Stack marginTop={"2rem"} direction={"row"} justifyContent={"center"}>
            <Button>Send Application</Button>
          </Stack>
        </Stack>
      </Collapse>
    </Box>
  );
}

export default CarrerDetailsPageAppForm;
