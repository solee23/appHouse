import clsx from 'clsx'
import React, { useState } from 'react'

const Login = () => {
  const [variant, setVariant] = useState('LOGIN')
  return (
    <div className="bg-white text-lg rounded-md px-6 py-12 w-[500px] flex items-center flex-col gap-6"
      onClick={(e) => e.stopPropagation()}>
      <h1 className="text-5xl font-raleway tracking-tight">Vui lòng đăng nhập...</h1>
      <div className="flex w-full justify-normal gap-6 border-b">
        <span className={clsx(variant === 'LOGIN' && 'border-b-4 border-main-700', 'cursor-pointer')}
          onClick={() => setVariant('LOGIN')}
        >Đăng nhập</span>
        <span className={clsx(variant === 'REGISTER' && 'border-b-4  border-main-700', 'cursor-pointer')}
          onClick={() => setVariant('REGISTER')}
        >Tạo tài khoản</span>
      </div>
    </div>
  )
}

export default Login