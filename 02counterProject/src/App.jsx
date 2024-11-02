import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  let [counter,setCounter]= useState(10);
  const addValue=()=>{
    if(counter<20 && counter>=0){
      counter++;
      setCounter(counter)
    }
  }
  const subtractValue=()=>{
    if(counter<=20 && counter>0){
      counter--;
      setCounter(counter)
    }
  }
  return (
    <>
      <h1>COUNTER APP</h1>
      <h3>This is a counter app </h3>
      <h1>{counter}</h1>
      <button onClick={addValue}>increment</button>
      <hr></hr>
      <button onClick={subtractValue}>decrement</button>
      <p>this is a paragraph tag ensuring the proper propagation of the counter variable : {counter}</p>
    </>
  )
}

export default App
