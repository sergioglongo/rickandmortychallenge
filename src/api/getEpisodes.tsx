import axios from 'axios'
import React , {useEffect, useState} from 'react'
import { Episodes , Episode} from "../interfaces/episodeInterface"

export const getEpisodes = (episodesIds:string[]) => {

    const [episodesState, setEpisodesState] = useState<Episode[]>([])
    let arrayToCommas = ''
    episodesIds.map(id=> (arrayToCommas = arrayToCommas + id +',')
    )
    arrayToCommas = arrayToCommas.slice(0,-1)
    
    const loadEpisodes = async() => {
        const episodes = await axios.get(`https://rickandmortyapi.com/api/episode/${arrayToCommas}`)
        if(episodes.data[0])    
            setEpisodesState(episodes.data)
        else
            setEpisodesState([episodes.data])
        
    }
    
    useEffect(() => {
      loadEpisodes()
    }, [])

    return {
        episodesState
    }
}
