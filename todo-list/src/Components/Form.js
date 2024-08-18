import React from 'react'
import './form.css'

export default function Form(props) {
  return (
    <form className='form' onSubmit={props.handleOnSubmit}>
      <input type="text" className='input' name='input'/>
      <button type='submit'>Add</button>
    </form>
  )
}
