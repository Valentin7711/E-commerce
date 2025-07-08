import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../service/firebase';
import '../styles/Checkout.css';

const Checkout = () => {
  const [cliente, setCliente] = useState({});
  const [confirmacionEmail, setConfirmacionEmail] = useState('');
  const [idOrden, setIdOrden] = useState('');
  const [mensajeError, setMensajeError] = useState('');
  const { cart, cartTotal, clearCart } = useCart();

  const manejarCambio = (e) => {
    setCliente({
      ...cliente,
      [e.target.name]: e.target.value,
    });
    setMensajeError('');
  };

  const enviarFormulario = (e) => {
    e.preventDefault();

    const { nombre, apellido, correo, direccion } = cliente;

    if (!nombre || !apellido || !correo || !direccion) {
      setMensajeError('Por favor completá todos los campos.');
    } else if (correo !== confirmacionEmail) {
      setMensajeError('Los correos electrónicos no coinciden.');
    } else {
      const nuevaOrden = {
        comprador: cliente,
        items: cart,
        total: cartTotal,
        fecha: serverTimestamp(),
      };

      const ordenesRef = collection(db, 'orders');

      addDoc(ordenesRef, nuevaOrden)
        .then((res) => {
          setIdOrden(res.id);
          clearCart();
        })
        .catch(() => {
          setMensajeError('Ocurrió un error al procesar tu orden. Intentalo más tarde.');
        });
    }
  };

  return (
    <div className="checkout-container">
      {idOrden ? (
        <div className="success-message">
          <h1>¡Gracias por tu compra!</h1>
          <h3>Tu número de orden es:</h3>
          <strong>{idOrden}</strong>
        </div>
      ) : (
        <form className="checkout-form" onSubmit={enviarFormulario}>
          <h1>Formulario de Compra</h1>

          <input type="text" name="nombre" placeholder="Nombre" onChange={manejarCambio} />
          <input type="text" name="apellido" placeholder="Apellido" onChange={manejarCambio} />
          <input type="text" name="direccion" placeholder="Dirección" onChange={manejarCambio} />
          <input type="email" name="correo" placeholder="Correo electrónico" onChange={manejarCambio} />
          <input
            type="email"
            name="correoConfirmacion"
            placeholder="Repetir correo electrónico"
            onChange={(e) => setConfirmacionEmail(e.target.value)}
          />

          {mensajeError && <p className="error-message">{mensajeError}</p>}

          <button className="btn btn-success" type="submit">
            Finalizar compra
          </button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
