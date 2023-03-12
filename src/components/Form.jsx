import React from 'react'

const Form = ({ setInputText, todos, setTodos, inputText }) => {
    
    const inputTextHandler = (e) =>{
        console.log(e.target.value);
        setInputText(e.target.value);
    };

    const submitFormHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText, id: Math.random() * 1000 }
        ]);
        setInputText("");
    };

    return (
    
    <form className='flex justify-center items-center'>
        
        <input onChange={inputTextHandler} value={inputText} type="text"  
        className='p-2 border-none outline-none bg-white'/>
        
        <button onClick={submitFormHandler} type="submit" 
        className='bg-purple-btn p-2 transition ease-in delay-100 hover:bg-purple-btn-hov'>
          <i className="fas fa-plus-square"></i>
        </button>
    
    </form>
  )
}

export default Form