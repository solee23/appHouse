import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { InputForm, InputRadio, Button } from '..'
import { useForm } from 'react-hook-form'
import {apiRegister} from '~/apis/auth'

const Login = () => {
  const [variant, setVariant] = useState('LOGIN');
  useEffect(() => {
    reset()
  }, [variant])
  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  const onSubmit = async(data) => {
    const response = await apiRegister(data)
    console.log(response);
  }
  return (
    <div className="bg-white text-lg  text-main-700 rounded-md px-6 py-8 w-[500px] flex flex-col items-center  gap-6"
      onClick={(e) => e.stopPropagation()}>
      <h1 className="text-5xl font-raleway tracking-tight">Tài khoản</h1>
      <div className="flex justify-start w-full gap-6 border-b">
        <span className={clsx(variant === 'LOGIN' && 'border-b-4 border-main-700', 'cursor-pointer')}
          onClick={() => setVariant('LOGIN')}>Đăng nhập</span>
        <span className={clsx(variant === 'REGISTER' && 'border-b-4  border-main-700', 'cursor-pointer')}
          onClick={() => setVariant('REGISTER')}>Đăng ký</span>
      </div>
      <form className=' w-full flex flex-col gap-4'>
        {variant === 'REGISTER' && <InputForm label='Tên' inputClassname="rounded-md" register={register} id='name' validate={{ required: 'Không được bỏ trống.' }} errors={errors} placeholder='Vui lòng nhập tên...' />}
        <InputForm label='Số điện thoại' inputClassname="rounded-md" register={register} id='phone' validate={{ required: 'Không được bỏ trống.' }} errors={errors} placeholder='Vui lòng nhập số điện thoại...' />
        <InputForm label='Mật khẩu' inputClassname="rounded-md" register={register} id='password' type='password' validate={{ required: 'Không được bỏ trống.' }} errors={errors} placeholder='Vui lòng nhập mật khẩu...' />
        {variant === 'REGISTER' && <InputRadio label='Loại tài khoản:' register={register} id='role' validate={{ required: 'Không được bỏ trống.' }} errors={errors} placeholder='Vui lòng chọn...' options={[{ label: 'Thuê', value: 'USER' }, { label: 'Cho thuê', value: 'AGENT' }]} />}
        <Button handleClick={handleSubmit(onSubmit)} className="py-2 my-6 hover:bg-main-800">{variant === 'LOGIN' ? 'Đăng nhập' : 'Đăng ký'}</Button>
        <span className="cursor-pointer text-main-500 hover:underline hover:text-main-800 w-full text-center">Quên mật khẩu?</span>
      </form>
    </div>
  )
}

export default Login