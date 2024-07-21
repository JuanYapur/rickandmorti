import React from 'react';
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';

const CharactersDetails = () => {
  const [character,setCharacter] = useState({})

  const {id}  = useParams();
  const fechdata = async () => {
    try {
      const {data} = await axios(`https://rickandmortyapi.com/api/character/${id}`);
      setCharacter(data)
      console.log(data)
    }
    catch(error) {console.log('error')}
  }
  console.log(character)
  useEffect(() => {
    fechdata();
  }, [id])
  return (  
    <div>rey</div>
  )
}

export default CharactersDetails
