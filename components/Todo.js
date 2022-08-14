import React, { useState } from 'react'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'
import TodoForm from './TodoForm'



function Todo({ todos, completeTodo }) {

    const [edit, setEdit] = useState({
        id: null,
        values: ''
    })

    return todos.map((todo, index) => {
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
            <div key={todo.id} className='block text-black'>
                {todo.text}
                {console.log(todo.text)}
            </div>
            <div>
                <RiCloseCircleLine />
                <TiEdit />
            </div>
        </div>
    })
}

export default Todo