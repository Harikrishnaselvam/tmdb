'use client'

import Link from 'next/link'
import React, { ReactNode } from 'react'
import {useSearchParams} from 'next/navigation'

type info = {
    title : String,
    param: String
}

const NavbarItem = ({title, param}:info):ReactNode => {
  const searchParams = useSearchParams()
  const genre = searchParams.get("genre");
  return (
    <div>
      <Link className={`m-4 hover:text-amber-600 p-2 font-semibold ${
        genre && genre === param && "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
      }`} 
      href={`/?genre=${param}`}>
        {title}
      </Link>
    </div>
  )
}

export default NavbarItem
