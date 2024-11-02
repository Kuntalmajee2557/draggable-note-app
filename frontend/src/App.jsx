import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MakeTodo from './components/MakeTodo'
import ShowTodo from './components/ShowTodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-black h-screen w-vw flex flex-col justify-normal items-center border border-fuchsia-600'>
      <MakeTodo />
      <ShowTodo />
    </div >
  )
}

export default App
