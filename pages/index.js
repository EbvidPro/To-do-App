import Head from 'next/head'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import TodoList from '../components/TodoList'
import { v4 } from 'uuid';
import TodoForm from '../components/TodoForm';


const LOCAL_STORAGE_KEY = 'todoApp.todo'

export default function Home() {
  // const [todo, setTodo] = useState([])
  // const todoNameRef = useRef()

  // useEffect(() => {
  //   const storedTodo = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  //   if (storedTodo) setTodo(storedTodo)
  //   console.log(storedTodo)
  // }, [])

  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todo))
  // }, [todo])

  // function handleAddTodo(e) {
  //   const name = todoNameRef.current.value
  //   if (name === '') return
  //   setTodo(prevTodo => {
  //     return [...prevTodo, { id: v4(), name: name, complete: false }]
  //   })
  //   todoNameRef.current.value = null
  // }
  // function handleRemoveTodo(e) {

  // }
  return (
    <div className="block m-0 p-0 bg-gray-200">
      <Head>
        <title>To Do App</title>
        <meta name="description" content="To Do list " />
      </Head>
      <main className="flex bg-green-200 m-auto xl:w-1/4 md:w-2/4 w-4/5 text-center">
        <TodoForm />
      </main>
      {/* <main className='pb-24'>
        <TodoList todoList={todo} />
        <input className='border' ref={todoNameRef} type="text" />
        <button className='border bg-black text-white py-1 px-4 ml-2' onClick={handleAddTodo}>Add Item</button>
        <button className='border bg-black text-white py-1 px-4 ml-2' onClick={handleRemoveTodo}>Clear</button>
        <div>
          O left to Do
        </div>
      </main> */}

      <footer className="flex h-24 w-full self-center justify-center border-t">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
