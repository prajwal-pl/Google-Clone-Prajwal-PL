export const dynamic = 'force-dynamic'

import React from 'react'
import Link from 'next/link'
import ImageSearchResults from '@/components/ImageSearchResults'
import { resolve } from 'styled-jsx/css'

export default async function ImageSearchPage({searchParams}) {
  const startIndex = searchParams.start || '1'
  await new Promise((resolve)=> setTimeout(resolve, 3000))
  const response = await fetch(
     `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&searchType=image&start=${startIndex}`
  )
  if(!response.ok){
    throw new Error('Something Went Wrong')
  }
  const data = await response.json() 
  const results = data.items
  if(!results){
    return <div className='flex flex-col justify-center items-center pt-10 '>
      <h1 className='text-3xl mb-4'>No Results Found</h1>
      <p className='text-lg'>Try Searching Something Else.</p>
      <Link className='text-blue-500' href='/'>Home</Link>
    </div>
  }
  return (
    <>
      {results && <ImageSearchResults results={data}/>}
    </>
  )
}
