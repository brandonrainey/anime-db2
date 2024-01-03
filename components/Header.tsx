import React from 'react'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="flex md:flex-row flex-col w-full md:h-[500px] relative md:border-b-4 border-slate-900">
      <div className="w-full h-[300px] md:h-[500px] filter blur-3xl absolute bg-black/70 -z-10 "></div>
      <div className='absolute font-PermanentMarker text-3xl max-w-[270px] lg:max-w-full md:text-6xl pl-10 text-white top-[2rem] sm:top-[10rem] lg:right-[45rem] '>Embrace the Anime Universe</div>
      
      <h1 className="md:w-1/3 p-4 md:p-[3rem] text-white  text-5xl md:text-6xl">
      {/* Anime DB */}
      </h1>
      <div className="md:w-2/3 w-full border-b-4 md:border-b-0 border-slate-900 z-20">
        <Image
          src="/jujutsu-kaisen-hero.png"
          alt="jujustu kaisen hero image"
          width={720}
          height={1080}
          priority
          style={{ width: '100%', height: 'auto' }}
          className="ml-auto max-w-[250px] md:max-w-[467px] z-20"
        />
      </div>
    </header>
  )
}
