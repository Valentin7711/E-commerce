import "../styles/CartWidget.css"
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
  const itemCount = 7;

  return (
    <div className="cart">
      <FaShoppingCart size={24} />
      <span className="cart-span">{itemCount}</span>
    </div>
  );
};

export default CartWidget;
