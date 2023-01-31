

// import React, {useEffect, useState} from 'react'
// import { Box } from '@mui/material' 
// import { useRouter } from 'next/router'
// import axios from 'axios'
// import AxiosResponse from 'axios';

// const StudentEditPage = () => {
//     const [studentDetails, setStudentDetails] = useState<any>({})
//     const router = useRouter() 
//     const {studentId} = router.query 


// const getStudentId= async () => {
// await axios.get(`http://localhost:3000/users/getByStudentId?student_id=${studentId}`)
// .then((res: any) => {
//     if (res.status === 200){



//     }
// })

// }
// useEffect(() => {
//     getStudentId()


// },[])
//   return (
    
//     <Box>
        
//     </Box>
//   )
// }


// export default StudentEditPage 



import React, {useState, useEffect} from 'react'
import Compressor from 'compressorjs';
import {Box, Stack, Grid, Typography, TextField, Button, TextareaAutosize} from "@mui/material"
import Image from 'next/image';
import { ProfileStyles } from './profile';
import axios, { AxiosResponse } from 'axios';
import { useRouter } from 'next/router';
// import createStudent from './api/users/studentApi';


const SchoolStudentEditProfile = () => {
    const router = useRouter()
    const {studentId} = router.query 
    console.log("IIIIIIId", studentId)
    const [eachStudentInfo, setEachStudentInfo] = useState<any>({})
    const [compressedFile, setCompressedFile] = useState<any>(null)
    const [studentObjId, setStudentObjId] = useState<any>({value:"", error: false})
    const [studentName, setStudentName] = useState<any>({value: "", error: false})
    const [studentEmail, setStudentEmail] = useState<any>({value: "", error:false})
    const [studentDob, setStudentDob] = useState<any>({value: "" ,error: false})
    const [studentAddress, setStudentAddress] = useState<any>({value: "", error:false})
    const [studentGender, setStudentGender] = useState<any>({value: "", error: false})
    const Styles=  ProfileStyles()
    
console.log("eachInfo.........", eachStudentInfo)
console.log("address", studentAddress)
    useEffect(() => {
            getStudentId()
    },[router.query ])

    // useEffect(() => {
    //     settingDetails()

    // }, [router.query])

        // const settingDetails = () => {
        //     setStudentObjId({...studentObjId, value: eachStudentInfo.student_id, error: false})
        //     setStudentName({...studentName, value: eachStudentInfo.student_name, error:false})
        //     setStudentEmail({...studentEmail, value: eachStudentInfo.student_email, error:false})
        //     setStudentDob({...studentDob, value: eachStudentInfo.student_dob, error:false})
        //     setStudentGender({...studentGender, value: eachStudentInfo.student_gender, error:false})
        //     setStudentAddress({...studentAddress, value: eachStudentInfo.student_address, error: false})
        //     setCompressedFile(eachStudentInfo.student_img)
        // }

        const getStudentId= async () => {
            await axios.get(`http://localhost:3000/api/users/getByStudentId?student_id=${studentId}`)
            .then((res: AxiosResponse) => {
                if (res.status === 200){
                    console.log("res.....", res.data)
                    setEachStudentInfo({...res.data.data}) 
                    setStudentObjId({...studentObjId, value: res.data.data.student_id, error: false})
            setStudentName({...studentName, value: res.data.data.student_name, error:false})
            setStudentEmail({...studentEmail, value: res.data.data.student_email, error:false})
            setStudentDob({...studentDob, value: res.data.data.student_dob, error:false})
            setStudentGender({...studentGender, value: res.data.data.student_gender, error:false})
            setStudentAddress({...studentAddress, value: res.data.data.student_address, error: false})
            setCompressedFile(res.data.data.student_img)
            
            
                }
            })
            
            }
  
  const handleCompressedUpload = async (e: any) => {
  console.log("image....", e.target.files[0])
  setCompressedFile(null)

    const image = e.target.files[0];

    new Compressor(image, {
      quality: 0.8, // 0.6 can also be used, but its not recommended to go below.
      success: (compressedResult: any) => {
        // compressedResult has the compressed file.
        // Use the compressed file to upload the images to your server.  
        console.log("url...", URL.createObjectURL(compressedResult)) 
        const imageUrl = URL.createObjectURL(compressedResult)
             
        setCompressedFile(imageUrl)
      }

    })
}
const validateDetails = (name:any, value: any)=> {
    switch(name){
        case "id": setStudentObjId({...studentObjId, value: value, error: value.length > 2 ? false : true }); break;
        case "name": setStudentName({...studentName, value: value, error:value.length > 2  ? false : true}); break;
        case "email": setStudentEmail({...studentEmail, value:value, error:value.length > 2 ? false : true}); break; 
        case "address": setStudentAddress({...studentAddress, value:value, error: value.length > 2 ? false : true}); break;
        case "dob": setStudentDob({...studentDob, value:value, error: value.length > 2  ? false: true}); break;
        case "gender": setStudentGender({...studentGender, value: value, error: value.length > 2  ? false : true});break;
        default:
        break;
    }
}
    const setDetails = (e: any) => {
        e.preventDefault();
        const { value, name, files } = e.target;
        validateDetails(name, value)
    }



const createStudentFields= [{...studentObjId ,title:"id"},
 {...studentName,title:"name"}, 
 {...studentEmail, title: "email"}, 
 {...studentAddress, title: "address"}, 
 {...studentGender, title: "gender"},
 {...studentDob, title:"dob"}

]


const onClickSubmit= async () => {
    const createStudentPayload= {
        student_id: studentObjId.value,
        student_name: studentName.value,
        student_email: studentEmail.value,
        student_gender: studentGender.value,
        student_address: studentAddress.value,
        student_img: compressedFile

        
    }
    // let isPayloadValid = updateBountyFields.every((obj: { value: any, error: boolean }) => !["", null, undefined].includes(obj.value) && !obj.error)
    createStudentFields.forEach((data: any) => {
        validateDetails(data.title, data.value)
    })
    let  isValidPayload = createStudentFields.every((obj: {value: any , error:boolean}) => !["", null, undefined].includes(obj.value) && !obj.error) 

    if (isValidPayload){
        await axios.post(`http://localhost:3000/api/users/updateStudentById?id=${studentId}`, createStudentPayload).then((res: AxiosResponse) => {
            if (res.status === 200){
                console.log("res", res)
                router.push("/thankyouPage")
            }
        })
        
    }
    

}
  return (
    <Box className={Styles.main}>
        <Typography variant="subtitle1" textAlign={"center"}>Student Edit Profile</Typography>
    <Grid container spacing={5} p={5}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
            <Stack direction="column"  spacing={3}>
            <Typography variant="subtitle1">Student_Id: </Typography>
            <TextField size="small" variant="outlined"  name="id" fullWidth value={studentObjId.value} onChange={setDetails}/>
            {studentObjId.error && <Typography variant={"caption"}>Enter valid Id</Typography>}
            </Stack>
        </Grid>
       
        <Grid item xs={12} sm={12} md={6} lg={6}>
            <Stack direction="column"  spacing={3}>
            <Typography variant="subtitle1">Student_Name: </Typography>
            <TextField size="small" variant="outlined" name="name" fullWidth value={studentName.value} onChange={setDetails}/>
            {studentName.error && <Typography variant={"caption"}>Enter valid name</Typography>}
            
            </Stack>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
            <Stack direction="column"  spacing={3}>
            <Typography variant="subtitle1">D.O.B: </Typography>
            <TextField size="small" variant="outlined" fullWidth name={"dob"} value={studentDob.value} onChange={setDetails}/>
            {studentDob.error && <Typography variant={"caption"}>Enter Dob</Typography>}
            
            </Stack>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
            <Stack direction="column"  spacing={3}>
            <Typography variant="subtitle1">Gender: </Typography>
            <TextField size="small" variant="outlined" name="gender" fullWidth value={studentGender.value} onChange={setDetails}/>
            {studentGender.error && <Typography variant={"caption"}>Enter Gender</Typography>}
            
            </Stack>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
            <Stack direction="column"  spacing={3}>
            <Typography variant="subtitle1">Email: </Typography>
            <TextField size="small" variant="outlined"  name="email" fullWidth value={studentEmail.value} onChange={setDetails}/>
            {studentEmail.error && <Typography variant={"caption"}>Enter Email</Typography>}
            
            </Stack>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
            <Stack direction="column"  spacing={3}>
            <Typography variant="subtitle1">Address: </Typography>
            <TextareaAutosize   name="address"   minRows={5}  value={studentAddress.value} onChange={setDetails}/>
            {studentAddress.error && <Typography variant={"caption"}>Enter Address</Typography>}
           
            </Stack>
        </Grid>
        <Grid item>
            <Stack direction={"column"}  spacing={3}>
                <Typography variant="subtitle1">Student_Pic: </Typography>
                <Button disableElevation component={'label'}>
                    {compressedFile ? (<Image alt="compressImage" src={compressedFile} height={140} width={140} className={Styles.profilePic}/>) : <Typography>Student Image</Typography>}
                <input hidden accept=".jpg, .png, .jpeg" type="file" onChange={(event : any) => handleCompressedUpload(event)}/>
                </Button>
                </Stack>
        </Grid>
<Grid item xs={12} md={12} lg={12} xl={12}>
    <Stack direction="column">
    <Button variant="contained" sx={{width:"10%", textTransform:"none"}} size="medium" onClick={onClickSubmit}>Update</Button>
    </Stack>
</Grid>
</Grid>
</Box>
  )
}


 

export default SchoolStudentEditProfile





