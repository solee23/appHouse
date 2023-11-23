import React from 'react'
import { Button, Login } from '..'
import navigations from '~/utils/constant'
import { NavLink, Link } from 'react-router-dom'
import clsx from 'clsx'
import {twMerge} from 'tailwind-merge'
import withRouter from '~/hocs/withRouter'
import { useUserStore } from '~/store/useUserStore'
import path from '~/utils/path'
import { useAppStore } from '~/store/useAppStore'

const Navigation = ({location, navigation}) => {
  const {token} = useUserStore();
  const {setModal} = useAppStore();
  return (
    <div className="h-[85px] w-full bg-transparent flex items-center justify-between fixed z-50 top-[85px] px-[100px] py-[30px]">
      <Link to="/" className="items-center">
      <img src={ (location.pathname === '/') ? '/logo.png' : '/logo1.png'}/>
      </Link>
      <div className={clsx(location.pathname === '/' ? "text-main-100" : "text-main-700","flex text-lg items-center gap-6" )}>
        {navigations.map(el => (
          <NavLink key={el.id} to={el.path} className={({isActive}) => 
            clsx(isActive && "text-main-700 font-medium")}>
            {el.text}
          </NavLink>
        ))}
          {!token ? (<Button className={twMerge(clsx("bg-transparent border", 
        location.pathname === '/' ? "text-main-100"  : "text-main-700  border-main-700"
        ))}
          handleClick={() => setModal(true, <Login/>)}
        >
           Đăng nhập...
        </Button>) : ( <Button className={twMerge(clsx("bg-transparent border", 
        location.pathname === '/' ? "text-main-100"  : "text-main-700  border-main-700"
        ))}>
          Thuê nhà...
        </Button>)}
      </div>
    </div>
  )
}

export default withRouter(Navigation)