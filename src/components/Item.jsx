// tarjeta

import { Link } from "react-router-dom";
import "../styles/Item.css"

 function Item({ item }) {
  return (
    <div className="item-card">
      <img src={`/img/${item.img}`} alt={item.name} />
      <h3>{item.name}</h3>
      <p>Precio: ${item.price}</p>
      <Link to={`/product/${item.id}`}>Ver detalle</Link>
    </div>
  );
}

export default Item