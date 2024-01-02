import Header from '@/components/Header'
import { fetchAnime, fetchSeasonalAnime } from './action'
import LoadMore from '@/components/LoadMore'
import Toggle from '@/components/Toggle'
import SearchBar from '@/components/SearchBar'

let page = 1

export default async function Home() {
  const topAnime = await fetchAnime(page)

  const seasonalAnime = await fetchSeasonalAnime(page)

  return (
    <div className="flex flex-col items-center">
      <Header />
      <div className="flex flex-col sm:flex-row gap-6 w-full justify-between p-4 items-center">
        <SearchBar />
        <Toggle />
      </div>
      {/* serves as display component for fetched data/infinite scrolling */}
      <LoadMore topAnime={topAnime} seasonalAnime={seasonalAnime} />
    </div>
  )
}
