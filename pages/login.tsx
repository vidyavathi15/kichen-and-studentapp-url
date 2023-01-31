import React, { useState } from "react";
import Styles from "../styles/login.module.css";
import { TransitionGroup } from "react-transition-group";

import {
  Grid,
  Paper,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
  Avatar,
  Stack,
  InputLabel,
  MobileStepper,
  Box,
} from "@mui/material";
import Image from "next/image";
import { makeStyles } from "@mui/styles";
const loginStyles = makeStyles({
  dotContainer: {
    "& .MuiMobileStepper-dotActive": {
      background: "#FFFFFF 0% 0% no-repeat padding-box",
      opacity: 1,
    },
    "& .MuiMobileStepper-dots": {
      // backgroundColor: "#FF9551",
      opacity: 0.75,

      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      animation: "swap 1s infinity",
    },
    "& .MuiMobileStepper-root": {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      position: "bottom",
      opacity: 1,
      pointerEvents: "none",
    },
  },

  boxButton: {
    "& .MuiButton-root": {
      background: "#FF9551 0% 0% no-repeat padding-box",
      "&:hover": {
        background: "#FF9551 0% 0% no-repeat padding-box",
        borderRadius: "10px",
        
      },
    },
  },

  textField: {
    "& .MuiTextField-outlined": {
      border: "none",
      backgroundColor: "#f6f6f6",
    },
  },
});
export default function Login() {
  const StyleLogin = loginStyles();

  const [checked, setChecked] = useState(false);

  const [username, setUsername] = useState({value:"", error:false});
  const [password, setPassword] = useState({value:"", error:false});
  const [content, setContent] = useState<number>(0);
  console.log("active", content);

  const onClickContentBtn = (activeStep: number) => {
    if (content < 2) {
      setContent((prev) => prev + 1);
    } else {
      setContent(0);
    }
  };

  const renderThird = () => {
    return (
      <Stack direction="column">
        <Typography
          variant="h6"
          sx={{
            letterSpacing: "1.54px",
            color: "#FFFFFF",
            fontWeight: "bold",
          }}
        >
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
      <Stack direction="column">
        <Typography
          variant="h6"
          sx={{
            letterSpacing: "1.54px",
            color: "#FFFFFF",
            fontWeight: "bold",
          }}
        >
          Get Paid for reffering Great People to amazing Jobs
        </Typography>
        <Typography
          sx={{
            letterSpacing: "1.54px",
            color: "#ffe9db",
            marginTop: "50px",
            opacity: 1,
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
      <Stack direction="column">
        <Typography
          variant="h6"
          sx={{
            letterSpacing: "1.54px",
            color: "#FFFFFF",
            fontWeight: "bold",
          }}
        >
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

  const data =
    content === 0
      ? renderFirst()
      : content === 1
      ? renderSecond()
      : renderThird();

  const onSubmitForm = () => {};
  const setDetails= (label: string, event: any) => {
    let {value} = event.target
    switch(label){
      case "email":
        setUsername({...username, value:value, error: value == "" ? true: false}); break;
        case "password":
          setPassword({...password, value: value, error: value == "" ? true: false}); break;
          default:
            break;
    }


  }

  return (
    <Grid container>
      <Grid item className={Styles["image-container"]} xs={12} md={6}>
        <Stack sx={{ ml: "30px" }}>
          <Stack sx={{ mt: 3 }}>
            <Image
              src={"/images/orange.png"}
              alt="orange-logo"
              width={80}
              height={40}
            />
          </Stack>

          <Stack
            sx={{ mt: "30%" }}
            direction="column"
            alignItems="space-between"
          >
            {data}
            <Box
              className={StyleLogin.dotContainer}
              onClick={(e: any) => onClickContentBtn(e)}
            >
              <MobileStepper
                variant="dots"
                steps={3}
                activeStep={content}
                position="static"
                sx={{ backgroundColor: "transparent", mt: 5 }}
                backButton={undefined}
                nextButton={undefined}
              ></MobileStepper>
            </Box>
          </Stack>
        </Stack>
      </Grid>

      <Grid item xs={12} md={6} sx={{ marginTop: "10%" }}>
        <Stack direction="column" sx={{ m: "10%", alignSelf: "center" }}>
          <Typography
            variant="h1"
            sx={{
              font: "normal normal bold 24px/35px Poppins",
              letterSpacing: "1.15px",
              color: "#020B17",
              opacity: 1,
            }}
          >
            Welcome back
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontSize: "12px",
              mt: 3,
              color: " #444444",
              font: "normal normal normal 18px/27px Poppins",
            }}
          >
            Welcome back! Please enter your details
          </Typography>

          <Stack direction="column" sx={{ mt: 3 }}>
            <InputLabel
              sx={{ mb: 2, font: "normal normal normal 16px/25px Poppins" }}
            >
              EmailId
            </InputLabel>
            <TextField
              value={username.value}
              onChange={(e: any) =>setDetails("email", e)}
              label="Enter email or username"
              type="text"
              name="email"
              variant="outlined"
              error= {username.error}
              sx={{
                mb: 3,
                backgroundColor: "#F6F6F6 0% 0% no-repeat padding-box",
                font: "normal normal normal 16px/25px Poppins",
                letterSpacing: "0.77px",
                color: "#A9A9AA",
                opacity: 1,
              }}
            />

            <InputLabel
              sx={{ mb: 2, font: "normal normal normal 16px/25px Poppins" }}
            >
              Password
            </InputLabel>
            <TextField
              value={password.value}
              onChange={(e: any) =>setDetails("password", e)}
              type="password"
              name="password"
              error={password.error}
              sx={{
                mb: 3,
                backgroundColor: "#F6F6F6 0% 0% no-repeat padding-box",
                font: "normal normal normal 16px/25px Poppins",
                letterSpacing: "0.77px",
                color: "#A9A9AA",
                opacity: 1,
              }}
              variant="outlined"
            />
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  className="checkbox-label"
                  sx={{
                    font: "normal normal normal 16px/25px Poppins",
                    letterSpacing: "0px",
                    color: "#444444",
                    opacity: 1,
                  }}
                  onChange={(e) => setChecked(e.target.checked)}
                />
              }
              label="Remember password"
            />
            <Typography
              variant="h6"
              className={Styles["forgot-text"]}
              sx={{
                font: "normal normal normal 16px/25px Poppins",
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
              type="submit"
              onClick={onSubmitForm}
              variant="contained"
              sx={{ marginBottom: 5, marginTop: 5 }}
              fullWidth
            >
              Sign In
            </Button>
          </Box>

          <Stack direction="row" spacing={2} justifyContent="center">
            <Image alt="name" src={"/images/link.svg"} width={40} height={40} />
            <Image
              alt="name"
              src={"/images/facebook.svg"}
              width={40}
              height={40}
            />
            <Image
              alt="name"
              src={"/images/twitter.svg"}
              width={40}
              height={40}
            />
            <Image
              alt="name"
              src={"/images/insta.png"}
              width={40}
              height={40}
            />
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
}
