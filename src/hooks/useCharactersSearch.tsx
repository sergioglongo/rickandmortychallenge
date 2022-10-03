import React , {useState} from 'react'
import axios from "axios";

const useCharactersSearch = async (searchTerm:string) => {
    const [characters, setCharacters] = useState('')
    
    const loadCharacters = async () => {
        try{
        const characters = await axios.get(`https://rickandmortyapi.com/api/character/?name=${searchTerm}`)
        if(characters?.data?.results)
            setCharacters(characters.data.results)
        }
        catch(error){
            console.log('error:',error);
        }
        console.log(characters?.length);
    }
    // .then(data => {

    //     let characters = data.results;

    //     const totalPages = data.info.pages;

    //     if (totalPages > 1) {

    //         for (let i = 2; i <= totalPages; i++) {

    //             let page = i;
    //             fetch(`https://rickandmortyapi.com/api/character/?page=${i}&name=${searchTerm}`)
    //                 .then(res => res.json())
    //                 .then(data => {

    //                     characters = characters.concat(data.results);

    //                 })
    //         }

    //     }
    //     return characters
    // })
    
    return {
        characters,
        loadCharacters
    } 
    
   
}
export default useCharactersSearch
