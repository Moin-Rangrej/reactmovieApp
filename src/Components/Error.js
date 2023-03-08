import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <div>
      <h1>Page Not Found</h1>
      <NavLink to='/'>Home</NavLink>
    </div>
  )
}

export default Error
