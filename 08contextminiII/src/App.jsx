
import './App.css'
import Card from './Components/Card'
import ThemeBtn from './Components/ThemeBtn'
import { ThemeProvider } from './Context/Theme'
import { useEffect,useState } from 'react'

function App() {
  const [themeMode,setThemeMode]= useState("light")
  const darkTheme=()=>{
    setThemeMode("dark")
  }
  const lightTheme=()=>{
    setThemeMode("light")
  }
  useEffect(()=>{
    const themeData= document.querySelector('html');
    themeData.classList.remove("light","dark")
    themeData.classList.add(themeMode)
  },[themeMode])
  return (  
    <>
      <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
        <div className="flex flex-wrap min-h-screen items-center dark:bg-gray-700">
            <div className="w-full">
                <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                    <ThemeBtn/>
                </div>

                <div className="w-full max-w-sm mx-auto">
                    <Card/>
                </div>
            </div>
        </div>

      </ThemeProvider>
    </>
  )
}

export default App
