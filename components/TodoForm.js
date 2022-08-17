import React, { useRef } from 'react'
import { useState, useEffect } from 'react'


function TodoForm({ onSubmit, edit }) {
    const [input, setInput] = useState(edit ? edit.value : [])
    const todoNameRef = useRef()

    useEffect(() => {
        todoNameRef.current.focus()
    })

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
        <form className='pt-1' onSubmit={handleSubmit} autoComplete="off">
            {edit ? (
                <>
                    <input type="text"
                        placeholder="Update Task"
                        value={input}
                        name="text"
                        ref={todoNameRef}
                        onChange={handleChange}
                        className="border border-transparent font-xl p-1 bg-yellow-200 rounded" />
                    <button className="bg-blue-200 text-black font-bold py-1 px-2 ml-2 mt-2 xl:mt-0 md:mt-0 ">Update</button>
                </>
            ) : (
                <>
                    <input type="text"
                        placeholder="Add a task"
                        value={input}
                        name="text"
                        ref={todoNameRef}
                        onChange={handleChange}
                        className="border border-transparent font-xl p-1 bg-pink-lavender rounded" />
                    <button className="bg-old-lavender text-white font-bold py-1 px-2 ml-2 mt-2 xl:mt-0 md:mt-0 ">Add Task</button>
                </>
            )}

        </form>
    )
}

export default TodoForm