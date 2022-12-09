import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Layout from '../../components/Layout'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Pagination, Stack, Menu, MenuItem, IconButton } from "@mui/material"
import { useContext } from 'react'
import { accountModal } from '../../context/accountModal'
import AccountModal from '../../components/AccountModal'

export default function Home() {

    const { setIsModalVisible } = useContext(accountModal)

    return (
        <>
            <h1 className='text-lg md:text-xl lg:text-2xl font-bold'>Users Without account number</h1>

            <div className='mt-10'>
                <TableContainer>
                    <Table aria-label="simple table">
                        <TableHead sx={{ position: 'sticky', background: '#F3F2F0', }}>
                            <TableRow className=' text-sm lg:text-base' sx={{ '&:last-child td, &:last-child th': { border: 0, color: '#F4A85D', padding: { lg: '10px 40px'}, fontWeight: 'bold' } }}>
                                <TableCell className=' p-5' align='left'>S/n</TableCell>
                                <TableCell align="left">Customer Name</TableCell>
                                <TableCell align="left">Phone Number</TableCell>
                                <TableCell align="right">Option</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0, padding: { lg: '15px 40px'}, fontSize: { xxs: '12px', md: '14px'}, color: '#1A324C' } }} >
                                <TableCell className='p-5' align='left'>1</TableCell>
                                <TableCell align="left">Collins Ovie Vincent</TableCell>
                                <TableCell align="left">09087654312</TableCell>
                                <TableCell align="right"><button className='bg-border rounded p-2' onClick={()=>setIsModalVisible(true)}>Assign account number</button></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

            <AccountModal/>
        </>
    )
}

Home.Layout = Layout;