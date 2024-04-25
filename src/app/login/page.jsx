import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    
<div className="flex w-[60%] md:w-[95%] mx-auto min-h-screen ">

<form className=" flex-[3] flex items-center justify-center w-full  ">
    <div className="w-full md:w-[350px]">
    <h1 class="mb-4 text-4xl font-normal capitalize text-center leading-none tracking-tight text-gray-900 md:text-5xl  dark:text-white">welcome back</h1>
  <div className="mb-5">
   
    <input type="username" id="username" className="bg-gray-50 border outline-none  border-gray-300 placeholder:uppercase text-gray-900 text-sm rounded-lg  block w-full p-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder="surname" required />
  </div>
  <div className="mb-5">
   
    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white placeholder:uppercase outline-none " required placeholder='password' />
  </div>
  <div className="flex items-start mb-5">
   
   
  </div>
  <button type="submit" className="text-white mb-4 bg-teal-700 focus:outline-none font-medium rounded-lg text-sm w-full  p-5  text-center ">Submit</button>
  <Link href={"/register"} className='text-gray-500 underline'>Don't have an account?</Link>
  </div>
</form>
<div className="flex-[2] bg-[#fcf5f3] relative  hidden md:flex">
   <Image src='/bg.png' fill className='object-cover' />
</div>
</div>

  )
}

export default Login