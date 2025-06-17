import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div>
        <h2>Lo siento no existe esta pagina</h2>
        <Link to="/" className='btn btn-primary'>Volver a Home</Link>
    </div>
  )
}

export default ErrorPage