import React from 'react';
import { useFormik } from 'formik';
import { isEmpty } from './utils/helpers';
import { useRouter } from 'next/router';
import { LoginRequest, UserProfileRequest, getUsersRequest, createAccountNumberRequest } from './pages/api/apicalls';
import { useContext } from 'react';
import { adminContext } from './context/adminContext';
import { afterSometime } from './utils/helpers';
import { toast } from 'react-toastify';


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
                        toast(response.message, { hideProgressBar: true, autoClose: 2000, type: 'error' })
                    }
                    else {
                        setToken(response.data)
                        localStorage.setItem('token', response.data.token)
                        toast(response.message, { hideProgressBar: true, autoClose: 2000, type: 'success' })
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
            if (values.account_number.length <= 9 ) errors.account_number = "Please enter a valid account number"

            return errors
        },
        onSubmit: async (values) => {
            try {
                await createAccountNumberRequest(values).then(response => {
                    if (response.error === true) {
                        console.log(response)
                        toast(response.message, { hideProgressBar: true, autoClose: 2000, type: 'error' })
                    }
                    else {
                        toast(response.message, { hideProgressBar: true, autoClose: 2000, type: 'success' })
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