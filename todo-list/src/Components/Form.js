import React from 'react'

export default function Form(props) {
  return (
    <div className='form' onSubmit={props.handleOnSubmit}>
      <input type="text" className='input' />
      <button type='submit'>Add</button>
    </div>
  )
}
