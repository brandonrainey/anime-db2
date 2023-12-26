'use server'

export const fetchAnime = async ( page: number ) => {
    const response = await fetch(`https://api.jikan.moe/v4/top/anime?page=${page}&bypopularity`)

    const data = await response.json()

    return data
}