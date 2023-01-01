import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"


export function SelectInput ({ label, data, name, color = 'dark', onChange, formik, placeholder }){

    console.log(data)
    return(
        <div className="relative w-full">
            <span className={`${color === 'light' && 'text-white'} text-sm`}>{ label }</span>
            <div 
            className={`flex justify-between bg-transparent items-center rounded-lg border border-solid ${formik.touched[name] && formik.errors[name] ? 'border-error' : 'border-[#cacaca]'} py-[10px] px-3  text-sm`}>
                <select 
                    name={name}
                    {...formik.getFieldProps(name)}
                    className="w-full bg-transparent">
                    <option value="" disabled>{label || placeholder}</option>
                    {
                        data?.map((data, idx) => (
                            <option value={data} key={idx}>{data}</option>
                        ))
                    }
                </select>
            </div>
            {
                formik.touched[name] && formik.errors[name] ?
                <p className={`text-error text-xs px-2 py-0 bg-transparent`}>
                    {formik.errors[name]}
                </p>:
                null
            }
        </div>
    )
  }

export default SelectInput