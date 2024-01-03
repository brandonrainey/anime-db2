'use client'

import React from 'react'
import { useGlobalContext } from '../app/Context/store'

export default function SearchBar() {
  const {
    query,
    setQuery,
    setSearching,
    setSelected,
    searchCheck,
    setSearchCheck,
  } = useGlobalContext()

  

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSearching(true)
    setSelected('Search')
    setSearchCheck(!searchCheck)
  }

  return (
    <form className="flex items-center" onSubmit={handleSearch}>
      <label htmlFor="simple-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <input
          type="text"
          id="simple-search"
          className="bg-gray-500  text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  "
          placeholder="Search anime"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <button
        type="submit"
        disabled={query.length === 0}
        className="p-2.5 ms-2 text-sm font-medium text-white bg-slate-700 rounded-lg  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <svg
          className="w-4 h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
        <span className="sr-only">Search</span>
      </button>
    </form>
  )
}
