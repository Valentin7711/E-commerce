import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/EmpyCart.css"

const EmpyCart = () => {
  return (
    <div className='empy-cart'>
      <h2>Tu carrito está vacío</h2>
      <Link to="/" className='inicio'>
        Ir al Inicio a ver las Ofertas...
      </Link>
    </div>
  );
};

export default EmpyCart;
