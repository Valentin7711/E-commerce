import { useCart } from "../context/CartContext";
import EmpyCart from "./EmpyCart";
import "../styles/Cart.css"
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

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

  const preConfirm = () => {
    Swal.fire ({
      title:"¿Estas seguro de vaciar el carrito?",
      showDenyButton: true,
      denyButtonText: "No",
      confirmButtonText:"Si"
    }).then((result) => {
      if(result.isConfirmed){
        clearCart()
        Swal.fire("Carrito eliminado", "El carrito fue eliminado con éxito.", "success");
      }else if(result.isDenied){
        Swal.fire("Operación cancelada", "El carrito no se vació.", "info");
      }
    })
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
              
              <button onClick={() => {
  Swal.fire({
    title: `¿Eliminar ${item.name} del carrito?`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'Cancelar',
  }).then((result) => {
    if (result.isConfirmed) {
      removeItem(item.id);
      Swal.fire('Eliminado', `${item.name} fue eliminado del carrito.`, 'success');
    }
  });
}}>
  Eliminar Producto
</button>

            </div>
          </li>
        ))}
      </ul>
      <hr />
      <p>Total de productos: {totalItems}</p>
      <p>Total a pagar: ${cartTotal}</p>
      <button onClick={preConfirm} className="btn-vaciar">Vaciar Carrito</button>
      <Link className="btn-finalizar" to="/checkout">Finalizar Compra</Link>
    </div>
  );
};

export default Cart;
