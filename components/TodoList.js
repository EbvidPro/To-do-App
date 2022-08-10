import React from 'react'

export default function TodoList({ todoList }) {
    return (
        <div>
            {todoList.map(todo => {
                return (
                    <div key={todo.id}>
                        <label>
                            <input type='checkbox' />
                            {todo.name}
                        </label>
                    </div>
                )
            })}
        </div>
    )
}
