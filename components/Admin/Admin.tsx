import React, { useState } from "react";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
  Stack,
  InputLabel,
  MobileStepper,
  Box,
  InputAdornment,
  IconButton
} from "@mui/material";
import Image from "next/image";
import { LoginStyles } from "./AdminStyles";
import Carousel  from 'react-material-ui-carousel';



export default function AdminPage(props: any) {
  const StyleLogin = LoginStyles();

  const [checked, setChecked] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [content, setContent] = useState<number>(0);

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  // const onClickContentBtn = (activeStep: number) => {
  //   if (content < 2) {
  //     setContent((prev) => prev + 1);
  //   } else {
  //     setContent(0);
  //   }
  // };

  const renderThird = () => {
    return (
      <Stack
        direction="column"
        sx={{ width: "70%" }}
        className={StyleLogin.contentContainer}
      >
        <Typography gutterBottom variant="h6">
          You're your own boss
        </Typography>
        <Typography
          sx={{
            letterSpacing: "1.54px",
            color: "#ffe9db",
            marginTop: "50px",
            opacity: 1,
          }}
        >
          No commitments - you decide which jobs want to refer candidates to. We
          don't tie you down with contracts or engagements!
        </Typography>
      </Stack>
    );
  };
  const renderSecond = () => {
    return (
      <Stack
        direction="column"
        sx={{ width: "70%" }}
        className={StyleLogin.contentContainer}
      >
        <Typography gutterBottom variant="h6">
          Get Paid for reffering Great People to amazing Jobs
        </Typography>
        <Typography
          sx={{
            font: "normal normal 300 24px PoppinsLight",
            letterSpacing: "1.15px",
            color: "#FFE9DB",
          }}
        >
          We pay for reffering collegaues-you decide which jobs want to refer
          candidates to. we don't tie you down with contracts or enagagements!
        </Typography>
      </Stack>
    );
  };

  const renderFirst = () => {
    return (
      <Stack
        direction="column"
        sx={{ width: "72%" }}
        className={StyleLogin.contentContainer}
      >
        <Typography variant="h6">You're your own boss</Typography>
        <Typography
          sx={{
            letterSpacing: "1.54px",
            color: "#ffe9db",
            marginTop: "50px",
            opacity: 1,
          }}
        >
          No commitments - you decide which jobs want to refer candidates to. We
          don't tie you down with contracts or engagements!
        </Typography>
      </Stack>
    );
  };

  const onSubmitForm = () => { };
  const items = [
{
      renderItems: renderFirst
    },
    {
      renderItems: renderSecond,
    },
    {
      renderItems: renderThird
    }
  ]
  

  return (
    <Grid container>
      <Grid
        item className={StyleLogin.adminBgContainer}
        xs={12}
        md={6}
      >
        <Stack sx={{ m: "80px" }}>
          <Stack sx={{ mt: 1 }} direction={"column"} justifyContent='start' alignContent='center'>
            <Image
              className={StyleLogin.orangeLogo}
              src={''}
              alt="orange-logo"
              width={95}
              height={85}
            />
          </Stack>

          {/* <Stack
            sx={{ mt: "30%" }}
            direction="column"
            alignItems="space-between"
          >
            {data}
            <Box
             
              onClick={(e: any) => onClickContentBtn(e)}
            >
              <MobileStepper
                variant="dots"
                steps={3}
                activeStep={content}
                className={StyleLogin.dotContainer}
                position="static"
                sx={{ backgroundColor: "transparent", mt: 5 }}
                style={{transition:"2s"}}
                backButton={undefined}
                nextButton={undefined}
              ></MobileStepper>
            </Box>
          </Stack> */}

          <Carousel
            next={() => {}}
            prev={() => {}}
            autoPlay={true}
            animation={"slide"}
            duration={200}
            indicators={true}
            indicatorContainerProps={{
              style: {
                marginTop: "10px",
                textAlign: "start"
              }
            }}

          > 
            
          {
             
              items.map((it:any, i:number) => (<div>{it.renderItems()}</div>))
            }

          </Carousel>

        </Stack>
      </Grid>

      <Grid item xs={12} md={6} sx={{ marginTop: "10%" }}>
        <Stack direction="column" sx={{ m: "10%", alignSelf: "center" }}>
          <Stack className={StyleLogin.loginHeaderTitleContainer}>
            <Typography variant="subtitle1">Welcome back</Typography>

            <Typography variant="subtitle2">
              Welcome back! Please enter your details
            </Typography>
          </Stack>

          <Stack direction="column" sx={{ mt: 3 }}>
            <Stack className={StyleLogin.formContainer}>
              <InputLabel className={StyleLogin.labels}>EmailId</InputLabel>
              <TextField
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                label="Enter email or username"
                type="text"
                variant="outlined"
              />

              <InputLabel className={StyleLogin.labels}>Password</InputLabel>
              <TextField
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <FormControlLabel
                style={{
                  font: "normal normal normal 10px PoppinsRegular",
                  letterSpacing: "0px",
                  color: "#444444",
                }}
                control={
                  <Checkbox
                    checked={checked}
                    size="small"
                    onChange={(e) => setChecked(e.target.checked)}
                  />
                }
                label="Remember password"
              />

              <Typography
                variant="subtitle1"
                sx={{
                  font: "normal normal normal 16px/25px PoppinsRegular",
                  letterSpacing: "0px",
                  color: "#FF9551",
                  opacity: 1,
                }}
              >
                Forgot password
              </Typography>
            </Stack>
            <Box className={StyleLogin.boxButton}>
              <Button
                onClick={onSubmitForm}
                variant="contained"
                fullWidth
                disableElevation
              >
                Sign In
              </Button>
            </Box>

            <Stack direction="row" spacing={2} justifyContent="center">
              <Image alt="name" src={''} width={50} height={50} />
              <Image alt="name" src={''} width={50} height={50} />
              <Image alt="name" src={''} width={50} height={50} />
              <Image alt="name" src={''} width={50} height={50} />
            </Stack>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
}
export const Item = (props: any) => props.item