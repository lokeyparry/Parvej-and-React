import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  let [counter, setCounter] = useState(15)

 

  const addvalue = ()=>{
    console.log("clicked ", counter);
    // counter= counter+1
    setCounter(counter+1)
  }
  const removeValue = ()=>{
  
    setCounter(counter-1)
    console.log("clicked ", counter);
  }

  return (
    <>
     <h1>React with | Lokey Parry</h1>
     <h2>counter value: { counter}</h2>
     <button
     onClick={addvalue}>Add Value{counter}</button>
     <br />
     <button
     onClick={removeValue}>Remove value {counter}</button>
    </>
  )
}

export default App
