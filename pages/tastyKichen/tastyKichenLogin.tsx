import React, {useState} from 'react'
// import {Redirect} from 'react-router-dom'
// import Cookies from 'js-cookie'
// import './index.css' 
import {Box, TextField, Grid, Typography, Button, Stack} from "@mui/material" 
import Image from 'next/image'; 
import { TastyKichenLoginStyles } from './loginStyles';

const  TastyKichenLoginForm  = (props: any) => {
  const Styles = TastyKichenLoginStyles()
 
  // const [loginInfo, setLoginInfo] = useState({
  //   username: '',
  //   password: '',
  //   showErrorMsg: false,
  //   errorMsg: '',

  // }) 

  const [username, setUserName] = useState({value: "", error: false}) 
  const [password, setPassword] = useState({value: "" , error: false})


  // const onChangeUsername = (event: any) => {
  //   setLoginInfo({...loginInfo,
  //     username: event.target.value,
  //   })
  // }

  // const onChangePassword = (event : any) => {
  //   setLoginInfo({...loginInfo, 
  //     password: event.target.value,
  //   })
  // }

  // const onSubmitSuccess = (jwtToken: any) => {
  //   const {history} = props
  //   // Cookies.set('jwt_token', jwtToken, 'expires:30')
  //   history.replace('/')
  // }

  // const onSubmitFailure = (errorMsg: any) => {
  //   setLoginInfo({...loginInfo, 
  //     showErrorMsg: true,
  //     errorMsg,
  //   })
  // }

  // const onSubmitUserDetails = async (event: any) => {
  //   event.preventDefault()
  //   const {username, password} = loginInfo
  //   const userDetails = {username, password}
  //   const loginUrl = 'https://apis.ccbp.in/login'
  //   const options = {
  //     method: 'POST',
  //     body: JSON.stringify(userDetails),
  //   }
  //   const response = await fetch(loginUrl, options)
  //   const data = await response.json()
  //   if (response.ok) {
  //   onSubmitSuccess(data.jwt_token)
  //   } else {
  //     onSubmitFailure(data.error_msg)
  //   }
  // } 

  const onChangeUsername = (e: any) => {
    const {value} = e.target 
    setUserName({...username, value: value , error: value.length > 2 ? false : true})
  }

  const onChangePassword = (e: any) => {
    const {value} = e.target
    setPassword({...password, value: value, error: value.length > 2 ? false: true})
  }
  const onClickLogin= () => {
    
  }

 
  
    return (
    //   <div className="login-container">
    //     <div className="login-image">
    //       <img
    //         alt="website login"
    //         className="login-bg"
    //         src="https://res.cloudinary.com/dg5zldvhw/image/upload/v1662028132/Rectangle_1456_1x_wvtlvm.jpg"
    //       />
    //     </div>

    //     <div>
    //       <form onSubmit={onSubmitUserDetails} className="form-container">
    //         <img
    //           src="https://res.cloudinary.com/dg5zldvhw/image/upload/v1662029431/Vector_1px_iths5s.png"
    //           className="login-desktop"
    //           alt="website logo"
    //         />
    //         <h1 className="form-title">Tasty Kitchens</h1>
    //         <h1 className="form-login-text">Login</h1>
    //         <div className="input-container">
    //           <label htmlFor="username" className="label">
    //             USERNAME
    //           </label>
    //           <input
    //             type="text"
    //             id="username"
    //             className="input"
    //             value={loginInfo.username}
    //             placeholder="Username"
    //             onChange={onChangeUsername}
    //           />
    //         </div>
    //         <div className="input-container">
    //           <label htmlFor="password" className="label">
    //             PASSWORD
    //           </label>
    //           <input
    //             type="password"
    //             id="password"
    //             className="input"
    //             value={loginInfo.password}
    //             placeholder="Password"
    //             onChange={onChangePassword}
    //           />
    //         </div>
    //         <button type="submit" className="login-button">
    //           Login
    //         </button>
    //         {loginInfo.showErrorMsg && <p className="error-message">{loginInfo.errorMsg}</p>}
    //       </form>
    //     </div>
    //   </div>
    
        <Grid container>
          <Grid item xs={12} md={6} className={Styles.loginContainer}>
            <Box className={Styles.loginFieldsContainer}>
          <img src="https://res.cloudinary.com/dg5zldvhw/image/upload/v1662029431/Vector_1px_iths5s.png" height={50} width={50} alt="loginLogo" />
          <Typography variant="subtitle2" className={Styles.title}>Tasty Kichens</Typography>
          <Typography variant="subtitle1" className={Styles.loginTitle}>Login</Typography>
                <Stack direction={"column"} mb={3}>
                <Typography variant="h6">Username</Typography>
                <TextField  className={Styles.inputField}name="username" value={username.value} onChange={(e: any) =>onChangeUsername(e)}/>
                {username.error && <Typography>Please Enter username</Typography>}
                </Stack>
                <Stack direction={"column"}  mb={3}>
                <Typography variant="h6">Password</Typography>
                <TextField  type="password" className={Styles.inputField} name="password" value={password.value} onChange={(e: any) => onChangePassword(e)} />
                </Stack>

                <Box className={Styles.loginButton}>
                <Button variant="contained" disableElevation fullWidth onClick={onClickLogin}>Login</Button> 
                </Box>
                </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                <img  src="https://res.cloudinary.com/dg5zldvhw/image/upload/v1662028132/Rectangle_1456_1x_wvtlvm.jpg" height={"100%"} width={"100%"} alt="kichenLoginImage" />
                </Grid>
        </Grid>
        
   
    )
  }


export default TastyKichenLoginForm