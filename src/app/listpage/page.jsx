'use client'
import { listData } from '@/libs/data'
import Filter from '@/components/Filter'

import React, { useEffect, useState,Suspense } from 'react'
import Card from '@/components/Card'
import Map from '@/components/Map'


const ListPage = () => {  



  return ( 
    <div className='flex h-full  w-[95%] mx-auto'>
      <div className="flex-[3] w-full relative lg:overflow-y-scroll no-scrollbar     h-screen">
        <div className="pr-[20px]  w-full relative ">
          <Filter/>
          <div className="my-[2rem]   w-full flex flex-col gap-11 ">
            <Suspense fallback={<p>Loading feed...</p>}>
            { listData.length===0? <p  className="mb-3  text-2xl text-gray-500 dark:text-gray-400" >Sorry no item found</p>:
              listData.map(item=>(
                <Card item={item}/>
              )) 
            }
    </Suspense>
 <div className=" flex  justify-between items-center">
    <button className="text-white bg-blue-700 hover:bg-blue-800 w-fit  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 disabled:bg-red-600" >prev</button>
 <button  className="text-white bg-blue-700 hover:bg-blue-800 w-fit  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 disabled:bg-red-600" >next</button>
 </div>
          </div>
        </div>
      </div>
      <div className="flex-[2] hidden lg:flex   pl-4">
      
        <Map items={listData} />
      </div>
    </div>
  )
}

export default ListPage