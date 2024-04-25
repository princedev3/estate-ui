"use client"
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import { MdOutlineHotel } from "react-icons/md";
import { LuBath } from "react-icons/lu";
import { RiSaveLine } from "react-icons/ri";
import { MdOutlineMessage } from "react-icons/md";


import Link from 'next/link';
import Chat from '@/components/Chat';
 

const Profile = () => {

    const [singlePost,setSinglePost]= useState([])
    const [allChats,setAllChats]= useState([])

  






  return (
    <div className='flex flex-col lg:overflow-hidden h-[calc(100vh-150px)] lg:flex-row w-[95%] mx-auto '>
        <div className="flex-[3] ">
            <div className="">
                <div className="flex justify-between items-center mb-8">
                    <h1 className='text-3xl font-light capitalize'>user information</h1>
                    <Link href={"/profile/update"} className='px-3 py-2 bg-yellow-400 font-semibold capitalize'>update profile</Link>
                </div>
                <div className='flex flex-col gap-5'>
                    <div className="flex items-center  gap-10">
                        <p>avatar</p>
                        <div className="relative w-[40px] h-[40px] ">
                            <Image className='rounded-full' src={  "/no.png"} fill/>
                        </div>
                    </div>
                    <div className="flex gap-10">
                        <p className="">username:</p>
                        <p className="capitalize font-semibold">prince </p>
                    </div>
                    <div className="flex gap-10">
                        <p className="">email:</p>
                        <p className="font-semibold capitalize">marvin@gmail.com </p>
                    </div>
                </div>
               
                    <button className="my-3 py-2 px-3 rounded-md hover:bg-blue-700 hover:px-4  transition-all duration-300 bg-blue-500 text-white font-semibold uppercase tracking-wider">
                        Logout
                    </button>
               
            </div>
            <div className="lg:overflow-y-scroll no-scrollbar h-full " >
                 <div className="flex justify-between items-center my-8">
                    <h1 className='text-3xl font-light'>My List </h1>
                    <Link href={"/newpost"} className='px-3 py-2 bg-yellow-400 font-semibold capitalize'>add new post</Link>
                 </div>
                 <div className=" flex flex-col gap-8   lg:mb-56 mb-3 ">

                      {
                    singlePost?.length >1? singlePost.map(item=>(
                        <div className=" flex flex-row w-full h-[200px] gap-4 mb-4 ">
                        <div className='flex-[5] relative  hidden  md:flex h-full'>
                         <Image src={"https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} fill alt='' className='rounded-lg object-cover'/>
                        </div>
                        <div className='flex-[6] flex flex-col gap-2 lg:gap-6 '>
                               <h1 className='font-semibold '>Lorem adipisicing elit. Atque, amet.</h1>
                               <div className='flex gap-2'>
                                <Image src={"/pin.png"} alt='' width={20} height={20} className='object-contain'/>
                                <p className="font-light">Lorem ipsum dolor sit, amet consectetur </p>
                               </div>
                        <p className='p-1 bg-yellow-300 w-fit rounded-md'>$ 1000</p>
                        <div className="flex justify-between">
                               <div className="flex items-center">
                               <MdOutlineHotel  className='text-xl'/>
                                <p>3 bedroom</p>
                               </div>
                               <div className="flex items-center">
                               <LuBath  className='text-xl'/>
                                <p>2 bathroom</p>
                               </div>
                               <div className="flex items-center bg-slate-100 gap-2">
                               <RiSaveLine  className='text-xl'/>
                               <MdOutlineMessage className='text-xl' />
                               </div>
                        </div>
                        </div> 
                    </div>
                     )):<p>loading single post</p>
                      }
                   
                 </div>
            </div>
        </div>
        
        <div className="flex-[2]">
            {
                allChats?.length ?
            <Chat allChats={allChats} /> :<p className=''>loading chats</p>
            }
        </div>
    </div>
  )
}

export default Profile