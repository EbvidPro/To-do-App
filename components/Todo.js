import React, { useState, useEffect } from 'react'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'
import TodoForm from './TodoForm'



function Todo({ todos, completeTodo, removeTodo, updateTodo }) {

    // useEffect(() => {
    //     const randColor = ['old-lavender', 'pink-lavender', 'wild-blue', 'mountbatten']
    //     for (let i = 0; i <= randColor.length; i++) {
    //         return randColor[i]
    //     }
    // }, [todos.text])

    const [edit, setEdit] = useState({
        id: null,
        values: ''
    });

    const sumbitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={sumbitUpdate} />;
    }

    return (
        todos.map((todo, index) => {
            return (
                <div key={index} className={todo.isComplete ? 'flex justify-between mt-4 p-4 bg-old-lavender text-white rounded todo-row complete' : 'flex justify-between mt-4 p-4 bg-old-lavender text-white rounded todo-row'}>
                    <div key={todo.id} onClick={() => completeTodo(todo.id)} className='block text-white font-bold '>
                        {todo.text}
                    </div>
                    <div className='flex text-lg'>
                        <RiCloseCircleLine
                            onClick={() => removeTodo(todo.id)}
                            className='w-6 cursor-pointer' />
                        <TiEdit
                            onClick={() => setEdit({ id: todo.id, value: todo.text })}
                            className='cursor-pointer' />
                    </div>
                </div>
            )

        })
    )
}

export default Todo