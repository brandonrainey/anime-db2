import React from 'react'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="flex w-full h-[500px] relative border-b-4 border-slate-800">
      <div className="w-full h-[500px] filter blur-3xl absolute bg-slate-800 -z-10"></div>
      <h1 className="w-1/3 p-8 text-white text-6xl">Anime DB</h1>
      <div className="w-2/3">
        <Image
          src="/jujutsu-kaisen-hero.png"
          alt="jujustu kaisen hero image"
          width={720}
          height={1080}
          style={{ width: '100%', height: 'auto'}}
          className="ml-auto max-w-[467px]"
        />
      </div>
    </header>
  )
}
