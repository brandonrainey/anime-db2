import Header from '@/components/Header'
import { fetchAnime } from './action'
import AnimeCard from '@/components/AnimeCard'

export default async function Home() {
  const data = await fetchAnime(1)

  

  return (
    <>
      <Header />
      <AnimeCard data={data} />
    </>
  )
}
