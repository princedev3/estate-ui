
"use client"

import Image from 'next/image'
import React, { useContext, useEffect, useRef, useState } from 'react'





const Chat = () => {
    const[chatbox,setChatbox]=useState(null)
  return (
    <div>
        <div className='bg-fuchsia-50  lg:overflow-y-scroll no-scrollbar h-full'>
        <div className="xl:p-5 lg:p-2  ">
            
            <h1 className='text-2xl font-light'>Messages</h1>
            <div className="flex flex-col gap-4 mt-2">
                {
                    allChats?.map((chat,idx)=>(

                    <div    className=" flex cursor-pointer  gap-4 items-center p-3 rounded-md bg-white">
                        <div className=" relative w-[40px] h-[40px] ">
                            <Image className='rounded-full' src={"https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} fill alt=''/>
                        </div>
                        <p className='font-semibold capitalize text-sm'>{"rec"} </p>
                        <p className=''>{"message"} </p>
                    </div>
                    ))
                }   
            </div>
        </div>
        {
            chatbox !== null? (
<div className="p-2  ">
            <div className="flex justify-between items-center bg-fuchsia-200  px-6 py-3 ">
                <div className="flex items-center gap-5">
                   
                   <div className=" relative w-[40px] h-[40px] ">
                            <Image className='rounded-full' src={chatbox?.reciever?.avatar || "https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} fill alt=''/>
                     </div>
                    <p  className="font-semibold capitalize">{chatbox?.reciever?.username} </p>
                   </div>
                    <p onClick={()=>setChatbox(null)} className="font-semibold text-2xl cursor-pointer">X</p>
               
            </div>
            <div className="h-[350px] flex flex-col gap-5  overflow-y-scroll no-scrollbar1 ">
                {  chatbox?.message?.map(mes=>(
               <div style={{alignSelf: mes.userId=== currentUser?.id? "flex-end ":"flex-start",textAlign: mes.userId=== currentUser?.id? "right":"left"}} className="w-[70%] relative ">
               <p className="">{mes.text} </p>
                <p style={{alignSelf: mes.userId=== currentUser?.id? "flex-end  ":"flex-start",textAlign: mes.userId=== currentUser?.id? "right":"left"}}  className={`  italic text-[7px] px-1  `}>{format(mes.createdAt)} </p>
                
               </div>))}
              
             
            </div>
            <form   className="">
                <textarea name="text" id="" className='w-full resize-none h-[100px] rounded-lg outline-none '/>
                <button className='px-3 py-2 cursor-pointer bg-yellow-400 text-xl border-none rounded-lg font-semibold capitalize text-gray-600'>send</button>
            </form>
        </div>
            ): <p onClick={()=>setChatbox(true)} className='cursor-pointer px-3 py-2 bg-yellow-600 text-white font-semibold rounded-md  w-fit capitalize mb-5s'>open chat</p>
        }
        
    </div>
    </div>
  )
}

export default Chat