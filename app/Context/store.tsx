'use client'

import { createContext, useContext, useState } from 'react'

interface ContextProps {
    selected: string
    setSelected: React.Dispatch<React.SetStateAction<string>>
    query: string
    setQuery: React.Dispatch<React.SetStateAction<string>>
    searching: boolean
    setSearching: React.Dispatch<React.SetStateAction<boolean>>
    searchCheck: boolean
    setSearchCheck: React.Dispatch<React.SetStateAction<boolean>>
}

const GlobalContext = createContext<ContextProps>({
    selected: '',
    setSelected: (): string => '',
    query: '',
    setQuery: (): string => '',
    searching: false,
    setSearching: (): boolean => false,
    searchCheck: false,
    setSearchCheck: (): boolean => false,
})

export const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [selected, setSelected] = useState('Top')
    const [query, setQuery] = useState('')

    //used to set state that user is searching
    const [searching, setSearching] = useState(false)

    // used to trigger initial search fetch useEffect
    const [searchCheck, setSearchCheck] = useState(false)

    return (
        <GlobalContext.Provider value={{ selected, setSelected, query, setQuery, searching, setSearching, searchCheck, setSearchCheck }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext)