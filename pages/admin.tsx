import { Box } from '@mui/material';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

const Admin: NextPage = () => {
    const AdminPage = dynamic<any>(() => import('../components/Admin/Admin'));
    return (
        <Box component={'div'}>
            <AdminPage />
        </Box>
    )
}

export default Admin;