import React from 'react'

function Tag({className, children}) {
  return (
    <p className={`px-2 py-0 rounded-sm bg-white text-black mx-2 ${className}`} >{children}</p>
  )
} 

export default Tag