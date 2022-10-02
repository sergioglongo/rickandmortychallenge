import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Characters } from '../interfaces/characterInterface'



export const getCharacterSearch = (name: string) => {

    const [charactersState, setcharactersState] = useState<Characters[]>([])

    const loadEpisodes = async () => {
        try{
        const characters = await axios.get(`https://rickandmortyapi.com/api/character/?name=${name}`)
        if(characters?.data?.results)
            setcharactersState(characters.data.results)
            
        }
        catch(error){
            console.log('error:',error);
            
        }
        console.log(charactersState?.length);
    }
    
    useEffect(() => {
        loadEpisodes()
        
        //   queryUrl()
    }, [name])
    return {
        charactersState
    }
}
