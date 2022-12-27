import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Logo } from '../assets/icons'
import FormInput from '../components/FormInput'
import { LoginService } from '../services'
import { Button } from '@mui/material'

export default function Login() {

    const formik = LoginService()

    const submit = (e) => {
        e.preventDefault()
        formik.handleSubmit();
    }

    // const notify = () => toast("Wow so easy!");

    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            <div className='bg-dark w-full h-screen flex items-center justify-center'>
                <div className='bg-white rounded w-10/12 md:w-3/5 lg:w-1/2 xl:w-2/5 p-5 md:p-10 lg:p-20'>
                    <Logo />

                    <h1 className='my-10 text-xl xl:text-2xl font-bold text-dark text-center'>Login</h1>

                    <form action='' onSubmit={submit}>
                        <FormInput name="email" label="" placeholder="Email address" formik={formik} type="email" color="dark" />
                        <FormInput name="password" label="" placeholder="Password" formik={formik} type="password" color="dark" />

                        <Button variant='contained' fullWidth
                            sx={{
                                background: '#12131E!important', color: 'white', padding: '10px 0',
                                marginTop: '20px', ':hover': { bgcolor: '#12131E', color: 'white' },
                            }}
                            type='submit'>Login</Button>
                    </form>

                    {/* <button onClick={notify} className='bg-red-300 mt-5'>Notify!</button> */}
                </div>
            </div>
        </>
    )
}
