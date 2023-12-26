'use client'

import React, { use, useEffect } from 'react'

import Image from 'next/image'

export default function AnimeCard({ data }: AnimeCardProps) {
  useEffect(() => {
    console.log(data.data[0].images.webp.image_url)
  }, [])

  return (
    
      <div>
        <div className='max-w-[500px]'>
        <Image src={data.data[0].images.webp.image_url} alt='anime image' width={100} height={300} layout='responsive'/>
        </div>
      </div>
    
  )
}
