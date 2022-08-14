import React, { useRef } from 'react'
import { useState } from 'react'


function TodoForm({ onSubmit }) {
    const [input, setInput] = useState([])
    const todoNameRef = useRef()

    function handleChange() {
        setInput(todoNameRef.current.value);
    }

    const handleSubmit = e => {
        /* Preventing the default action of the form from happening. */
        e.preventDefault();
        setInput("")
        onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })
    }

    return (
        <form className='pt-1' onSubmit={handleSubmit}>

            <input type="text"
                placeholder="Add a task"
                value={input}
                name="text"
                ref={todoNameRef}
                onChange={handleChange}
                className="border border-black font-xl p-1 bg-yellow-200 rounded" />
            <button className="bg-blue-600 text-white font-bold py-1 px-2">Add Task</button>
        </form>
    )
}

export default TodoForm