import React from 'react'
import "./todo.css" ;
import ToDoCard from './ToDoCard';
export default function ToDoList(props) {
   const {toDos} = props;
  return (
    <ul className='list-menu'>
       {toDos.map((todo,todoIndex)=>{
        return (
         <ToDoCard {...props} index={todoIndex}>
         <p>{todo}</p>
         </ToDoCard>
            
        )
       })}
    </ul>
  )
}
