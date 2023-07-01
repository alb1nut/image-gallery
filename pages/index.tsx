import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'


function cn(...classes:string[]){
  return classes.filter(Boolean).join(' ');
}

export default function Gallery() {
  return (
    <div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>

      <div className='grid grid-cols-1 gap-y-10 sm:grid-col-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
        <BlurImage />
      </div>
    </div>
  )
}



 function BlurImage() {
  const [isLoading,setLoading] = useState(true);
  return (
    <Link href='' className='group'>
      <div className='w-full aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8  overflow-hidden rounded-lg bg-gray-200'>
        <Image 
        // width={500}
        // height={500}
        layout='fill'
        objectFit='cover'
        src='https://bit.ly/placeholder-img'
         alt='image' 
        className={cn(
          'group-hover:opacity-75 duration-700 ease-in-out', 
      isLoading 
    ? 'grayscale blur-2xl scale-110'
     : 'grayscale-0 blur-0 scale-100'
        )
  }
  onLoadingComplete={() =>setLoading(false)}
        />
      </div>
      <h3 className='mt-4 text-sm text-gray-700'>Albert Dovlo</h3>
      <p className='mt-1 text-lg font-medium text-gray-900'>@al_dov</p>
    </Link>
  )
}
