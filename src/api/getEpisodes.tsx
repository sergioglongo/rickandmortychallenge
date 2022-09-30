import axios from 'axios'
import React , {useEffect, useState} from 'react'
import { Episodes , Episode} from "../interfaces/episodeInterface"



export const getEpisodes = () => {

    const [episodesState, setEpisodesState] = useState<Episode[]>([])

    const loadEpisodes = async() => {
        const episodes = await axios.get<Episodes>('https://rickandmortyapi.com/api/episode/')
        setEpisodesState(episodes.data.results)
    }

    useEffect(() => {
      loadEpisodes()
    }, [])

    return {
        episodesState
    }
}
