import React, { useState } from "react"
import Form from "./components/Form"
import TodoList from "./components/TodoList"

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="w-full h-screen bg-gradient-to-r from-background-from to-background-to flex flex-col justify-center items-center">
     <h1>Novi dan nova nafaka</h1>
     
     <Form 
     inputText={inputText}
     todos={todos} 
     setTodos={setTodos} 
     setInputText={setInputText} />
     
     <TodoList />
    
    </div>
  )
}

export default App
