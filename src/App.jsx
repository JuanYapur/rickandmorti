import './App.css'
import Navbar from './components/generals/Navbar/Navbar'
import React, {useState,useEffect} from 'react';


function App() {
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
