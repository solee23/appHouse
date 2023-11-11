import React from 'react'
import { HiOutlineMailOpen } from 'react-icons/hi'
import { BsTelephoneInboundFill, BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs'


const Topheader = () => {
  return (
    <div className="h-[85px] w-full text-white border-b border-main-100 bg-transparent fixed z-50 top-0 flex items-center justify-between px-[100px] py-[30px]">
        <span className="flex items-center gap-2">
            <HiOutlineMailOpen/>
            <span >
                <span>Email us at: </span>
                <span>lspau95@gmail.com</span>
            </span>
        </span>
        <div className="flex items-center gap-6">
        <div className="flex items-center gap-4">
            <BsFacebook/>
            <BsInstagram/>
            <BsYoutube/>
        </div>
        <div className="flex items-center pl-8 border-l border-main-100">
            <span className="flex items-center gap-2">
                <BsTelephoneInboundFill/>
                <span> 076-390-4481</span>
            </span>
        </div>
        </div>
    </div>
  )
}

export default Topheader