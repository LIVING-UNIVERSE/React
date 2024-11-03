import { useState ,useCallback, useEffect, useRef} from 'react'

import './App.css'


function App() {
  const [length,setLength]=useState(8)
  const [numberAllowed,setNumber]=useState(false)
  const [charAllowed, setChar]= useState(false)
  const [password,setPassword]= useState("")

  const passwordRef = useRef(null)

  
  const copytoClipboard= useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  const passwordGenerator = useCallback(()=>{
    let pass=""
    let str="QWERTYUIOPASDFGHJKLZXCVBNMmnbvcxzlkjhgfdsapoiuytrewq"
    if(numberAllowed) str+='0123456789'
    if(charAllowed) str+="~!@#$%^&*(){}+_:><?" 
    for(let i=0; i<length;i++){
      let index= Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(index)
    }
    setPassword(pass)

  },[length,numberAllowed,charAllowed,setPassword])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])
  return (
    <>
      <div className='w-full  mx-auto shadow-md rounded-lg p-4 font-medium my-8 text-orange-400 bold bg-gray-500 '>
        <h1 className='p-4 text-white text-centre'>PASSWORD GENERATOR</h1>
        <div className='flex shadow rounded-lg  mb-4 overflow-hidden'>
          <input type='text' 
          placeholder='PASSWORD' 
          readOnly 
          value={password}
          ref={passwordRef}
          className='outline-none w-full py-1 px-3 rounded-l-lg bg-white '></input>
          <button
          className=' outline-none border-none bg-blue-500  text-white text-lg font-semibold
          px-6 py-2 rounded-sm cursor-pointer' onClick={copytoClipboard}>Copy</button>
        </div>
        <div className='w-full flex mx-auto justify-between px-6'>
          <div className='flex justify-center align-middle '>
            <input type='range'
             min={6} 
             max={20} 
            className='cursor-pointer' 
            value={length} 
            onChange={(e)=>{
              setLength(e.target.value)}}>
              </input>
            <label className='text-lg px-2'> Length: {length}</label>
          </div>
          <div>
            <input type='checkbox' 
            defaultChecked={numberAllowed}
            id='numberInput'
            className='bg-white'
            onChange={()=>{
              setNumber((prev)=>!prev)}
            }></input>
            <label
            className='px-2'
            htmlFor='numberInput'>Include Numbers</label>
          </div>
          <div>
            <input type='checkbox' 
            defaultChecked={charAllowed}
            id='charInput'
             onChange={()=>{
              setChar((prev)=>!prev)}
            }></input>
            <label
            className='px-2'
            htmlFor='charInput'>Include Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
