import { useEffect, useRef , useState} from "react"
import axios from 'axios'
import { CharactersPaginatedResponse , Characters} from "../interfaces/characterInterface"

export const useCharactersPaginated = () => {
    const [isLoading, setIsLoading] = useState(true)
    // mantengo siempre la referencia a la siguiente pagina
    // la primera vez va a tener la primera pagina
    const nextPageCharacters = useRef('https://rickandmortyapi.com/api/character')
    const [characters, setCharacters] = useState<Characters[]>([])

    const loadCharacters = async() => {
        setIsLoading(true)
        const resp = await axios.get<CharactersPaginatedResponse>(nextPageCharacters.current)
        nextPageCharacters.current = resp.data.info.next
        setCharacters([...characters,...resp.data.results])
        setIsLoading(false)
        
    }

    useEffect(() => {
      loadCharacters()
    }, [])
    return {
        isLoading,
        characters,
        loadCharacters
    }
}