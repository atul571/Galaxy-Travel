import React from 'react'
import { Link } from 'react-router-dom'

const CallToAction = () => {
  return (
    <section className ="call-to-action">
      <h2>Hurry up book your tickets</h2>
      <Link to='/pricing'>know More! </Link>
    </section>
      
    
  )
}

export default CallToAction
