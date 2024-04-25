import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Card = ({item}) => {
  return (
    <div className="flex gap-2  ">
        
       <div className="relative flex-[2] h-[200px]">
        <Link href={`/singlepage/${item.id}  `}>
            <Image src={`${item.img }`} fill alt='' className='object-cover rounded-lg'/>
         </Link>
       </div>
        <div className="flex-[2] flex flex-col justify-between">
            <h2 className=" text-base font-semibold">
                <Link href={`${item.id}`}>{item.title} </Link>
            </h2>
            <p className="flex gap-1">
                <Image src={"/pin.png"} alt='' width={20} height={20} className='object-contain'/>
                <span>{item.address} </span>
            </p>
            <p className="bg-yellow-500/60 w-fit  p-1 text-gray-600">$ {item.price} </p>
            <div className="flex gap-2">
                <div className="flex justify-between gap-4">
                    <div className="flex flex-col md:flex-row">
                        <Image src={"/bed.png"} alt='' width={15} height={15}/>
                        <span className='text-sm md:text-base '>{item.bedroom}bedroom </span>
                    </div>
                    <div className="flex  flex-col md:flex-row">
                        <Image src={"/bath.png"} alt='' width={15} height={15}/>
                        <span className='text-sm md:text-base'>{item.bathroom} bathroom </span>
                    </div>
                </div>
                <div className="flex gap-1">
                <Image src={"/save.png"} alt='' width={15} height={15} className='object-contain cursor-pointer'/>
                <Image src={"/chat.png"} alt=''  width={15} height={15} className='object-contain cursor-pointer'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card