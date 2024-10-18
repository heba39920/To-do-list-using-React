import React, { useState, useEffect } from 'react';
import "./todo.css" ;
import ToDoList from './ToDoList';
export default function ToDoInput() {
  const [todoValue , setTodoValue] = useState("");
    const [toDos,setToDos]= useState([]);
    function getData(newList){
        localStorage.setItem("todos", JSON.stringify({toDos:newList}));
    }
    function addWish(newWish){
       if (todoValue !== ""){
        const NewTodos =[...toDos, newWish];
        getData(NewTodos)
        setToDos(NewTodos)
        setTodoValue("");
       }
    } 
function deleteWish(index){
  const newToDoList = toDos.filter((todo, todoIndex)=>{
     return todoIndex !== index;
  })
  
  setToDos(newToDoList);
  getData(newToDoList);
}

function updateWish(index){
const  editedValue = toDos[index];
setTodoValue(editedValue);
deleteWish(index);
}

useEffect(()=>{
     if(!localStorage)
     {
        return;
     }
        let localTodos = localStorage.getItem("todos");
        if (!localTodos){
         return;
        }
        localTodos =   JSON.parse(localTodos).toDos;
        setToDos(localTodos);
},[])

  return (
    <div className='list'>
    <div className='list-body'>
    <h1>to do list</h1>
    <div className='form'>
         <input value={todoValue} onChange={(e)=>{
            setTodoValue(e.target.value);      
         }} className='ToDoInput' type="text" placeholder='to do...' /> 
     <button className='add' onClick={()=>{
        addWish(todoValue);
     }}>Add</button></div>
     <ToDoList toDos = {toDos} deleteWish = {deleteWish} updateWish = {updateWish}/>
    </div>
    </div>
  )
}
