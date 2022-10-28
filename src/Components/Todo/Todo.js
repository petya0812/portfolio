import "./Todo.scss"
import { useState } from "react"

import { CardTodo } from "./CardTodo"
import container from '../../hoc/container'

function Todo() {
  const [inputValue, setInputValue] = useState("")

  const [todoList, setTodoList] = useState([
    { text: "Добавить запись!", todoId: "0" },
  ])

  const addTodo = (text, todoId) => {
    setTodoList([...todoList, { text, todoId }])
  }

  const removeTodo = (todoId) => {
    setTodoList(todoList.filter((todo) => todo.todoId !== todoId))
  }

  return (
    <div className='Todo'>
      <div className='addTodos'>
        <div className='mui-textfield mui-textfield--float-label'>
          <input
            value={inputValue}
            onChange={(e) => {
              if (e.target.value.length < 23) {
                setInputValue(e.target.value)
              }
            }}
            type='text'
          />
          <label>Приготоваить ужин</label>
        </div>
        <button
          onClick={() => addTodo(inputValue, todoList.length)}
          disabled={!inputValue}
          className='mui-btn mui-btn--primary'
        >
          Добавить
        </button>
      </div>
      <div className='todos'>
        {todoList.map(({ text, todoId }) => (
          <CardTodo
            text={text}
            key={todoId}
            removeTodo={() => removeTodo(todoId)}
          />
        ))}
      </div>
    </div>
  )
}

export default container(Todo, 'center')
