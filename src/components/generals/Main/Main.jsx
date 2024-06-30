import Cards from "../Card/Cards"
import React, {useState,useEffect} from 'react'
import axios from 'axios'

const Main = () => {
  const [characters, setCharacters] = useState([])
  const handleRequest = async () => {
    try { const {data:{results}} = await axios.get("https://rickandmortyapi.com/api/character")
     setCharacters(results)}
    catch(error) {console.log(error)}
    }
    useEffect(() => {
      handleRequest();
    }, [])
  return (
    <div>
    {characters.map((character) => <Cards key={character.id} character={character}/>)}
    </div>
  )
}

export default Main
