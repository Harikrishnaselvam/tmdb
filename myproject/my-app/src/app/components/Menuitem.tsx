import React from 'react'
import Link from 'next/link'
import { ReactNode } from 'react'

type info  = {
    title:string,
    address:string,
    Icon:any
}

const Menuitem = ({title, address, Icon}:info):ReactNode => {
  return (
    <div>
      <Link href={address} className='mx-4 lg:mx-6 hover:text-amber-600 '>
            <Icon className="text-2xl sm:hidden mx-4"/>
            <p className='hidden sm:inline my-2 text-sm'>{title}</p>
      </Link>
    </div>
  )
}

export default Menuitem
