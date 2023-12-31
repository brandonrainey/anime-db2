'use server'

import AnimeCard from '@/components/AnimeCard'

export const fetchAnime = async (page: number) => {
  const response = await fetch(
    `https://api.jikan.moe/v4/top/anime?page=${page}&limit=8&bypopularity`
  )

  const data = await response.json()

  return data.data.map((item: any, index: number) => (
    <AnimeCard anime={item} key={item.mal_id} index={index} />
  ))
}

export const fetchSeasonalAnime = async (page: number) => {
  const response = await fetch(
    `https://api.jikan.moe/v4/seasons/now?page=${page}&limit=8`
  )

  const data = await response.json()

  if (!data.data) {
    // Return an empty array if data.data is not defined
    return [];
  }

  return data.data.map((item: any, index: number) => (
    <AnimeCard anime={item} key={item.mal_id + index} index={index} />
  ))
}
