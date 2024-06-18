const Cards = ({cardImage,cardTitle,cardText,cardSearch}) => {
  return (
    <div className="card w-25 h-25">
        <img className="card-img-top" src={cardImage} alt="Card image cap"/>
        <div className="card-body">
          <h5 className="card-title">{cardTitle}</h5>
          <p className="card-text">{cardText}</p>
          <a href="#" className="btn btn-primary">{cardSearch}</a>
        </div>
    </div>
    )
}

export default Cards
