'use client'

import React from 'react'
import { useGlobalContext } from '../app/Context/store'

export default function Toggle() {
  const { selected, setSelected, query } = useGlobalContext()

  function checkDropdown(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelected(e.target.value)
  }

  return (
    <div className="">
      <select
        id="countries"
        onChange={checkDropdown}
        value={selected}
        className="bg-gray-500  text-white text-md font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
      >
        {selected === 'Search' ? (
          <option value="Search" className="">
            Searching Anime
          </option>
        ) : null}

        <option value="Top" className="">
          Top Anime
        </option>

        <option value="Seasonal">Seasonal Anime</option>
      </select>
    </div>
  )
}
