import { useState } from 'react'

import './App.css'



 // create a main funtion of todo app
function App() {
  const [text, setText] = useState("")
  const [todo, setTodo] = useState([])

  
  function addtodo(e) {
    e.preventDefault();
    if (text === "") {
      alert("Enter the value");
      return; // Stop execution if text is empty
    }

    // Create a new array with the current todos and the new todo
    const newTodoList = [...todo, text];
    
    // Update the state with the new array
    setTodo(newTodoList);
    
    // Reset the text input
    setText("");
    
    console.log(newTodoList);
  }
  
  // delete itme of a todo arry
  function deletetodo(index){
    const newarr = [...todo]
    newarr.splice(index , 1)
    console.log(newarr);    
    setTodo(newarr)
    
  }
  
  // edite a itme of a todo arry
  function edittodo(index){
    const newarr = [...todo]
    let edit = prompt("enter your todo")
    if(edit === ""){
      alert("enter any value")
      return;
    }
    newarr[index]= edit
    setTodo(newarr)
  }
  
  
  // returns the funtion of todoapp 
  return (
    // create a simple div 
    <>
      <h1 class="heading">Todo-App</h1>
      <form class="form" onSubmit={addtodo}>
        <input onChange={(e)=> setText(e.target.value)} value={text} type="text" placeholder='Enter your todo' class="user_input" />
        <button type='submit' class="submit-btn">Submit</button>
      </form>
      <ul class="li-div">
        {todo.map((item , index)=>{
        // create a  returns funcion in list 
          return (
            <li key={index} class="todo-li">  {item} <button class="del" onClick={()=>{deletetodo(index)}}>Delete</button><button class="edit" onClick={()=>{edittodo(index)}}>Edit</button></li>
            )
        })}
      </ul>
    </>
  )
}

export default App




