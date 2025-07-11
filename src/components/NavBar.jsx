import "../styles/NavBar.css" 
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="mi-ecommerse">
       <NavLink to="/"> Mi <span className="span-ecommerce">E-Commerce</span></NavLink>
      </div>
      <h1 className="tienda">Bienvenidos a mi Tienda</h1>
      <ul className="nav-bar">
        <li>
          <NavLink to="/">Todos</NavLink>
        </li>
        <li>
          <NavLink to="/category/ropa">Ropa</NavLink>
        </li>

        <li>
          <NavLink to="/category/calzado">Calzado</NavLink>
        </li>
        <li>
          <NavLink to="/category/accesorios">Accesorios</NavLink>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default Navbar;
