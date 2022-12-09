import Layout from "../../components/Layout";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Pagination, Stack, Menu, MenuItem, IconButton } from "@mui/material"

export default function Assigned() {
    return (
        <>
            <h1 className='text-lg md:text-xl lg:text-2xl font-bold'>Users Without account number</h1>

            <div className='mt-10'>
                <TableContainer>
                    <Table aria-label="simple table">
                        <TableHead sx={{ position: 'sticky', background: '#F3F2F0', }}>
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0, color: '#F4A85D', padding: { lg: '10px 40px'}, fontWeight: 'bold' } }}>
                                <TableCell align='left'>S/n</TableCell>
                                <TableCell align="left">Customer Name</TableCell>
                                <TableCell align="left">Phone Number</TableCell>
                                <TableCell align="center">Account Number</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0, padding: { lg: '15px 40px'}, color: '#1A324C' } }}>
                                <TableCell align='left'>1</TableCell>
                                <TableCell align="left">Collins Ovie Vincent</TableCell>
                                <TableCell align="left">09087654312</TableCell>
                                <TableCell align="center">0087654312</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    )
}

Assigned.Layout = Layout;