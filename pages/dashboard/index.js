import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Layout from '../../components/Layout'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Pagination, Stack, Menu, MenuItem, IconButton } from "@mui/material"
import { useContext, useEffect } from 'react'
import { accountModal } from '../../context/accountModal'
import AccountModal from '../../components/AccountModal'
import { useRouter } from 'next/router'

export default function Home() {

    const { setIsModalVisible } = useContext(accountModal)

    const router = useRouter()

    useEffect(()=>{
        router.push('/dashboard/unassigned')
    })

    return (
        <></>
    )
}

Home.Layout = Layout;