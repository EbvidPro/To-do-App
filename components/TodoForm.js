import React from 'react'
import { useState } from 'react'

function TodoForm() {
    const [input, setInput] = useState['']

    return (
        <form>
            <input type="text"
                placeholder="Add a task"
                value={input}
                name="text"
                className="" />
        </form>
    )
}

export default TodoForm