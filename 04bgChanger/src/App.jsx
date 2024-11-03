import { useState } from 'react'




function App() {

  const [color, setColor]=useState("#212121")
  return (
    <div className='w-screen h-screen  duration-200   p-10 }' style={{backgroundColor:color}}  >
        <div className='w-full flex flex-wrap text-center align-middle rounded-xl p-1 gap-2 justify-between px-10 bottom-4' style={{backgroundColor:"white"}}>
            <button style={{backgroundColor:"red"}} className='border-none py-1 drop-shadow-lg' onClick={()=>{setColor("red")}} >red</button>
            <button style={{backgroundColor:"orange"}} className='border-none py-1 drop-shadow-lg' onClick={()=>{setColor("orange")}} >orange</button>
            <button style={{backgroundColor:"lavender"}} className='border-none py-1 drop-shadow-lg' onClick={()=>{setColor("lavender")}} >lavender</button>
            <button style={{backgroundColor:"blue"}} className='border-none py-1 drop-shadow-lg' onClick={()=>{setColor("blue")}} >blue</button>
            <button style={{backgroundColor:"green"}} className='border-none py-1 drop-shadow-lg' onClick={()=>{setColor("green")}} >green</button>
            <button style={{backgroundColor:"yellow"}} className='border-none py-1 drop-shadow-lg' onClick={()=>{setColor("yellow")}} >yellow</button>
            <button style={{backgroundColor:"pink"}} className='border-none py-1 drop-shadow-lg' onClick={()=>{setColor("pink")}} >pink</button>
            <button style={{backgroundColor:"indigo"}} className='border-none py-1 drop-shadow-lg' onClick={()=>{setColor("indigo")}} >indigo</button>
            <button style={{backgroundColor:"teal"}} className='border-none py-1 drop-shadow-lg' onClick={()=>{setColor("teal")}} >teal</button>

        </div>
    </div>
  )
}

export default App
