import React from 'react';
import "./todo.css" ;
export default function ToDoCard(props) {
    const {children , deleteWish ,index,updateWish} = props;
  return (
    <li className='list-order'>
    {children}
    <div className='actionsContainer'>
   <button className='icon' onClick={()=>{
          updateWish(index);
   }}><i className="fa-solid fa-pen-to-square "></i></button>
    <button className='icon' onClick={()=>{
        deleteWish(index)
    }}><i className="fa-solid fa-trash "></i></button>
    </div>
     </li>
  );
};
