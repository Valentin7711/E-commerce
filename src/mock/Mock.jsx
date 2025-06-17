const products = [
  { 
    id: 1,
    name: "Camiseta",
    category: "ropa",
    price: 200,
    stock:"5",
    img:"camiseta.png"
  },
  { 
    id: 2,
    name: "Pantalón",
    category: "ropa",
    price: 300,
    stock:"6",
    img: "pantalon.png"
  },
  {
     id: 3,
    name: "Zapatillas",
    category: "calzado",
    price: 500,
    stock:"7",
    img:"zapatillas.png" 
  },
  {
     id: 4,
    name: "Gorra",
    category: "accesorios",
    price: 150,
    stock:"2",
    img:"gorras.png" 
  },
];


export function getProducts() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 1000);
  });
}

export function getProductsByCategory(category) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter(p => p.category === category));
    }, 1000);
  });
}

export function getProductById(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(p => p.id === parseInt(id)));
    }, 1000);
  });
}
