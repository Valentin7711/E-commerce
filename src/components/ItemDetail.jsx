import { useState } from "react";
import "../styles/ItemDetail.css";

function ItemDetail({ product }) {
  const [cantidad, setCantidad] = useState(1);

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
      <button onClick={() => alert(`Agregaste ${cantidad} al carrito`)}
        disabled={cantidad > product.stock || cantidad < 1}>Agregar al carrito</button>
    </div>
  );
}

export default ItemDetail;
