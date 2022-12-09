import React, { useState } from 'react'
import PropTypes from 'prop-types'

const FormInput = ({ name, label, placeholder, formik, type, color = 'dark', naira = false, disable = false }) => {
    let [password, setPassword] = useState('password')
    let [seePassword, setSeePassword] = useState(false)

    console.log(name)

    return (
        <div className="relative w-full my-3">
            <span className={`${color === 'light' ? 'text-white' : 'text-primary-400'} text-sm`}>{label}</span>
            <div
                className={`flex justify-between bg-grey-100 items-center rounded-md border border-dark ${formik.touched[name] && formik.errors[name] ? 'border-error' : 'border-[#cacaca]'} py-1 px-3 my-1 text-sm`}>
                {naira && <p className='mr-1'>₦ </p>}
                <input
                    type={type === 'password' ? password : type}
                    name={name}
                    placeholder={placeholder}
                    className="w-full text-sm bg-grey-100 bg-white text-dark placeholder:text-grey-50 placeholder:font-light py-2 focus:outline-none"
                    {...formik.getFieldProps(name)}
                    disabled={disable}
                />
                {
                    type === 'password' &&
                    <div onClick={() => {
                        setPassword(state => {
                            if (state === 'password') {
                                return 'text'
                            }
                            else {
                                return 'password'
                            }
                        })
                        setSeePassword(state => !state)
                    }}>
                        {
                            seePassword ?
                                <i className="fa fa-eye" style={{
                                    color: formik.touched[name] && formik.errors[name] ? '#FF5000' : '#78797A', cursor: 'pointer'
                                }}></i> :
                                <i className="fa fa-eye-slash" style={{
                                    color: formik.touched[name] && formik.errors[name] ? '#FF5000' : '#78797A', cursor: 'pointer'
                                }}></i>
                        }
                    </div>
                }
            </div>
            {
                formik.touched[name] && formik.errors[name] ?
                    <p className={`text-red-400 text-xs px-2 py-0 bg-transparent`}>
                        {formik.errors[name]}
                    </p> :
                    null
            }
        </div>
    )
}


export function FormInputWithNoFormik({ name, label, placeholder, type, color = 'dark', naira = false, disable = false }) {
    return (
        <div className="relative w-full">
            <span className={`${color === 'light' && 'text-white'} text-sm`}>{label}</span>
            <div
                className={`flex justify-between bg-grey-100 items-center rounded-lg border-none border-[#cacaca] py-2 px-3  text-sm`}>
                {naira && <p className='mr-1'>₦ </p>}
                <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    className="w-full bg-grey-100 text-sm py-2"
                    disabled={disable}
                />
            </div>
        </div>
    )
}

// FormInput.prototype = {
//     name: PropTypes.string.isRequired,
//     label: PropTypes.string.isRequired,
//     placeholder: PropTypes.string.isRequired,
//     formik: PropTypes.any.isRequired,
//     type: PropTypes.oneOf(['text', 'password']),
//     color: PropTypes.oneOf(['light', 'dark'])
// }

export default FormInput