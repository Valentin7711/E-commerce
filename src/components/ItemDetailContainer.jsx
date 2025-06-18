// contenedor detalle producto

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../mock/Mock";
import ItemDetail from "./ItemDetail";
import "../styles/ItemDetailContainer.css"

 function ItemDetailContainer() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(productId)
    .then(data => setProduct(data));
  }, [productId]);

  return (
    <div className="cargando-producto">{product ? <ItemDetail product={product} /> : <p className="p-cargando">Cargando producto...</p>}</div>
  );
}

export default ItemDetailContainer