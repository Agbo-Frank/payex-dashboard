import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Layout from '../../components/Layout'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Pagination, Stack, Menu, MenuItem, IconButton } from "@mui/material"
import { useContext, useEffect, useState } from 'react'
import { accountModal } from '../../context/accountModal'
import AccountModal from '../../components/AccountModal'
import { getUsersService } from '../services'
import { capitalize } from '../../utils/helpers'

export default function Unassigned() {

    const { setIsModalVisible } = useContext(accountModal)
    const [users, setUsers] = useState(null)

    const [userDetail, setUserDetail] = useState(null)

    var has_account = 0;

    const getAccessToken = () => {
        if (typeof window !== 'undefined')
            return localStorage.getItem('token');
    };

    const token = getAccessToken()

    useEffect(() => {
        getUsersService(has_account, token).then(response => {
            if (response.status == '200') {
                setUsers(response.data)
            }
        })
    }, [])

    const handleOpenModal = (user) => {
        setIsModalVisible(true)
        setUserDetail(user)
        localStorage.setItem('uuid', user.uuid)
    }

    console.log(users)

    return (
        <>
            <h1 className='text-lg md:text-xl lg:text-2xl font-bold'>Users Without account number</h1>

            <div className='mt-10'>
                {
                    users ?
                        <TableContainer>
                            <Table aria-label="simple table">
                                <TableHead sx={{ position: 'sticky', background: '#F3F2F0', }}>
                                    <TableRow className=' text-sm lg:text-base' sx={{ '&:last-child td, &:last-child th': { border: 0, color: '#F4A85D', padding: { lg: '10px 20px' }, fontWeight: 'bold' } }}>
                                        <TableCell className=' p-5' align='left'>S/n</TableCell>
                                        <TableCell align="left">Customer Name</TableCell>
                                        <TableCell align="left">Phone Number</TableCell>
                                        <TableCell align="right">Option</TableCell>
                                    </TableRow>
                                </TableHead>
                                {
                                    users.data.length > 0 ?
                                        <TableBody>
                                            {
                                                users.data.map((user, idx) => {
                                                    return (
                                                        <TableRow key={user.uuid} sx={{ 'td, th': { border: 'none', borderBottom: 0, padding: { md: '10px', lg: '10px 20px', xl: '0 0' }, fontSize: { xxs: '12px', md: '14px' }, color: '#1A324C' } }} >
                                                            <TableCell className='p-5' align='left'>{idx + 1}</TableCell>
                                                            <TableCell align="left">{capitalize(user.first_name) + " " + capitalize(user.last_name)}</TableCell>
                                                            <TableCell align="left">{user.phone_number}</TableCell>
                                                            <TableCell sx={{}} align="right"><button className='bg-border rounded p-2' onClick={() => handleOpenModal(user)}>Assign account number</button></TableCell>
                                                        </TableRow>
                                                    )
                                                })
                                            }
                                        </TableBody>
                                        :
                                        <p className='mt-3 italic'>No users without account</p>
                                }
                            </Table>
                        </TableContainer>
                        :
                        <div>Loading...</div>
                }
            </div>
            <AccountModal userDetail={userDetail} />

        </>
    )
}

Unassigned.Layout = Layout;