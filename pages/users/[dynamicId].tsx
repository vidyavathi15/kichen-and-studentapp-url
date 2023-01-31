

import React from 'react'
import { usersList } from '../../components/data'

 const DynamicComponentAPI = ({dynamicData}: any) => {
    
  return (




    <>
    {/* {
        dynamicList.map(each => (
            <div>
                {each.id}. {each.text}
            </div>
        ))
    } */}
    <div>
        {dynamicData.id} {dynamicData.text}
    </div>

    </>
    
  )
}


export default  DynamicComponentAPI

export const getStaticProps = (context: any) => {
    const {dynamicId} = context.params  
    const list1 =   usersList.find((each: any) => {
        if (each.id === parseInt(dynamicId)){
            return each
        }
    })
    return{
        props:{
            dynamicData: list1
        }
    }




}


export  const getStaticPaths = () =>{
    return{
       paths: [
            {params: {
                dynamicId: "1"},
               
            },
            {params: {
                dynamicId: "2"},
               
            },
            {params: {
                dynamicId: "3"},
               
            }, 
        ],
        fallback: false

    }



} 
