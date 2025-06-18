// contenedor lista de productos
import "../styles/ItemListContainer.css"

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { getProducts, getProductsByCategory } from "../mock/Mock";

 function ItemListContainer() {
  const { categoryId } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const pedirProductos = categoryId ? getProductsByCategory : getProducts;
    pedirProductos(categoryId)
    .then((respuesta) => setProductos(respuesta));
  }, [categoryId]);

  return (
    <div className="lista">
      <h2>{categoryId ? `Categoría: ${categoryId}` : "Lista de Productos"}</h2>
      <ItemList items={productos} />
    </div>
  );
}

export default ItemListContainer