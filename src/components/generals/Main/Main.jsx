import Cards from "../Card/Cards"

const Main = () => {
  return (
    <div className="d-flex justify-content-center align-item-center col-7 gap-3 p-2">
      <Cards cardImage={"https://rickandmortyapi.com/api/character/avatar/120.jpeg"} cardTitle={"Evil Summer Clone"} cardText={"Meeseeks and Destroy"} cardSearch={"Ver"}/>
      <Cards cardImage={"https://rickandmortyapi.com/api/character/avatar/361.jpeg"} cardTitle={"Toxic Rick"} cardText={"Rest and Ricklaxation"} cardSearch={"Ver"}/>
      <Cards cardImage={"https://rickandmortyapi.com/api/character/avatar/436.jpeg"} cardTitle={"Giant Testicle Monster"} cardText={"Ricksy Business"} cardSearch={"Ver"}/>
      <Cards cardImage={"https://rickandmortyapi.com/api/character/avatar/437.jpeg"} cardTitle={"Michael"} cardText={"A Rickle in Time"} cardSearch={"Ver"}/>
    </div>
  )
}

export default Main
