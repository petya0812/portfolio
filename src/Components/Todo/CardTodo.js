import { useState } from 'react'

export const CardTodo = ({ todoId, text, removeTodo }) => {
  const [isChecked, setChecked] = useState(false)

  return (
    <div className='todo mui-panel'>
      <input
        value={isChecked}
        onChange={(e) => setChecked(!isChecked)}
        className='mui-checkbox'
        type='checkbox'
      />
      <p className={isChecked ? 'through' : ''}>{text}</p>
      <span
        onClick={() => {
          removeTodo(todoId)
        }}
      >
        &times;
      </span>
    </div>
  )
}