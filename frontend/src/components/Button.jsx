import React from 'react'

function Button({className, children}) {
  return (
    <button className={`text-white px-3 py-2 rounded-md mx-1 bg-white ${className}`}>{children}</button>
  )
}

export default Button