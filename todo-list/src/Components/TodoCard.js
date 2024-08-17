import React from 'react'
import TodoItem from './TodoItem'
import './todocard.css'

export default function TodoCard() {
  return (
    <div className='todocard'>
      <TodoItem/>
      <TodoItem/>
      <TodoItem/>
      <TodoItem/>
    </div>
  )
}
