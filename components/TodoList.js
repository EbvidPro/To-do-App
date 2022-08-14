import React, { useState } from 'react'
import TodoForm from './TodoForm'

function TodoList() {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        }

        const newTodo = [todo, ...todos]

        setTodos(newTodo)
        console.log(...todos)
    }

    return (
        <div className='text-center italic pt-6'>
            <h1>What&apos;s the Plan for Today</h1>
            <TodoForm onSubmit={addTodo} />
        </div>
    )
}

export default TodoList