<<<<<<< Updated upstream
import { Box, Button, IconButton, Stack, TextField, Typography } from "@mui/material";
import { DeleteForeverTwoTone, ModeEditOutlineTwoTone, Visibility } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import MUIDataTable, { MUIDataTableColumnDef, MUIDataTableMeta, MUIDataTableOptions } from "mui-datatables";
import CustomStatusButtons from "../../../../src/Components/Common/customStatusButtons";
import AdminDashboardLayout from "../../../../src/Components/MaintainerDashboard/layout/AdminDashboardLayout";
import { CarrersStyles } from "../../../../src/Components/MaintainerDashboard/Styles/carrersStyles";
import { carrersHeaderLabels } from "../../../../src/Strings/websiteStrings";

const CareerSettings = () => {
    const Styles = CarrersStyles();
    const data = [
        { s_no: 1, role: "IOS Developer", employmentType: "Fulltime", experience: "2 Years", location: "Hydearbad", status: "Active", },
        { s_no: 2, role: "Android Developer", employmentType: "Fulltime", experience: "1 Years", location: "Hydearbad/Madhapur", status: "Inactive", },
        { s_no: 3, role: "UUIX Developer", employmentType: "Fulltime", experience: "2 Years", location: "Hydearbad", status: "Draft", },
        { s_no: 4, role: "Python Developer", employmentType: "Fulltime", experience: "1 Years", location: "Hydearbad/Madhapur", status: "Draft", },
        { s_no: 5, role: "Java Developer", employmentType: "Fulltime", experience: "2 Years", location: "Hydearbad", status: "Draft", },
        { s_no: 6, role: "Testing", employmentType: "Fulltime", experience: "2 Years", location: "Hydearbad/Madhapur", status: "Draft", },
        { s_no: 7, role: "React Developer", employmentType: "Fulltime", experience: "1 Years", location: "Hydearbad", status: "Active", },
        { s_no: 8, role: "Devops ", employmentType: "Fulltime", experience: "2 Years", location: "Hydearbad/Madhapur", status: "Draft", },
    ];

    const getActions = (value: any, tableMeta: MUIDataTableMeta) => {
        return (
            <Stack direction={"row"} spacing={2.5} className={Styles.actionIconButtons}>
                <IconButton size="small"><Visibility fontSize='medium' /></IconButton>
                <IconButton size="small"><ModeEditOutlineTwoTone fontSize='medium' /></IconButton>
                <IconButton size="small"><DeleteForeverTwoTone fontSize='medium' /></IconButton>
            </Stack>
        )
    }

    const options: MUIDataTableOptions = {
        filterType: 'dropdown',
        filter: false,
        download: false,
        print: false,
        viewColumns: false,
        search: false,
        textLabels: {
            pagination: { rowsPerPage: "Carrers Per Page" },
            body: {
                toolTip: "sort",
            },
        },
        sort: true,
        rowsPerPageOptions: [10, 15, 20],
        selectableRows: "none",
        serverSide: false,
    };

    const columns: MUIDataTableColumnDef[] = [
        { name: "s_no", label: carrersHeaderLabels.S_No, options: { filter: true, sort: true, sortThirdClickReset: true } },
        { name: "role", label: carrersHeaderLabels.Role, options: { filter: true, sort: true, sortThirdClickReset: true } },
        { name: "employmentType", label: carrersHeaderLabels.Employement_Type, options: { filter: true, sort: true, sortThirdClickReset: true } },
        { name: "experience", label: carrersHeaderLabels.Experience, options: { filter: true, sort: true, sortThirdClickReset: true } },
        { name: "location", label: carrersHeaderLabels.Location, options: { filter: true, sort: true, sortThirdClickReset: true } },
        {
            name: "status", label: carrersHeaderLabels.Status, options: {
                filter: true, sort: true, sortThirdClickReset: true, customBodyRender(value) {
                    return (<CustomStatusButtons value={value.toLowerCase()} isIcons={false} />)
                },
            }
        },
        { name: "actions", label: carrersHeaderLabels.Action, options: { filter: true, sort: true, sortThirdClickReset: true, customBodyRender: getActions } },
    ];
    return (
        <AdminDashboardLayout>
            <Box>
                <Typography variant="h6" gutterBottom className={Styles.careerTitle}>
                    Career
                </Typography>
                <Stack direction={"row"} spacing={2} className={Styles.carrerSubHeaderContainer}>
                    <TextField
                        fullWidth
                        size="small"
                        placeholder="Search for companies"
                        InputProps={{
                            startAdornment: (
                                <IconButton>
                                    <SearchIcon />
                                </IconButton>
                            ),
                        }}
                    />
                    <Button variant="contained" startIcon={<AddIcon />} disableElevation>Add Role</Button>
                </Stack>
                <Box className={Styles.dataTables}>
                    <MUIDataTable
                        data={data}
                        title={undefined}
                        columns={columns}
                        options={options}
                    />
                </Box>
            </Box>
        </AdminDashboardLayout>
    );
}

