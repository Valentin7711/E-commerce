import { useCart } from "../context/CartContext";
import EmpyCart from "./EmpyCart";
import "../styles/Cart.css"
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    cart,
    removeItem,
    clearCart,
    cartTotal,
    totalItems
  } = useCart();

  if (cart.length === 0) {
    return <EmpyCart />;
  }

  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id} className="cart-item">
            <img src={`/img/${item.img}`} alt={item.name} />
            <div>
              <h4>{item.name}</h4>
              <p>Cantidad: {item.cantidad}</p>
              <p>Precio individual: ${item.price}</p>
              <p>Subtotal: ${item.price * item.cantidad}</p>
              <button onClick={() => removeItem(item.id)}>Eliminar Producto</button>
            </div>
          </li>
        ))}
      </ul>
      <hr />
      <p>Total de productos: {totalItems}</p>
      <p>Total a pagar: ${cartTotal}</p>
      <button onClick={clearCart} className="btn-vaciar">Vaciar Carrito</button>
      <Link className="btn-finalizar" to="/checkout">Finalizar Compra</Link>
    </div>
  );
};

export default Cart;
