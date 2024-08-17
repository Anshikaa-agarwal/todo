import React from 'react'
import TodoItem from './TodoItem'
import Form from './Form'
import './todocard.css'

export default function TodoCard() {
  const handleOnSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div className='container'>

      <div className="heading">Todo List</div>

      <Form handleOnSubmit = {handleOnSubmit}/>

      <div className='todocard'>
        <TodoItem description = "study"/>
      </div>

    </div>
  )
}
