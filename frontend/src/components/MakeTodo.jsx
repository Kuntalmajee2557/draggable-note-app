import React from 'react'
import Tag from './Tag'
import Button from './Button'

function MakeTodo() {
    return (
        <div className='flex flex-col justify-center items-center gap-3 border border-red-500 w-full h-1/3'>
            <input type="text" placeholder='Enter your task' className='w-1/2 p-2 rounded-md' />
            <div className='flex flex-row text-white justify-between items-center border border-purple-600 w-1/2' >
                <div left className='flex flex-row'>
                    <Tag className='ml-0'>html</Tag>
                    <Tag>css</Tag>
                    <Tag>javascript</Tag>
                    <Tag>React</Tag>
                </div>
                <div right className='flex flex-row'>
                <select name="cars" id="cars" className='text-black px-3 py-2 rounded-md mx-1'>
                    <option value="todo">To do</option>
                    <option value="doing">Doing</option>
                    <option value="done">Done</option>
                </select>
                <Button className='bg-green-500 py-1 mr-0'>Add Task</Button>
                </div>

                
            </div>
        </div>

    )
}

export default MakeTodo