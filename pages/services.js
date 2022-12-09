import { useFormik } from 'formik';
import { isEmpty } from '../utils/helpers';
import { useRouter } from 'next/router';


export const LoginService = () => {

    const router = useRouter()

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
            alert('success')
            router.push('/dashboard')

            console.log(router, 'dsdsd')
        },
    });
}