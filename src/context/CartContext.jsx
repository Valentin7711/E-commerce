import { createContext, useContext, useState } from "react";


// Crear el contexto
const CartContext = createContext();

// Custom para acceder al contexto
export const useCart = () => useContext(CartContext);

// Componente proveedor
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agregar un producto al carrito
const addToCart = (item, cantidad) => {
  const productoEnCarrito = cart.find(prod => prod.id === item.id);

  if (productoEnCarrito) {
    if (productoEnCarrito.cantidad + cantidad > item.stock) {
      return `Solo hay ${item.stock} unidades disponibles.`;
    }

    const carritoActualizado = cart.map(prod =>
      prod.id === item.id
        ? { ...prod, cantidad: prod.cantidad + cantidad }
        : prod
    );
    setCart(carritoActualizado);
    return "Producto actualizado en el carrito.";
  }

  if (cantidad > item.stock) {
    return `Solo hay ${item.stock} unidades disponibles.`;
  }

  setCart([...cart, { ...item, cantidad }]);
  return "Producto agregado al carrito.";
};


  // Eliminar un producto por ID
  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Vaciar todo el carrito
  const clearCart = () => setCart([]);

  // Verificar si un producto ya está en el carrito
  const isInCart = (id) => {
    return cart.some(item => item.id === id);
  };

  // Total de unidades en el carrito
  const totalItems = cart.reduce((acc, item) => acc + item.cantidad, 0);

  // Total en pesos del carrito
  const cartTotal = cart.reduce((acc, item) => acc + item.price * item.cantidad, 0);

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeItem,
      clearCart,
      isInCart,
      totalItems,
      cartTotal
    }}>
      {children}
    </CartContext.Provider>
  );
};
