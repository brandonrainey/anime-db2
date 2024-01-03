'use client'

import React from 'react'
import Image from 'next/image'
import { MotionDiv } from './MotionDiv'
import StarIcon from './StarIcon'

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
}

export default function AnimeCard({ anime, index }: AnimeCardProps) {
  return (
    <MotionDiv
      className="flex flex-col items-center "
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: index * 0.15, ease: 'easeInOut' }}
      viewport={{ amount: 0 }}
    >
      <a
        href={anime.url}
        className="w-[270px] md:w-[220px] h-[380px] md:h-[320px] relative "
      >
        <Image
          src={anime.images.jpg.image_url}
          alt={anime.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="rounded-xl object-cover"
        />
      </a>

      <h1 className="text-white font-semibold pt-2 text-center px-2 text-wrap max-w-[260px]">
        {anime.title}
      </h1>
      <div className="flex items-center gap-2">
        <StarIcon />

        <div className="flex items-center justify-center">
          <p className="text-white font-semibold text-center pt-1">
            {anime.score}
          </p>
        </div>
      </div>
    </MotionDiv>
  )
}
