import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { Characters, CharactersPaginatedResponse } from '../interfaces/characterInterface'



export const getCharacterSearch = (name: string) => {

    const [characters, setCharacters] = useState<Characters[]>([])
    


    const loadCharacters = async () => {
        
        try{
        const characters = await axios.get<CharactersPaginatedResponse>(`https://rickandmortyapi.com/api/character/?name=${name}`)
        const totalPages = characters.data.info.pages
        let charactersAll = characters.data.results
        if (totalPages > 1) {
            console.log("entra a if > 1");
            
            for (let i = 2; i <= totalPages; i++) {
                let charactersNextPage= await axios.get<CharactersPaginatedResponse>(`https://rickandmortyapi.com/api/character/?page=${i}&name=${name}`)
                charactersAll = charactersAll.concat(charactersNextPage.data.results);
                console.log("en for:",charactersAll.length)
            }
        }

        if(charactersAll)
            setCharacters(charactersAll)
        }
        catch(error){
            console.log('error:',error);
        }
        console.log(characters?.length);
    }
    
    // const nextPageCharacters = useRef(`https://rickandmortyapi.com/api/character/?name=${name}`)
    // const [characters, setCharacters] = useState<Characters[]>([])
    // const [isLoading, setIsLoading] = useState(true)

    // const loadCharactersByName = async() => {
    //     setIsLoading(true)
    //     const resp = await axios.get<CharactersPaginatedResponse>(nextPageCharacters.current)
    //     nextPageCharacters.current = resp.data.info.next
    //     setCharacters([...resp.data.results])
    //     setIsLoading(false)
    //     console.log("Personajes encontrados:",characters.length);
        
    // }

    // useEffect(() => {
    //     loadCharactersByName()
        
    //     //   queryUrl()
    // }, [name])   
     useEffect(() => {
        loadCharacters()
        
        //   queryUrl()
    }, [])
    return {
        characters,
        // isLoading,
        loadCharacters
    }
}
