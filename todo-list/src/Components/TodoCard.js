import React from 'react'
import TodoItem from './TodoItem'
import './todocard.css'

export default function TodoCard() {
  return (
    <div className='container'>

      <div className="heading">Todo List</div>

      <div className='todocard'>
        <TodoItem description = "study"/>
      </div>

      
    </div>
  )
}
