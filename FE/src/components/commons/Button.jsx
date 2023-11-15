import React from 'react';
import clsx from 'clsx';
import {twMerge} from 'tailwind-merge';

const Button = ({children, className, handleClick, type = 'button'}) => {
  return (
    <button type={type} onClick={handleClick} className={twMerge(clsx("py-3 px-4 text-white bg-main-700 rounded-md", className))}>
      {children}
    </button>
  )
}

export default Button