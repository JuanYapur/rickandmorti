import React from 'react';
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Cards from '../Card/Cards';
import CharactersList from '../../specific/CharactersDetails/CharactersList';

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


  
  
  useEffect(() => {
    fechdata();
  }, [id])
  return (  
    <div className='container'>
      <div className='row p-5 gap-5 align-items-start'>
        <Cards character= {character} col ={6}/>
        <CharactersList episodes={character.episode} />
      </div>
    </div>
  )
}

export default CharactersDetails
