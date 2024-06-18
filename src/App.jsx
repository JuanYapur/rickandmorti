import Navbar from './components/generals/Navbar/Navbar'
import Main from './components/generals/Main/Main'
import React, {useState,useEffect} from 'react'
import axios from 'axios'


function App() {
  const [characters, setCharacters] = useState([])

  //Todo lo que se ejecuta en useEffect se ejecuta una o mas veces dependiendo como lo configuremos, pero se ejecuta una vez que se ejecuta todo el codigo
  useEffect(() => {
    // fetch("https://rickandmortyapi.com/api/character")
    //   .then((result)=>result.json())
    //   .then((data)=> setCharacters(data.results))
    //   .catch((error)=> console.log(error))
    axios("https://rickandmortyapi.com/api/character") //con axios hago la solicitud http y realizo
      .then((data)=> setCharacters(data.data.results)) //con then y catch resuelvo la promesa 
      .catch((error)=> console.log(error))
    }, [])
 
    
  // const [count,setCount] = useState(0); //uso de los hook (estados), reciben dos argumentos, uno es el estado y el otro el metodo que cambia su valor
  // const handleCount = () => setCount(count+1)

  // const [hora, setHora] = useState(new Date())
  
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setHora(new Date())
  //   },1000) //setInterval ejecuta el bloque de codigo en bucle    
  //   }, [])
  
  return (
    <>
    <Navbar/>
    <Main/>
    {/* <div className='d-flex flex-column justify-content-center align-items-center'>
      <p>Hora Actual: {hora.toLocaleTimeString()}</p>
    </div> */}
    {/* <div className='d-flex flex-column justify-content-center align-items-center'> 
      <p>{count}</p>
      <button className="btn btn-primary" onClick={handleCount}>Incrementar</button>
    </div> */}
    </>
  )
}

export default App
