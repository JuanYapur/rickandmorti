import styles from '/src/styles.module.css'

const Cards = ({character:{name,image,species,status}}) => {
  const {cardText}=styles
  return (
    <div className="card w-25 h-25 m-2 col-3">
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
