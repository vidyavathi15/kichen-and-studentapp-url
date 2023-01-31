

import React, { useState } from 'react'
import { Stack, AppBar, Box, Toolbar, IconButton, Typography, Button, Drawer, ListItemButton, List, ListItemIcon, ListItemText, ListItem, Divider } from '@mui/material'
import MenuIcon from "@mui/icons-material/Menu"
import MailIcon from "@mui/icons-material/Mail"
import InboxIcon from "@mui/icons-material/Inbox"
import { useRouter } from 'next/router' 
import StudentsListPage from './studentsListPage'

const SchoolMgmtPage = () => {
    const router = useRouter()

    const [isOpen, setIsOpen] = useState<any>(false)



    const toggleDrawer = () => {
        setIsOpen(!isOpen)

    }




    //   const list = (anchor: any) => (
    //     <Box
    //       sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
    //       role="presentation"
    //       onClick={toggleDrawer()}
    //       onKeyDown={toggleDrawer()}
    //     >


    //     </Box>
    //       )
    //     }

    const onClickItem = () => {
        router.push("/schoolMgmt")

    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon onClick={toggleDrawer} />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        School Management
                    </Typography>
                    <Button color="inherit">Admin</Button>
                    <Button color="inherit">Logout</Button>
                </Toolbar>
            </AppBar>
            <Stack>


                <Drawer

                    open={isOpen}
                    onClose={toggleDrawer}
                >
                    <List>
                        {['School', "Attendance", 'Teacher', 'Student', 'Parent', 'Results', 'Settings'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} onClick={onClickItem} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>


                </Drawer>


            </Stack>
            <Stack m={5}>

            <StudentsListPage />
            </Stack>
            
        </Box>
    )
}


export default SchoolMgmtPage
