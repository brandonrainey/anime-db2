import React from 'react'


export default function Toggle() {

    

  function checkDropdown(e: React.ChangeEvent<HTMLSelectElement>) {}

  return (
    <div>
      <select
        id="countries"
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
