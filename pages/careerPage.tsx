

import React from 'react'
import JsonData from ".././pages/blog/file.json"
import { Table, TableHead, TableCell, TableBody, TableRow, } from "@mui/material"
import Image from "next/image";


const CareerPage = () => {
    const arry = JsonData
    console.log("array", arry);

    return (
        <Table>
            <TableHead>
                <TableRow sx={{fontWeight:"bold"}}>
                    <TableCell>
                        Id
                        
                    </TableCell>
                    <TableCell>
                    Name
                    </TableCell>
                    <TableCell>
                        Date
                    </TableCell>
                    <TableCell>
                        Url
                        
                    </TableCell>
                    <TableCell>
                        Event
                    </TableCell>

                </TableRow>
                </TableHead>
                <TableBody>
                    {arry.map((each: any, index: any) => (
                        <>
                       
                        <TableRow key={index}>
                             <TableCell>
                                {each.actor.id}


                            </TableCell>
                            <TableCell>
                                {each.actor.login}


                            </TableCell>
                            <TableCell>
                                {each.created_at}


                            </TableCell>
                            <TableCell>
                                {each.actor.avatar_url}




                            </TableCell>




                        </TableRow>
                        </>


                    ))}
                




                </TableBody>


            


        </Table>

    )
}


export default CareerPage