"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useSearchParams } from 'next/navigation'

const Filter = () => {
 
  const[query,setQuery]=useState({
    type:"buy",
        minPrice:0,
        maxPrice:100000,
        city:"london",
        bedroom:0,
        bathroom:0,
        property:"apartment"
  })
  const handleChange=(e)=>{
    setQuery(prev=>({...prev,[e.target.name]:e.target.value}))
  }
 
  return (
    <div className='flex flex-col'>
      <h1 className='font-semibold'>search results for <b>{"london"} </b></h1>
      <div className='flex flex-col p-2 '>
          <label htmlFor="city">Location</label>
          <input onChange={handleChange}  className='w-full p-2 border outline-none' type="text" id='location' name='city' placeholder='Location' />
        </div>
      <div className='flex justify-between flex-wrap'>
        <div className='flex flex-col p-2 '>
          <label htmlFor="city">Type</label>
          <select onChange={handleChange}  className='w-[100px] border outline-none p-2 ' name="type" id="type">
            <option value="">any</option>
            <option value="buy">buy</option>
            <option value="rent">rent</option>
          </select>
        </div>
        <div className='flex flex-col p-2 '>
          <label htmlFor="property">Property</label>

          <select  onChange={handleChange}  className='w-[100px] p-2 border outline-none' name="property" id="property">
            <option value="apartment">apartment</option>
            <option value="house">house</option>
            <option value="condo">condo</option>
            <option value="land">land</option>
          </select>
        </div>
        <div className='flex flex-col p-2 '>
          <label htmlFor="city">max price</label>
          <input onChange={handleChange}   className='w-[100px] p-2 border outline-none' type="text" id='maxPrice' name='maxPrice' placeholder='any' />
        </div>
        <div className='flex flex-col p-2 '>
          <label htmlFor="city">min price</label>
          <input  onChange={handleChange}  className='w-[100px] p-2 border outline-none ' type="text" id='minPrice' name='minPrice' placeholder='any' />
        </div>
        <div className='flex flex-col p-2 '>
          <label htmlFor="city">bedroom</label>
          <input  onChange={handleChange}  className='w-[100px] p-2 border outline-none' type="text" id='bedroom' name='bedroom' placeholder='any' />
        </div>
        
        <button  className=' border-none h-[73px] w-[60px] bg-yellow-500 place-items-center text-2xl flex items-center justify-center '>
          <Image src={"/search.png"} width={20} height={20} alt=''/>
        </button>
      
      </div>
    </div>
  )
}


export default Filter