export default CareerSettings;
=======
import React from "react";
import {
  Box,
  Stack,
  Typography,
  IconButton,
  InputAdornment,
  TextField,
  Button,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import { CareerSettingsStyles } from "./careersettings.styles";
import AdminDashboardLayout from "../../../../src/Components/MaintainerDashboard/layout/AdminDashboardLayout";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
function CareerSettings() {
  const styles = CareerSettingsStyles();
  const items = [
    {
      id: 1,
      role: "IOS Developer",
      employmentType: "Fulltime",
      experience: "2 Years",
      location: "Hydearbad",
      status: "Active",
    },
    {
      id: 2,
      role: "Android Developer",
      employmentType: "Fulltime",
      experience: "1 Years",
      location: "Hydearbad/Madhapur",
      status: "Inactive",
    },
    {
      id: 3,
      role: "UUIX Developer",
      employmentType: "Fulltime",
      experience: "2 Years",
      location: "Hydearbad",
      status: "Draft",
    },
    {
      id: 4,
      role: "Python Developer",
      employmentType: "Fulltime",
      experience: "1 Years",
      location: "Hydearbad/Madhapur",
      status: "Draft",
    },
    {
      id: 5,
      role: "Java Developer",
      employmentType: "Fulltime",
      experience: "2 Years",
      location: "Hydearbad",
      status: "Draft",
    },
    {
      id: 6,
      role: "Testing",
      employmentType: "Fulltime",
      experience: "2 Years",
      location: "Hydearbad/Madhapur",
      status: "Draft",
    },
    {
      id: 7,
      role: "React Developer",
      employmentType: "Fulltime",
      experience: "1 Years",
      location: "Hydearbad",
      status: "Active",
    },
    {
      id: 8,
      role: "Devops ",
      employmentType: "Fulltime",
      experience: "2 Years",
      location: "Hydearbad/Madhapur",
      status: "Draft",
    },
  ];
  const headerNames = [
    "S.No",
    "Role",
    "Employment type",
    "Experience",
    "Location",
    "Status",
    "Action",
  ];
  return (
    <AdminDashboardLayout>
      <Box>
        <Typography
          variant="h6"
          gutterBottom
          className={styles.careerTitle}
          alignItems={"center"}
        >
          Career
        </Typography>
        <Stack direction={"row"} justifyContent="space-between">
          <TextField
            className={styles.textField}
            size="small"
            placeholder="Search for companies"
            InputProps={{
              startAdornment: (
                <InputAdornment position={"start"}>
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            className={styles.addButton}
            variant="contained"
            startIcon={<AddIcon />}
            disableElevation
            disableRipple
            sx={{ textTransform: "capitalize" }}
          >
            Add Career
          </Button>
        </Stack>
        <Stack sx={{ mt: 2 }}>
          <TableContainer component={Box}>
            <Table>
              <TableHead>
                <TableRow>
                  {headerNames.map((each) => (
                    <TableCell className={styles.tableHeader}>{each}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {items.map((each, index) => (
                  <TableRow key={index}>
                    <TableCell className={styles.tabelCell}>
                      0{each.id}
                    </TableCell>
                    <TableCell className={styles.tabelCell}>
                      {each.role}
                    </TableCell>
                    <TableCell className={styles.tabelCell}>
                      {each.employmentType}
                    </TableCell>
                    <TableCell className={styles.tabelCell}>
                      {each.experience}
                    </TableCell>
                    <TableCell className={styles.tabelCell}>
                      {each.location}
                    </TableCell>
                    <TableCell>
                      <Button
                        className={styles.statusButton}
                        sx={{
                          textTransform: "capitalize",
                          backgroundColor:
                            each.status === "Active"
                              ? "#ECFFEE"
                              : each.status === "Inactive"
                              ? "FFEEEE"
                              : "",
                        }}
                      >
                        {each.status}
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Stack direction="row" spacing={4.5}>
                        <VisibilityIcon className={styles.removedEyeIcon} />
                        <EditIcon className={styles.editIcon} />
                        <DeleteOutlineIcon className={styles.deleteIcon} />
                      </Stack>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Stack>
      </Box>
    </AdminDashboardLayout>
  );
}

export default CareerSettings;
>>>>>>> Stashed changes
