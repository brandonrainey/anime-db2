import React from 'react'
import Image from 'next/image'
import { MotionDiv } from './MotionDiv'

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
      <a href={anime.url} className="w-[270px] md:w-[220px] h-[380px] md:h-[320px] relative ">
        <Image
          src={anime.images.webp.image_url}
          alt={anime.title}
          fill
          objectFit="cover"
          className="rounded-xl"
        />
      </a>

      <h1 className="text-white font-semibold pt-2 text-center px-2">
        {anime.title}
      </h1>
    </MotionDiv>
  )
}
