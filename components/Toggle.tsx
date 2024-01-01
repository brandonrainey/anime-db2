'use client'

import React, { useState, useEffect } from 'react'
import { useGlobalContext } from '../app/Context/store'

export default function Toggle() {
    const { selected, setSelected } = useGlobalContext()
    
    function checkDropdown(e: React.ChangeEvent<HTMLSelectElement>) {
        setSelected(e.target.value)
    }

  return (
    <div className=''>
      <select
        id="countries"
        onChange={checkDropdown}
        className="bg-gray-500 border border-gray-300 text-white text-md font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="Top" className="">
          Top Anime
        </option>
        <option value="Seasonal">Seasonal Anime</option>
      </select>

      
    </div>
  )
}
