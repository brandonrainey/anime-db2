'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import {
  fetchAnime,
  fetchSeasonalAnime,
  fetchSearchResults,
} from '@/app/action'
import AnimeCard from './AnimeCard'
import { useGlobalContext } from '../app/Context/store'

let page = 1

export type AnimeCard = JSX.Element

export default function LoadMore({
  topAnime,
  seasonalAnime,
}: {
  topAnime: AnimeCard[]
  seasonalAnime: AnimeCard[]
}) {

  const [ref, inView] = useInView()

  const [data, setData] = useState<AnimeCard[]>([])

  const { selected, setSelected, query, searching, setSearching, searchCheck } = useGlobalContext()

  //used to fetch search results
  useEffect(() => {
    setData([])

    page = 1

    if (query.length > 0 && searching === true) {
      fetchSearchResults(page, query).then((res) => {
        setData([...res])
      })
    }
  }, [searchCheck])

  //fetches data when loading element is in view(infinite scrolling)
  useEffect(() => {
    if (inView) {
      page++
      if (selected === 'Top') {
        fetchAnime(page).then((res) => {
          setData([...data, ...res])
        })
      } else if (selected === 'Seasonal' && page <= 8) {
        fetchSeasonalAnime(page).then((res) => {
          setData([...data, ...res])
        })
      } else if (selected === 'Search') {
        fetchSearchResults(page, query).then((res) => {
          setData([...data, ...res])
        })
      }
    }
  }, [inView, data])

  //
  useEffect(() => {
    if (selected !== 'Search') {
      setData([])
      setSearching(false)
      page = 1

      if (selected === 'Top') {
        setData([...topAnime])
      } else if (selected === 'Seasonal') {
        setData([...seasonalAnime])
      }
    }
  }, [selected])

  console.log(selected)
  return (
    <div className="">
      <div className="grid grid-flow-row lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 pt-10 w-auto max-w-[1400px]">
        {data}
      </div>

      <section className="w-full flex items-center justify-center">
        <div
          ref={ref}
          className={`${selected === 'Seasonal' && page > 8 && 'hidden'}`}
        >
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
