import React from 'react'

const TodoList = ({handleEdit,handleDelete,todos}) => {
  return (
    <ul className='todoList'>
        {
          todos.map((t) => (
            <li className='singleTodo'>
              <span className='singleText' key={t.id}>{t.todo}</span>
              <button onClick={() => handleEdit(t.id)}>Edit</button>
              <button onClick={() => handleDelete(t.id)}>Delete</button>
            </li>
          ))
        } 
      </ul>
  )
}

export default TodoList