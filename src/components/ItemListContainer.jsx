import "../styles/ItemListContainer.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../service/Firebase";
import Loading from "./Loading"; 

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const productsCollection = collection(db, "coderhouse");

    const consulta = categoryId
      ? query(productsCollection, where("category", "==", categoryId))
      : productsCollection;

    getDocs(consulta)
      .then((res) => {
        const list = res.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProductos(list);
      })
      .catch((error) => console.log("Error al obtener productos:", error))
      .finally(() => setLoading(false));
  }, [categoryId]);

  return (
    <div className="lista">
      <h2>{categoryId ? `Categoría: ${categoryId}` : "Lista de Productos"}</h2>
      {loading ? <Loading /> : <ItemList items={productos} />}
    </div>
  );
};

export default ItemListContainer;
