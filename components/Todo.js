import React, { useState } from 'react'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'
import TodoForm from './TodoForm'



function Todo({ todos, completeTodo, removeTodo }) {

    const [edit, setEdit] = useState({
        id: null,
        values: ''
    })

    return (
        todos.map((todo, index) => {
            return (
                <div key={index} className={todo.isComplete ? 'todo-row complete' : 'todo-row'}>
                    <div key={todo.id} onClick={() => completeTodo(todo.id)} className='block text-black pt-4'>
                        {todo.text}
                    </div>
                    <div className='flex'>
                        <RiCloseCircleLine
                            onClick={() => removeTodo(todo.id)} />
                        <TiEdit onClick={() => setEdit({ id: todo.id, value: todo.text })} />
                    </div>
                </div>
            )

        })
    )
}

export default Todo