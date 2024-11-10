import { useState ,useEffect} from 'react'
// import { TodoProvider } from './context/index.js'
import { TodoProvider } from './context/TodoContext.js';
// import './context/index.js'
import TodoForm from './components/TodoForm.jsx';
import TodoItem from './components/TodoItem.jsx';

function App() {
  const [todos,setTodos] = useState([]);
  const addTodo = (todo)=>{
    setTodos((prevTodos)=>(
      [{id:Date.now(),...todo},...prevTodos]))
  }
  const updateTodo = (id,todo)=>{
    setTodos((prevTodos)=>prevTodos.map(
      (prevTodo)=>(prevTodo.id === id ? todo: prevTodo)))
  }
  const deleteTodo = (id)=>{
    setTodos((prevTodos)=>prevTodos.filter((prevTodo)=>prevTodo.id !== id))
  }
  const toggleComplete =(id)=>{
    setTodos((prevTodos)=>prevTodos.map(
      (prevTodo)=>(prevTodo.id === id ? 
        {...prevTodo, completed:!prevTodo.completed}: prevTodo)
    ))
  }

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length>0){
      setTodos(todos);
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
    <TodoProvider value={{todos,updateTodo,deleteTodo,toggleComplete,addTodo}}>
      <div className=" min-h-screen py-8 bg-cover "
      style={{backgroundImage:'url(https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)'}}>
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
              <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
              <div className="mb-4">
                  <TodoForm/>
              </div>
              <div className="flex flex-wrap gap-y-3">
                  
                  {todos.map((todo)=>(
                    <div className='w-full'
                    key={todo.id}>
                      <TodoItem todo={todo}/>
                    </div>
                  ))}
              </div>
          </div>
      </div>
    </TodoProvider>
  )
}

export default App
