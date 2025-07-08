import NavBar from "./components/NavBar"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ErrorPage from "./components/ErrorPage";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import "./styles/responsive.css";


const App = () => {
  return (
    <CartProvider>
     <BrowserRouter>
     <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/product/:productId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={ <ErrorPage/> } />
      </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
