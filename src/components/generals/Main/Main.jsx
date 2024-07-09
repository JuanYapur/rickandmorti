import Cards from "../Card/Cards"
import React, {useState,useEffect} from 'react'
import axios from 'axios'

const Main = () => {
  const [characters, setCharacters] = useState([])
  const [pages, setPages] = useState(0)
  const handleRequest = async () => {
    try { const {data:{results,info:{pages}}} = await axios.get("https://rickandmortyapi.com/api/character")
     setCharacters(results)
     setPages(pages)}
    catch(error) {console.log(error)}
    finally {}
    }
    useEffect(() => {
      handleRequest();
    }, [])
    const createCard = () => characters.map((character) => <Cards key={character.id} character={character}/>)
  return (
    <div>
    {createCard()}
    
      </div>
  )
}

export default Main
