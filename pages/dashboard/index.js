import Layout from '../../components/Layout'
import { useContext, useEffect } from 'react'
import { accountModal } from '../../context/accountModal'
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