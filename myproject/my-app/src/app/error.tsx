"use client"

import React from 'react'
import {useEffect} from "react"

const Error = ({error, reset}:any) => {
    useEffect(() => {
        console.log(error)
    },[error])
  return (
    <div className='text-center mt-10'>
      <h1>SomeThing Went Wrong</h1>
      <button className='hover:text-amber-600' onClick={() =>reset()}>Try Again</button>
    </div>
  )
}

export default Error
