"use client"


import React, { useState } from 'react'
import {useRouter} from 'next/navigation'


const SearchBar = () => {
 
  const [search, setSearch] = useState("")
  const router = useRouter()
  function handleSubmit(e:any){
    e.preventDefault()
    if (!search) {
          return
    }
    router.push(`/search/${search}`)
    
  }
  return (
    <form className='flex max-w-6 mx-auto justify-between items-center px-5' onSubmit={handleSubmit}>
      <input type="text" placeholder='Search Keywords...' className='w-full h-14 rounded-sm  placeholder-gray-500 outline-none bg-transparent flex-1' 
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      />
      <button disabled={!search} type="submit" className='text-amber-600 disabled:text-gray-400'>Search</button>
    </form>
  )
}

export default SearchBar
