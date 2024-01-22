import React from 'react'
import { TbGridDots } from "react-icons/tb";
import Link from "next/link"

export default function HomeHeader() {
  return (
    <header className='flex justify-end p-5 text-sm'>
        <div className='flex space-x-4 items-center justify-between'>
            <Link href='https://mail.google.com' className='hover:underline px-2'>Gmail</Link>
        </div>
        <div className='flex space-x-4 items-center justify-between'>
            <Link href='https://image.google.com' className='hover:underline px-2'>Images</Link>
        <TbGridDots className='bg-transparent hover:bg-gray-200 rounded-full text-4xl px-2'/>
        <button className='bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-shadow'>Sign In</button>
        </div>
    </header>

  )
}
