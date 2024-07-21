import styles from '/src/styles.module.css'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Cards = ({character:{name,image,species,status,id}}) => {
  const {cardText}=styles
  const navigate = useNavigate();
  return (
    <div className="card w-25 h-25 m-2 col-3" onClick={()=>{navigate(`/character/${id}`)}}>
        <img className="card-img-top" src={image} alt="Card image cap"/>
        <div className="card-body">
          <h5 className="card-title">Nombre: {name}</h5>
          <ul>
            <li><p className={cardText}>Especie: {species}</p></li>
            <li><p className={cardText}>Estatus: {status}</p></li>
          </ul>
        </div>
    </div>
    )
}

export default Cards


