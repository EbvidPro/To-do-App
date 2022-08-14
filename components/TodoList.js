import React, { useState } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

function TodoList() {
    const [todos, setTodos] = useState([])

    function addTodo(todo) {
        /* Checking if the input is empty or only contains white space. */
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        }

        /* Adding the new todo to the beginning of the array. */
        const newTodo = [todo, ...todos]

        setTodos(newTodo)
    }

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos)
    }

    return (
        <div className='text-center italic pt-6'>
            <h1>What&apos;s the Plan for Today</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo todos={todos} completeTodo={completeTodo} />
        </div>
    )
}

export default TodoList