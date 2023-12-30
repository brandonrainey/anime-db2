

import Header from '@/components/Header'
import { fetchAnime } from './action'
import LoadMore from '@/components/LoadMore'
import Toggle from '@/components/Toggle'
import { useGlobalContext } from './Context/store'



export default async function Home() {

  
  const data = await fetchAnime(1, 'Top')

  return (
    
      <div className="flex flex-col items-center">
      <Header />
      <Toggle />
      {/* <div className="grid grid-flow-row lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 pt-10 w-full max-w-[1400px] ">
        {data}
      </div> */}
      <LoadMore />
    </div>
    
  )
      
    
}
