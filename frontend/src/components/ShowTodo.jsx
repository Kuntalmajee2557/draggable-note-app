import React from 'react'
import DoSection from './DoSection'

function ShowTodo() {
  return (
    <div className='border border-green-500 w-full h-2/3 flex flex-row justify-between gap-5 px-5' >
        <DoSection />
        <DoSection />
        <DoSection />

    </div>
  )
}

export default ShowTodo