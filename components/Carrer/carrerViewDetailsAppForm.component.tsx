import { DescriptionOutlined, LocationOnOutlined, MailOutlined, PermIdentity } from "@mui/icons-material";
import { Box, Button, Collapse, Divider, IconButton, Stack, Typography, useMediaQuery } from "@mui/material";
import { useState } from "react";
import { CustomInput } from '../Common/customFormFields';
import { CarrerSendCvStyles } from "./carrerViewDetailsStyles";

const CarrerViewDetailsAppForm = () => {
    const Styles = CarrerSendCvStyles();
    const [applyApplication, setApplyApplication] = useState(false);
    const isMatched = useMediaQuery("(max-width:900px)")

    return (
        <Box className={Styles.applyJobApplicationContainer} >
            <Stack direction={'row'} justifyContent={'space-between'} className={Styles.applyJobAppHeaderLabels} >
                <Stack spacing={2}>
                    <Typography variant="subtitle1" >Employment Type</Typography>
                    <Typography variant="caption" >Full Time</Typography>
                </Stack>
                <Divider className={Styles.verticalBorder} />
                <Stack spacing={2}>
                    <Typography variant="subtitle1" >Experience</Typography>
                    <Typography variant="caption" >2+ Years</Typography>
                </Stack>
                <Divider className={Styles.verticalBorder} />
                <Stack spacing={2}>
                    <Typography variant="subtitle1" >Job Location</Typography>
                    <Typography variant="caption" >Hyderabad</Typography>
                </Stack>
            </Stack>
            <Divider className={Styles.horizontalBorder} />
            <Stack direction={'row'} justifyContent={'space-between'} marginTop={'1rem'} alignItems={'center'}>
                <Stack className={Styles.positionPostedDate} direction={'row'} spacing={2} >
                    <Typography variant="caption">Date Posted</Typography>
                    <Typography variant="caption" >29-10-2022</Typography>
                </Stack>
                <Stack>

                    {isMatched && <Button className={applyApplication ? Styles.closeBtn : Styles.applyBtn} onClick={() => setApplyApplication(!applyApplication)}>
                        {applyApplication ? 'Close' : "Apply"}
                    </Button>}
                </Stack>
            </Stack>
            <Collapse in={isMatched ? applyApplication : true} unmountOnExit timeout={'auto'} >
                <Stack >
                    <Stack className={Styles.formInputFields}>
                        <CustomInput startAdornment={<PermIdentity htmlColor="737271" />} placeholder={"Name"} name={"Name"} />
                    </Stack>
                    <Stack className={Styles.formInputFields}>
                        <CustomInput startAdornment={<MailOutlined htmlColor="737271" />} placeholder={"Email ID"} name={"Email ID"} />
                    </Stack>
                    <Stack className={Styles.formInputFields}>
                        <CustomInput startAdornment={<LocationOnOutlined htmlColor="737271" />} placeholder={"City"} name={"City"} />
                    </Stack>
                    <Button disableElevation variant="contained" component="label" className={Styles.uploadResumeBtn}>
                        <Stack direction={"column"} justifyContent={"center"} alignItems={"center"} spacing={0.3}>
                            <DescriptionOutlined htmlColor="#737271" />
                            <Typography variant="subtitle1" className={Styles.uploadResumeBtnLabel}>Upload Resume</Typography>
                        </Stack>
                        <input hidden accept="image/*" multiple type="file" />
                    </Button>

                    <Stack marginTop={"2rem"} direction={"row"} justifyContent={'center'}>
                        <Button className={Styles.sendApplicationBtn} >Send Application</Button>
                    </Stack>
                </Stack>
            </Collapse>
        </Box>
    )
}
export default CarrerViewDetailsAppForm;