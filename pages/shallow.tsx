import React from 'react'
import ShallowPage from '../components/shallowPage'
import axios, { AxiosResponse } from 'axios';
import { NextPage } from 'next';
const Shallow:NextPage = (props: any) => {
    console.log("props...", props);
    
  return (
    <>
    <div>shallow</div>
    <ShallowPage usersList={props}/>
    </>
  )
}

export default Shallow

export const getServerSideProps = async() => {
    let response:any={usersData:{}}
    await axios.get("https://jsonPlaceholder.typicode.com/users").then((res:AxiosResponse) => {
        console.log("res++++++++++",res.data),
        response.usersData=res.data
        console.log("responseObj",response)
    })
    // await axios.get("https://jsonPlaceholder.typicode.com/users").then((res) =>{
    //     response = res.data.data 
        
    // } )

return{
    props:
        response
}

}