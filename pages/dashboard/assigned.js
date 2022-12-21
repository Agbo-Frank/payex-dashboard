import Layout from "../../components/Layout";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Pagination, Stack, Menu, MenuItem, IconButton } from "@mui/material"
import { useEffect, useState } from "react";
import { capitalize } from "../../utils/helpers";
import { getUsersService } from "../services";

export default function Assigned() {

    const [users, setUsers] = useState(null)

    var has_account = 1;

    const getAccessToken = () => {
        if (typeof window !== 'undefined')
            return localStorage.getItem('token');
    };

    const token = getAccessToken()

    useEffect(() => {
        getUsersService(has_account, token).then(response => {
            if (response.status == '200') {
                setUsers(response.data)
                console.log(response.data)
            }
        })
    }, [])

    return (
        <>
            <h1 className='text-lg md:text-xl lg:text-2xl font-bold'>Users With account number</h1>

            <div className='mt-10'>
                {
                    users ?
                        <TableContainer>
                            <Table aria-label="simple table">
                                <TableHead sx={{ position: 'sticky', background: '#F3F2F0', }}>
                                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0, color: '#F4A85D', padding: { lg: '10px 20px' }, fontWeight: 'bold' } }}>
                                        <TableCell align='left'>S/n</TableCell>
                                        <TableCell align="left">Customer Name</TableCell>
                                        <TableCell align="left">Phone Number</TableCell>
                                        <TableCell align="center">Account Number</TableCell>
                                    </TableRow>
                                </TableHead>
                                {
                                    users.data.length > 0 ?
                                        <TableBody>
                                            {
                                                users.data.map((user, idx) => {
                                                    return (
                                                        <TableRow key={user.uuid} sx={{ ' td, th': { border: 'none', borderBottom: 0, padding: { md: '10px', lg: '10px 20px' }, color: '#1A324C' } }}>
                                                            <TableCell align='left'>{idx + 1}</TableCell>
                                                            <TableCell align="left">{capitalize(user.first_name) + " " + capitalize(user.last_name)}</TableCell>
                                                            <TableCell align="left">{user.phone_number}</TableCell>
                                                            <TableCell align="center">{user.wallet.account_number}</TableCell>
                                                        </TableRow>
                                                    )
                                                })
                                            }
                                        </TableBody>
                                        :
                                        <p className="mt-3 italic">No Users With Account Number</p>
                                }
                            </Table>
                        </TableContainer>
                        :
                        <p>Loading</p>
                }
            </div>
        </>
    )
}

Assigned.Layout = Layout;