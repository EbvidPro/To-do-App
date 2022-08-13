import React from 'react'
import { useState } from 'react'

function TodoForm() {
    const [input, setInput] = useState([])

    return (
        <form className='pt-6'>
            <input type="text"
                placeholder="Add a task"
                value={input}
                name="text"
                className="border border-black font-xl p-1 bg-yellow-200 rounded" />
            <button className="bg-blue-600 text-white font-bold py-1 px-2">Add Task</button>
        </form>
    )
}

export default TodoForm