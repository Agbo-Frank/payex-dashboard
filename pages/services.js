import React from 'react';
import { useFormik } from 'formik';
import { isEmpty } from '../utils/helpers';
import { useRouter } from 'next/router';
import { LoginRequest, UserProfileRequest, getUsersRequest, createAccountNumberRequest } from './api/apicalls';
import { useContext } from 'react';
import { adminContext } from '../context/adminContext';
import { afterSometime } from '../utils/helpers';
// import toast from 'react-toastify'


export const LoginService = () => {

    const router = useRouter()
    const { setToken } = useContext(adminContext)

    return useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validateOnChange: false,
        validate: (values) => {
            const errors = {};

            if (isEmpty(values.email) == false) errors.email = "First name is required"
            if (isEmpty(values.password) == false) errors.password = "Last name is required"

            return errors
        },
        onSubmit: async (values) => {
            try {
                await LoginRequest(values).then(response => {
                    if (response.error === true) {
                        console.log(response)
                        // toast('Toast is good')
                    }
                    else {
                        console.log(response, 'we are here')
                        setToken(response.data)
                        localStorage.setItem('token', response.data.token)
                        router.push('/dashboard')
                    }
                })

            } catch (error) {
                console.log(error)
            }
        },
    });
}

export const UserProfileService = async (token) => {
    return await UserProfileRequest(token)
        .then(response => {
            if (response.error === true) {
                console.log(response)
            }
            return response
        }).catch(error => { return error })
}

export const getUsersService = async (has_account, token) => {
    return await getUsersRequest(has_account, token)
        .then(response => {
            if (response.error === true) {
                console.log(response)
            }
            return response
        }).catch(error => { return error })
}

export const createAccountNumberService = () => {

    const Router = useRouter()

    return useFormik({
        initialValues: {
            account_number: "",
        },
        validateOnChange: false,
        validate: (values) => {
            const errors = {};

            if (isEmpty(values.account_number) == false) errors.account_number = "Account Number is required"

            return errors
        },
        onSubmit: async (values) => {
            try {
                await createAccountNumberRequest(values).then(response => {
                    if (response.error === true) {
                        console.log(response)
                    }
                    else {
                        console.log(response, 'we are here in account')
                        afterSometime(()=>{
                            Router.reload(window.location.pathname)
                        },3000)
                    }
                })

            } catch (error) {
                console.log(error)
            }
        },
    });
}