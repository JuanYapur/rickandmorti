import React from 'react'

const CharactersList = ({episodes}) => {
    const createpi = () => episodes?.map((episode, index) => <li key={index}className="list-group-item">{episode}</li>)
  return (
    <ul className="list-group col-4">
        {createpi()}
    </ul>
  )
}

export default CharactersList