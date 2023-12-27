'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { fetchAnime } from '@/app/action'
import AnimeCard from './AnimeCard'

let page = 2

export type AnimeCard = JSX.Element

export default function LoadMore() {
  const [ref, inView] = useInView()
  const [data, setData] = useState<AnimeCard[]>([])

  

  useEffect(() => {
    if (inView) {
      fetchAnime(page).then((res) => {
        setData([...data, ...res])
        page++
      })
    }
  }, [inView, data])

  return (
    <div className=''>
      <div className="grid grid-flow-row lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 pt-10 w-auto max-w-[1400px]">
        {data}
      </div>

      <section className="">
        <div ref={ref}>
          <Image
            src="/spinner.svg"
            alt="loading spinner"
            width={70}
            height={70}
          />
        </div>
      </section>
    </div>
  )
}
