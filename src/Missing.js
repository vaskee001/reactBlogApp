import React from 'react'
import { Link } from 'react-router-dom'

const Missing = () => {
  return (
    <main className='Missing'>
      <h2>Page not found</h2>
      <p>That's disappointing.</p>
      <Link to='/'> Visit Our Homepage </Link>
    </main>
  )
}

export default Missing