import Cards from "../Card/Cards"
import React, {useState,useEffect} from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import Load from "../Load/Load";

const Main = () => {
  const [characters, setCharacters] = useState([])
  const [pages, setPages] = useState(0)
  const [currentPage, setcurrentPage] = useState(1)
  const [loading,setLoading] = useState (false)
  
  
  const handleRequest = async () => {
    setLoading(true)
    try { const {data:{results,info:{pages}}} = await axios.get(`https://rickandmortyapi.com/api/character?page=${currentPage}`)
     setCharacters(results)
     setPages(pages)}
    catch(error) {console.log(error)}
    finally {setLoading(false)}
    }
    useEffect(() => {
      handleRequest();
    }, [currentPage])
    
    
    const createCard = () => characters.map((character) => <Cards key={character.id} character={character}/>)
    const handlepages = (selectedPage) => setcurrentPage (selectedPage +1)
  return (
    
    <div className="container-fluid">
      <div className="row justify-content-center p-3">
        
    {loading ? <Load/> : createCard()}
      </div>
      <div>
    <ReactPaginate
      pageCount={pages}
      onPageChange={(data) => handlepages(data.selected)}
      containerClassName="pagination justify-content-center mt-5"
      activeClassName="active"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      nextClassName="page-item"
      previousLinkClassName="page-link"
      nextLinkClassName="page-link"
      breakClassName="page-item disabled"
      breakLinkClassName="page-link"
    />
  </div>
    </div>
    
  )
}

export default Main
