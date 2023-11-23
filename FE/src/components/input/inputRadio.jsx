import clsx from 'clsx'
import React from 'react'
import { twMerge } from 'tailwind-merge'

const inputRaido = ({ style = 'form-radio', containerClassname, label, id, type = 'radio', register, errors = {}, inputClassname, validate, placeholder, options = [] }) => {
    return (
        <div className={twMerge(clsx('flex flex-col gap-2 ', containerClassname))}>
            {label && <label className="font-medium text-main-700" htmlFor={id} >{label}</label>}
            {options.map(el => (
                <div key={el.value} className='flex items-center gap-2 cursor-pointer'>
                    <input type={type} name={id} id={el.value} value={el.value} className={twMerge(clsx(type, 'placeholder:text-sm', inputClassname))} {...register(id, validate)} placeholder={placeholder} />
                    <label className="cursor-pointer" htmlFor={el.value} >{el.label}</label>
                </div>
            ))}
            {errors[id] && <small className="text-red-600">{errors[id]?.message}</small>}
        </div>
    )
}

export default inputRaido