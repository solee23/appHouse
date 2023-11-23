import React from 'react'
import { HiOutlineMailOpen } from 'react-icons/hi'
import { BsTelephoneInboundFill, BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs'
import clsx from 'clsx'
import {twMerge} from 'tailwind-merge'
import withRouter from '~/hocs/withRouter'



const Topheader = ( {location}) => {
  return (
    <div className={twMerge(clsx("h-[85px] w-full text-white border-b border-main-100 bg-transparent fixed z-50 top-0 flex items-center justify-between px-[100px] py-[30px]",
        location.pathname !== '/' && "bg-main-700"
    ))}>
        <span className="flex items-center gap-2">
            <HiOutlineMailOpen/>
            <span className="flex gap-3">
                <span>Email của chúng tôi:</span>
                <span>lspau95~gmail.com</span>
            </span>
        </span>
        <div className="flex items-center gap-6">
        <div className="flex items-center gap-8">
            <BsFacebook size={16}/>
            <BsInstagram size={18}/>
            <BsYoutube size={20}/>
        </div>
        <div className="flex items-center pl-8 border-l border-main-100">
            <span className="flex items-center gap-2">
                <BsTelephoneInboundFill/>
                <span> +(84)-763-904-481</span>
            </span>
        </div>
        </div>
    </div>
  )
}

export default withRouter(Topheader)