import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import "../styles/CartWidget.css";

const CartWidget = () => {
  const { totalItems } = useCart();

  return (
    <Link to="/cart" className="cart">
      <FaShoppingCart size={24} />
      <span className="cart-span">{totalItems}</span>
    </Link>
  );
};

export default CartWidget;
