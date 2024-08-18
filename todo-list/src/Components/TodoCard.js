import React, { useState } from 'react'
import TodoItem from './TodoItem'
import Form from './Form'
import './todocard.css'

export default function TodoCard() {

  const [todo, setTodo] = useState([]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const description = e.target['input'].value;
    if(description) {
      const newTodo = {
        description: description,
      }

      setTodo([...todo, newTodo]);
      e.target.reset();
    }
  }

  const handleEditSubmit = (index, newDescription) => {
    const updatedTodo = [...todo];
    updatedTodo[index].description = newDescription;
    setTodo(updatedTodo);
  };
  

  const handleDelete = (index) => {
    const updatedTodo = todo.filter((_, i) => i !== index);
    setTodo(updatedTodo);
  }
  return (
    <div className='container'>

      <div className="heading">Todo List</div>

      <Form handleOnSubmit = {handleOnSubmit}/>

      <div className='todocard'>
        {todo.map((todos, index) => (
          <TodoItem
          key={index}
          description={todos.description}
          onDelete={() => handleDelete(index)}
          onEdit={(newDescription) => handleEditSubmit(index, newDescription)}
        />        
        ))}
      </div>

    </div>
  )
}
