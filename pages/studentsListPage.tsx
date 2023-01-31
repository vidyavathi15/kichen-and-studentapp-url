

import React, { useState, useEffect } from 'react'
import { Box, Button, IconButton, Stack } from '@mui/material'
import MUIDataTable, { MUIDataTableColumnDef, MUIDataTableOptions, MUIDataTableState } from 'mui-datatables'
import axios, { AxiosHeaders, AxiosResponse } from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useRouter } from 'next/router';


const StudentsListPage = () => {
    const router = useRouter()
    const [allStudents, setAllStudents] = useState<any>([])

    useEffect(() => {
        getAllStudents()

    }, [])
    const getAllStudents = async () => {
        await axios.get("http://localhost:3000/api/users/getAllStudentsApi").then((res: AxiosResponse) => {
            if (res.status === 200) {
                console.log("allll", res.data.data)
                let list1 = res?.data?.data 
                const tempArray = list1  && list1.map((each: any, index:any) => ({
                    ...each, id: index + 1,
                    actions: renderActions(each)
                }))
                console.log("temp", tempArray)

                setAllStudents(tempArray)
            }
        })


    }
    const onClickView= () => {
        router.push("/studentViewPage")
    }
    const onClickEdit = (studentId: any) => {
        router.push({pathname: "/studentEditPage", query: {studentId : studentId} })
    }
    const onClickDelete= async (studentId: any) => {
        await axios.delete(`http://localhost:3000/api/users/deleteStudentById?id=${studentId}`)
        .then((res: AxiosResponse) => {
            if (res.status === 200){
               const newArry = allStudents.filter((each: any) => !each.student_id === studentId)
                setAllStudents(newArry)
            }
        })


    }
    const renderActions= (eachStudent:  any) => {
        console.log("value", eachStudent)

        return(
            <Stack direction="row" alignItems={"center"} spacing={5}>
                <IconButton onClick={onClickView}>
            <VisibilityIcon />
                </IconButton>
                <IconButton onClick={() =>onClickEdit(eachStudent.student_id)}>
                    <EditIcon />
                </IconButton>
                <IconButton onClick={() =>onClickDelete(eachStudent.student_id)}>
            <DeleteOutlineIcon />
            </IconButton>
            </Stack>
        )
    }
    const columns: MUIDataTableColumnDef[] = [
        { name: "id", label: "Id", options: { filter: true, sort: true, sortThirdClickReset: true} },
        { name: "student_name", label: "Name", options: { filter: true, sort: true, sortThirdClickReset: true } },
        { name: "student_email", label: "Email", options: { filter: true, sort: true, sortThirdClickReset: true } },
        { name: "student_gender", label: "Gender", options: { filter: true, sort: true, sortThirdClickReset: true} },
        { name: "actions", label: "Action", options: { filter: true, sort: true, sortThirdClickReset: true }},
    ]

    const options: MUIDataTableOptions = {
        filterType: 'dropdown',
        filter: false,
        download: false,
        print: false,
        search: false,
        viewColumns: false,
        textLabels: {
            pagination: { rowsPerPage: "Teams Per Page" },
            body: {
                toolTip: "sort",
            },
            toolbar: { search: "Search Team", filterTable: "Filter Team" }
        },
        sort: true,
        rowsPerPageOptions: [10, 15, 20],
        selectableRows: "none",
        serverSide: true,
    };
    const onClickAdd= () => {
        router.push("/schoolStudentProfile")
    }

    return (
        <Box>
            <Button variant="contained" disableElevation onClick={onClickAdd}>AddStudent</Button>
            <MUIDataTable title={undefined} columns={columns} options={options} data={allStudents} />



        </Box>
    )
}


export default StudentsListPage