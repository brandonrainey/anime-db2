'use server'

import AnimeCard from '@/components/AnimeCard'

export const fetchAnime = async (page: number) => {
  const response = await fetch(
    `https://api.jikan.moe/v4/top/anime?page=${page}&limit=8&bypopularity`
  )

  const data = await response.json()

  //maps the data response directly to the AnimeCard component
  return data.data.map((item: any, index: number) => (
    <AnimeCard anime={item} key={item.mal_id} index={index} />
  ))
}

export const fetchSeasonalAnime = async (page: number) => {
  const response = await fetch(
    `https://api.jikan.moe/v4/seasons/now?page=${page}&limit=8`
  )

  const data = await response.json()

  //used for when api returns fragmented data deep in the results
  if (!data.data) {
    // Return an empty array if data.data is not defined
    return []
  }

  return data.data.map((item: any, index: number) => (
    <AnimeCard anime={item} key={item.mal_id + index} index={index} />
  ))
}

export const fetchSearchResults = async (page: number, query: string) => {
  const response = await fetch(
    `https://api.jikan.moe/v4/anime?q=${query}&order_by=popularity&sort=asc&limit=8&page=${page}&sfw`
  )

  const data = await response.json()

  if (!data.data) {
    // Return an empty array if data.data is not defined
    return []
  }

  //used to prevent issue where duplicate results are returned
  let prevMalId: any = null

  return data.data
    .filter((item: any) => {
      if (item.mal_id === prevMalId) {
        // Skip this item if its mal_id is the same as the previous item's
        return false
      }

      // Update prevMalId to the current item's mal_id
      prevMalId = item.mal_id

      return true
    })
    .map((item: any, index: number) => (
      <AnimeCard anime={item} key={item.mal_id} index={index} />
    ))
}
