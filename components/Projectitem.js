import React from 'react'
import Image from "next/image";
import Link from "next/link";

function Projectitem({title,propertyImg,projectURl}) {
  return (
    <div>
    
    <div className='relative flex items-center group justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
    <Image className='rounded-xl group-hover:opacity-20 ' src={propertyImg} alt='' width={500} height={500}/>
    <div className=' text-center hidden group-hover:block absolute'>
    <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
    <p className='pb-4 pt-2 text-white text-center'>react js</p>
    <Link href="/Property">
    <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
    </Link>
    </div>
    </div>


    </div>
  )
}

export default Projectitem