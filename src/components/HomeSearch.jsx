'use client'
import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { IoMdMic } from "react-icons/io";
import { useRouter } from 'next/navigation';


export default function HomeSearch() {
  const router = useRouter()
  const [input, setInput] = useState('')
  const [randsrcload, setrandsrcload] = useState(false)
 
  function handleSubmit(e){
    e.preventDefault()
    if(!input.trim()) return
    router.push(`/search/web?searchTerm=${input}`)
   }

  async function randomSearch(){
    setrandsrcload(true)
    const response = await fetch('https://random-word-api.herokuapp.com/word')
    .then((res)=>res.json())
    .then((data)=>data[0])
    if(!response) return
    router.push(`/search/web?searchTerm=${response}`)
    setrandsrcload(false)
  }

  return (
    <>
    <form onSubmit={handleSubmit} className='flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md transition-shadow focus-within:shadow-md sm:max-w-xl lg:max-w-2xl'>
        <IoSearch className='text-xl text-gray-500 mr-3'/>
        <input type='text' className='flex-grow focus:outline-none' onChange={(e)=> setInput(e.target.value)} value={input}/>
        <IoMdMic  className='text-lg'/>
    </form>
    <div className='flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 justify-center sm:flex-row mt-8'>
        <button className='btn' onClick={handleSubmit}>Google Search</button>
        <button disabled={randsrcload} className='btn flex items-center justify-center disabled:opacity-80' onClick={randomSearch}>{randsrcload ? (<img src='spinner.svg' alt='loading...' className='h-6 text-center'/>) : ("I'm Feeling Lucky.")}</button>
    </div>
    </>
  )
}
