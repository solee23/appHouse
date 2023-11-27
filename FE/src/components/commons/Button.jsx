import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ImSpinner2 } from "react-icons/im";

const Button = ({ children, className, handleClick, type = 'button', disabled }) => {
  return (
    <button 
    type={type} 
    onClick={handleClick} 
    className={twMerge(clsx("py-3 px-4 text-white bg-main-700 rounded-md flex justify-center items-center gap-3",className))}
    disabled = {disabled}
    >
     {disabled &&  <span className='animate-spin'>
        <ImSpinner2 />
      </span>}
      {children}
    </button>
  )
}

export default Button