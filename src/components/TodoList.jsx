import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, setTodos }) => {
  

  return (
    <div 
    className='flex items-center justify-center'>
      <ul 
      className='flex flex-col items-start text-white py-4 cursor-pointer'>
        
        {todos.map( (todo) => (
          <Todo 
          key={todo.id} 
          text={todo.text}
          setTodos={setTodos}
          todos={todos}
          todo={todo}
          />
        ))}
      
      </ul>
    </div>
  )
}

export default TodoList