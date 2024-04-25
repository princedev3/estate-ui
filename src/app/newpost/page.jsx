"use client"


import Image from 'next/image';

import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const newPost = () => {
    const [value, setValue] = useState('');
    const [images, setImages] = useState([]);





  return (
    <div cl>
        <div className="">
            <div className="">
                <form action="" className='flex flex-col xl:w-[80%] mx-auto p-3 '>
                  <div className="md:grid md:grid-cols-3 gap-3">
                  <div className=" flex flex-col flex-1">
                   <label htmlFor="" className='capitalize mb-1 tracking-wide font-normal'>Title</label>
                    <input type="text" name='title' id='title' className='border text-xl p-2 outline-none rounded-lg'/>
                   </div>
                   <div className="flex flex-col flex-1">
                   <label htmlFor="" className='capitalize mb-1 tracking-wide font-normal'>price</label>
                    <input type="number" name='price' id='title' className='border text-xl p-2 outline-none rounded-lg'/>
                   </div>
                   <div className="flex flex-col flex-1">
                   <label htmlFor="" className='capitalize mb-1 tracking-wide font-normal'>address</label>
                    <input type="text" name='address' id='title' className='border text-xl p-2 outline-none rounded-lg'/>
                   </div>
                  </div>
                  <div className="w-full">
                    <div className="flex flex-col my-3">
                    <label htmlFor="" className='capitalize mb-1 tracking-wide font-normal'>description</label>
                    <ReactQuill theme="snow" value={value} onChange={setValue} />
                    </div>
                  </div>
                  <div className="md:grid md:grid-cols-3 gap-3 my-4">
                  <div className=" flex flex-col flex-1">
                   <label htmlFor="" className='capitalize mb-1 tracking-wide font-normal'>city</label>
                    <input type="text" name='city' id='title' className='border text-xl p-2 outline-none rounded-lg'/>
                   </div>
                   <div className="flex flex-col flex-1">
                   <label htmlFor="" className='capitalize mb-1 tracking-wide font-normal'>bedroom number</label>
                    <input type="number" name='bedroom' id='title' className='border text-xl p-2 outline-none rounded-lg'/>
                   </div>
                   <div className="flex flex-col flex-1">
                   <label htmlFor="" className='capitalize mb-1 tracking-wide font-normal'>bathroom number</label>
                    <input type="text" name='bathroom' id='title' className='border text-xl p-2 outline-none rounded-lg'/>
                   </div>
                  </div>
                  <div className="md:grid md:grid-cols-3 gap-3 my-4">
                  <div className=" flex flex-col flex-1">
                   <label htmlFor="" className='capitalize mb-1 tracking-wide font-normal'>latitude</label>
                    <input type="text" name='latitude' id='title' className='border text-xl p-2 outline-none rounded-lg'/>
                   </div>
                   <div className="flex flex-col flex-1">
                   <label htmlFor="" className='capitalize mb-1 tracking-wide font-normal'>longitude</label>
                    <input type="text" name='longitude' id='title' className='border text-xl p-2 outline-none rounded-lg'/>
                   </div>
                   <div className="flex flex-col flex-1">
                   <label htmlFor="" className='capitalize mb-1 tracking-wide font-normal'>type</label>
                    <input type="text" name='type' id='title' className='border text-xl p-2 outline-none rounded-lg'/>
                   </div>
                  </div>
                  <div className="md:grid md:grid-cols-3 gap-3 my-4">
                  <div className=" flex flex-col flex-1">
                   <label htmlFor="" className='capitalize mb-1 tracking-wide font-normal'>property</label>
                    <input type="text" name='property' id='title' className='border text-xl p-2 outline-none rounded-lg'/>
                   </div>
                   <div className="flex flex-col flex-1">
                   <label htmlFor="" className='capitalize mb-1 tracking-wide font-normal'>ultilties policy</label>
                    <input type="text" name='utilities' id='title' className='border text-xl p-2 outline-none rounded-lg'/>
                   </div>
                   <div className="flex flex-col flex-1">
                   <label htmlFor="" className='capitalize mb-1 tracking-wide font-normal'>pet policy</label>
                    <input type="text" name='pet' id='title' className='border text-xl p-2 outline-none rounded-lg'/>
                   </div>
                  </div>
                  <div className="md:grid md:grid-cols-3 gap-3 my-4">
                  <div className=" flex flex-col flex-1">
                   <label htmlFor="" className='capitalize mb-1 tracking-wide font-normal'>income policy</label>
                    <input type="text" name='income' id='title' className='border text-xl p-2 outline-none rounded-lg'/>
                   </div>
                   <div className="flex flex-col flex-1">
                   <label htmlFor="" className='capitalize mb-1 tracking-wide font-normal'>total size (sqft) </label>
                    <input type="number" name='size' id='title' className='border text-xl p-2 outline-none rounded-lg'/>
                   </div>
                   <div className="flex flex-col flex-1">
                   <label htmlFor="" className='capitalize mb-1 tracking-wide font-normal'>school</label>
                    <input type="number" name='school' id='title' className='border text-xl p-2 outline-none rounded-lg'/>
                   </div>
                  </div>
                  <div className="md:grid md:grid-cols-3 gap-3 my-4 mb-3">
                  <div className=" flex flex-col flex-1">
                   <label htmlFor="" className='capitalize mb-1 tracking-wide font-normal'>bus</label>
                    <input type="number" name='bus' id='title' className='border text-xl p-2 outline-none rounded-lg'/>
                   </div>
                   <div className="flex flex-col flex-1">
                   <label htmlFor="" className='capitalize mb-1 tracking-wide font-normal'>resturant </label>
                    <input type="number" name='resturant' id='title' className='border text-xl p-2 outline-none rounded-lg'/>
                   </div>
                   <div className="flex flex-col flex-1 mt-2">
                  <button className='p-4 md:p-0 h-full w-full bg-cyan-800 text-white capitalize rounded-lg'>update</button>

                   </div>
                  </div>
                </form>
                <div className="flex gap-2 flex-col">
                    <div className='flex gap-3'>

                    {
                    images.map(image=>(
                        <div key={image}>
                            <Image src={image} width={120} height={120} className='object-cover'/>
                        </div>
                    ))
                    }
                    </div>
                <button type="button" class="text-white w-1/4 bg-cyan-800   font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none ">

upload
                </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default newPost