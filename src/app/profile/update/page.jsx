"use client"

import Image from 'next/image'
import React, { useContext, useState } from 'react'


const Update = () => {
    const[error,setError]= useState("")
    const[success,setSuccess]= useState("")
  return (
    <div className='flex  justify-center gap-8'>
    <div className="">
    <h2 class="text-4xl font-extrabold dark:text-white capitalize mb-8">update profile</h2>
    <form  className="max-w-sm mx-auto">
 
<div className="mb-5">
<label for="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">username</label>
<input type="text" name='username' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={"prince"} required />
</div>
<div className="mb-5">
<label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
<input disabled type="email" name='email' id="email" className="disabled:cursor-not-allowed bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={"email"} required />
</div>

<div className="mb-5">
<label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
<input type="password" id="password" name='password' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
</div>
{error && <div className='text-sm my-3 text-red-600 italic'>{error} </div>}
{success && <div className='text-sm my-3 text-green-600 italic'>{success} </div>}

<button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 capitalize">update</button>
</form>
</div>
<div className="">
<Image width={200} height={200} src={"/bg.png"}/>
{/* <div className="">

<CldUploadButton  uploadPreset="rot7hjui" onUpload={handleImage} />
</div> */}
</div>
</div>
  )
}

export default Update