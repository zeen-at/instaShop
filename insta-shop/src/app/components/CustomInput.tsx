import React from 'react'
import { ICustomInput } from '../types'

const CustomInput = ({value, type, name, placeholder, handleChange}: ICustomInput) => {
  return (
    <div className='w-full border border-[#00000033] rounded-[12px] py-[10px] px-[4px]'>
        <input value={value} onChange={handleChange} type={type ? type : "text" } name={name} placeholder={placeholder} className="w-full px-[4px] text-[14px] text-[#00000099] outline-none" />
    </div>
  )
}

export default CustomInput