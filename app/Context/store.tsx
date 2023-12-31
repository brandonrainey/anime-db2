'use client'

import { createContext, useContext, useState } from 'react'

interface ContextProps {
    selected: string
    setSelected: React.Dispatch<React.SetStateAction<string>>
}

const GlobalContext = createContext<ContextProps>({
    selected: '',
    setSelected: (): string => '',
})

export const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [selected, setSelected] = useState('Top')

    return (
        <GlobalContext.Provider value={{ selected, setSelected }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext)