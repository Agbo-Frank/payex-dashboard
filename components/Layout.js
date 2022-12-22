import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Logo, UsersIcon, LogOutIcon } from '../assets/icons'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { UserProfileService } from '../pages/services'
import { capitalize } from '../utils/helpers'

const routeLinks = [
    { title: 'Unassigned Users', path: '/dashboard/unassigned' },
    { title: 'Assigned Users', path: '/dashboard/assigned' },
]


export default function Layout({ children }) {

    const router = useRouter()

    const [menu, setMenu] = useState(false)
    const [userProfile, setUserProfile] = useState(null)
    // const {token} = useContext(adminContext)

    const getAccessToken = () => {
        if (typeof window !== 'undefined')
            return localStorage.getItem('token');
    };

    const token = getAccessToken()

    useEffect(() => {
        UserProfileService(token).then(response => {
            if (response.status == '200') {
                setUserProfile(response.data)
                console.log(response.data)
            }
        })
    }, [])

    const handleLogOut = () => {
        localStorage.removeItem('token')
        router.push('/')
    }
    
    return (
        <div className={styles.layout}>
            <div className={`side bg-dark h-screen fixed z-50 w-full md:w-1/4 lg:w-23 xl:w-1/5 2xl:w-w18 py-10 flex justify-center transition-all duration-500 ease-in-out ${menu ? 'translate-x-0 ' : '  translate-x-M100'} md:translate-x-0`}>
                <div className='text-white absolute right-6 top-5 text-lg font-bold cursor-pointer md:hidden' onClick={() => setMenu(false)}>X</div>
                <div className='flex flex-col justify-between'>
                    <div>
                        <Logo />

                        <div className='px-5'>
                            <ul>
                                {
                                    routeLinks && routeLinks.map((link, idx) => {
                                        return (
                                            <li key={idx}><Link href={link.path} className={`flex items-center text-sm lg:text-base p-2 my-5 ${router.pathname === link.path ? 'bg-white text-dark text-sm lg:text-base rounded-md' : 'bg-transparent text-white'}`}> <UsersIcon link={link.path} /> {link.title} </Link></li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>

                    <div className='flex items-center justify-center text-logout cursor-pointer ' onClick={() => handleLogOut()}>
                        <LogOutIcon /> Logout
                    </div>
                </div>
            </div>
            <div className='main '>
                <div className='bg-white py-5 px-5 md:px-20 flex  md:justify-end border-b-4 border-b-border fixed w-full'>
                    <div className='w-full flex justify-between items-center md:justify-end'>
                        <div className='flex items-center'>
                            <p className='bg-orange rounded-full text-center py-2 px-4 md:py-2 md:px-4 text-white font-bold'>{capitalize(userProfile?.email.charAt(0))}</p>
                            {
                                userProfile ?
                                    <div className='ml-3 md:text-center'>
                                        <h4 className='text-sm md:text-base'>{userProfile?.first_name} <span>{userProfile?.last_name}</span></h4>
                                        <p className='text-sm md:text-base'>{userProfile?.email}</p>
                                    </div>
                                    :
                                    null
                            }
                        </div>

                        <div className='md:hidden cursor-pointer' onClick={() => setMenu(true)}>menu</div>
                    </div>
                </div>
                <div className='md:ml-s25 lg:s23 xl:ml-s20 2xl:ml-s18 pt-32 px-3 md:px-10'>
                    {children}
                </div>
            </div>
        </div>
    )
}
