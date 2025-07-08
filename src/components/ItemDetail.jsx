import { useState } from "react";
import { useCart } from "../context/CartContext";
import "../styles/ItemDetail.css";
import Swal from "sweetalert2";


const ItemDetail = ({ product }) => {
  const [cantidad, setCantidad] = useState(1);
  const { addToCart } = useCart();

 const handleAgregar = () => {
  addToCart(product, cantidad);
  Swal.fire({
    icon: 'success',
    title: 'Producto agregado',
    text: `${cantidad} ${product.name} se agregaron al carrito`,
    timer: 1500,
    showConfirmButton: false,
  });
};


  return (
    <div className="item-detail">
      <img src={`/img/${product.img}`} alt={product.name} />
      <h2>{product.name}</h2>
      <p>Precio: ${product.price}</p>
      <p>Categoría: {product.category}</p>
      <p>Stock disponible: {product.stock}</p>
      <input
        type="number"
        min="1"
        max={product.stock}
        value={cantidad}
        onChange={(e) => setCantidad(Number(e.target.value))}
      />
      <button
        onClick={handleAgregar}
        disabled={cantidad > product.stock || cantidad < 1}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemDetail;
