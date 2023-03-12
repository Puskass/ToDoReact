import React from 'react'

const Todo = ({ text, todo, todos, setTodos }) => {
  //Events
  const deleteHandler = () => {
     setTodos(todos.filter((el) => el.key !== todo.key)); 
  };

  const completeHandler = () => {
    setTodos(todos.map((item) => {
      if(item.id === todo.id){
        return {
          ...item, completed: !item.completed
        }
      }
      return item;
    }));
  };

  return (
    <div className='flex py-2'>

      <li className='bg-purple-875 rounded-md py-2 px-4'>
        {text}
      </li>
      
      <button onClick={completeHandler}
      className= 'bg-green-600 p-2 ml-3 rounded-md'>
        <i className='fas fa-check'></i>
      </button>
      
      <button onClick={deleteHandler}
      className='bg-red-600 p-2 ml-3 rounded-md'>
        <i className='fas fa-trash'></i>
      </button>

      </div>
  )
}

export default Todo