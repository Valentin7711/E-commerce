import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import "../styles/ItemDetailContainer.css";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../service/Firebase";
import Loading from "./Loading"; 

const ItemDetailContainer = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [invalid, setInvalid] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const docRef = doc(db, "coderhouse", productId);
    getDoc(docRef)
      .then((res) => {
        if (res.exists()) {
          setProduct({ id: res.id, ...res.data() });
        } else {
          setInvalid(true);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [productId]);

  if (loading) {
    return <Loading />; 
  }

  if (invalid) {
    return (
      <div>
        <h1>Producto no encontrado</h1>
        <Link to="/">Volver a Home</Link>
      </div>
    );
  }

  return (
    <div className="detalle-producto">
      <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetailContainer;
