import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/ErrorPage.css"

const ErrorPage = () => {
  return (
    <div>
        <h2>Lo siento no existe esta pagina</h2>
        <Link to="/" className='link-inicio'>Volver a Home</Link>
    </div>
  )
}

export default ErrorPage