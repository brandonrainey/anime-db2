import React from 'react'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="flex md:flex-row flex-col w-full md:h-[500px] relative md:border-b-4 border-slate-900">
      <div className="w-full h-[500px] filter blur-3xl absolute bg-slate-900 -z-10 "></div>
      <h1 className="md:w-1/3 p-4 md:p-8 text-white text-5xl md:text-6xl">Anime DB</h1>
      <div className="md:w-2/3 w-full border-b-4 md:border-b-0 border-slate-900">
        <Image
          src="/jujutsu-kaisen-hero.png"
          alt="jujustu kaisen hero image"
          width={720}
          height={1080}
          priority
          style={{ width: '100%', height: 'auto'}}
          className="ml-auto max-w-[250px] md:max-w-[467px]"
        />
      </div>
    </header>
  )
}
