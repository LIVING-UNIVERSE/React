import { useState } from 'react'

import './App.css'
import Card from '../components/Card'

function App() {
  const obj1={
    year:2024
  }
  const obj2={
    year:2045
  }

  return (
    <>
      <h1 className='bg-green-400 p-4 rounded-md text-black'>Taiwind</h1>
      <Card username="living-universe" ></Card>
      <Card username="sanjeev-gupta" ></Card>
    </>
  )
}

export default App
